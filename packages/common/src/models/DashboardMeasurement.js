import {makeTrans} from 'utils/translations';
import {groupBy} from 'lodash';
import {processColor} from 'react-native';
import {moment} from '../utils/dates';

export const categoryMaps = {
  '8867-4': 'blood-pressure', // heart rate
  '15074-8': 'glucose',
  '3141-9': 'weight',
  '55284-4': 'blood-pressure',
  'LP14635-4': 'glucose',
  steps: 'steps',
};

export class GlucoseClassifier {
  constructor() {
    this.icons = {
      'glucose-fasting': {
        icon: 'icon-no-apple',
        label: makeTrans('Fasting'),
      },
      'glucose-pre-meal': {
        icon: 'icon-apple',
        label: makeTrans('Before meal'),
      },
      'glucose-pos-meal': {
        icon: 'icon-half-apple',
        label: makeTrans('Post meal'),
      },
    };
  }
}

export const getIcon = (code) => {
  switch (code) {
    case '15074-8':
    case 'glucose-pre-meal':
      return {
        class: 'icon-apple',
        label: makeTrans('Before meal'),
      };
    case 'glucose-pos-meal':
      return {
        class: 'icon-half-apple',
        label: makeTrans('Post meal'),
      };
    case 'glucose-fasting':
      return {
        class: 'icon-no-apple',
        label: makeTrans('Fasting'),
      };
    default:
      return undefined;
  }
};

class FormDataBloodPressure {
  constructor(code, unit, name) {
    this.code = code;
    this.name = name;
    this.fields = [
      {
        name: makeTrans('Systolic blood pressure'),
        code: '8480-6',
        widget: 'text',
        unit,
      },
      {
        name: makeTrans('Diastolic blood pressure'),
        code: '8462-4',
        widget: 'text',
        unit,
      },
    ];
  }
}

class FormDataGlucose {
  constructor(code, unit, name) {
    this.code = code;
    this.name = name;
    this.fields = [
      {
        name,
        code,
        widget: 'text',
        unit,
      },
    ];
    this.classifier = new GlucoseClassifier();
  }
}

class FormData {
  constructor(code, unit, name) {
    this.code = code;
    this.name = name;
    this.fields = [
      {
        name,
        code,
        widget: 'text',
        unit,
      },
    ];
  }
}

export const formDataFactory = (data) => {
  switch (data.category) {
    case '55284-4':
      return new FormDataBloodPressure(data.category, data.unit, data.name);
    case '15074-8':
      return new FormDataGlucose(data.category, data.unit, data.name);
    default:
      return new FormData(data.category, data.unit, data.name);
  }
};

const getClassifier = (category) => {
  if (category === '15074-8') {
    return new GlucoseClassifier();
  }
  return undefined;
};

const _format = (string, args) => {
  let s = string;

  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const k in args) {
    s = s.replace(`{${k}}`, args[k]);
  }

  return s;
};

const buildDisplay = (values = [], display) =>
  values.length > 0 ? _format(display, values) : undefined;

class DashboardMeasurement {
  // list of editable measurements
  getEditable(dash = false) {
    const editables = [
      '3137-7',
      '3141-9',
      '15074-8',
      '8480-6',
      '8462-4',
      '55284-4',
      '8867-4',
    ];
    if (dash) {
      editables.push('55284-4');
    }
    return editables;
  }

  constructor(data, dash = true) {
    this.id = data.id && data.id !== '' ? data.id : `${Math.random()}`;
    this.category = data.category;
    this.url = data.url;
    this.download_url = data.extra?.download_url;
    this.slug = categoryMaps[data.category];
    this.title = data.title;
    this.description = data.description;
    this.display = data.display;
    this.reading = buildDisplay(data.values, data.display);
    this.unit = data.unit;
    this.values = data.values;
    this.color = data.color;
    this.label = data.label;
    this.readOnly = !this.getEditable(dash).includes(data.category);
    this.date = data.measured_at;
    this.editableForm = formDataFactory(data);
    this.icon = getIcon(data.code);
    this.classifier = getClassifier(data.category);
    this.code = data.code || data.category;
  }
}

export class MeasurementQuestionAnswer {
  constructor(data, unit, display = '{0}') {
    const {answers, question} = data;
    this.title = question.title;
    this.values = this._getAnswers(answers);
    this.display = display;
    this.unit = unit;
    this.reading = buildDisplay(this.values, this.display);
    this.readOnly = true;
  }

  _getAnswers = (answers) => answers.map((a) => a.value);
}

export class DonutChart {
  constructor(data) {
    const group = groupBy(data, 'severity_uid');
    this.series =
      data.length > 0
        ? Object.keys(group).map((level) => {
            return {
              value: group[level].length,
              marker: `${group[level][0].severity_label}: ${group[level].length}`,
            };
          })
        : [];
    this.colors =
      data.length > 0
        ? Object.keys(group).map((level) => processColor(group[level][0].color))
        : [];
  }
}

export class PieChartMeasurement extends DashboardMeasurement {
  constructor({chart, reading, donutChart, measurementCode, unit}) {
    const {results, count} = reading.data;
    super({
      ...chart,
      ...reading,
      category: measurementCode,
      values:
        results.length > 0
          ? [
              Number(
                results.reduce((p, d) => p + d.value, 0) / results.length,
              ).toFixed(2),
            ]
          : [],
      display: '{0}',
      unit: unit,
    });

    this.chart = donutChart;
    this.count = count;
    this.filterId = chart.filterId;
    this.avg =
      results && results.length > 0
        ? Number(
            results.reduce((avg, result) => result.value + avg, 0) / count,
          ).toFixed(2)
        : 0;
  }
}

const getFiltersBySlug = (slug) => {
  let filters = [];

  switch (slug) {
    case 'heart-rate': {
      filters = [
        {
          id: 'weekly',
          title: makeTrans('Weekly'),
          ndays: 7,
          range: 7,
          aggBy: 'value',
          aggFuncs: 'min,max',
          aggValues: 'code_id,device_id,measured_at__date,code__unit',
        },
        {
          id: 'monthly',
          title: makeTrans('Monthly'),
          ndays: 30,
          range: 30,
          aggBy: 'value',
          aggFuncs: 'min,max',
          aggValues: 'code_id,device_id,measured_at__date,code__unit',
        },
      ];
      break;
    }
    default: {
      filters = [
        // { slug: 'daily', title: makeTrans('Daily'), ndays: 1, range: 0 },
        {id: 'weekly', title: makeTrans('Weekly'), ndays: 7, range: 7},
        {id: 'monthly', title: makeTrans('Monthly'), ndays: 30, range: 30},
        // { slug: 'yearly', title: makeTrans('Yearly'), ndays: 365 },
      ];
      break;
    }
  }

  return filters;
};

export class ChartFilters {
  constructor(slug = '') {
    this.filters = getFiltersBySlug(slug);
  }

  getQueryParam = (slug, category = '') => {
    const filter = this.filters.find((fi) => fi.id === slug);
    let params = '';

    switch (category) {
      case 'heart-rate': {
        params = `last_number_days=${filter.ndays}&agg_by=${filter.aggBy}&agg_funcs=${filter.aggFuncs}&agg_values=${filter.aggValues}`;
        break;
      }
      default: {
        params = `ts=${filter.id}&last_number_days=${filter.ndays}`;
        break;
      }
    }

    return params;
  };

  /**
   * Create min and max date intervale. This method is used for charts
   * Whe use current date to get previous data ex: last 7 days, last 30 days
   *
   * @param {string} slug selected filter ex: Daily, Weekly, Monthly, Yearly
   *
   * @returns {object} {min: date, max: date}
   */
  getAxisRange = (slug) => {
    const filter = this.filters.find((fi) => fi.slug === slug);

    const range = {
      min: new Date(moment().subtract(filter.ndays, 'days').toDate()).getTime(),
      max: new Date(moment().toDate()).getTime(),
    };
    return range;
  };
}

export default DashboardMeasurement;
