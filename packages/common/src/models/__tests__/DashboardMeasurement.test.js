import DashboardMeasurement, {
  DonutChart,
  MeasurementQuestionAnswer,
  PieChartMeasurement,
} from '../DashboardMeasurement';

const weightMeasurement = {
  key: '3141-9',
  category: '3141-9',
  title: 'Weight',
  unit: 'kg',
  display: '{0}',
  values: [85],
  measured_at: '2021-07-16T10:45:57.792000Z',
  color: '#88949D',
  label: '',
};

const glucoseMeasurement = {
  key: '15074-8',
  category: '15074-8',
  title: 'Glucose',
  unit: 'mg/dl',
  display: '{0}',
  values: [5.38],
  measured_at: null,
  color: '#88949D',
  label: '',
  code: 'glucose-pre-meal',
};

const bloodPressureMeasurement = {
  key: '55284-4',
  category: '55284-4',
  title: 'Blood pressure',
  unit: 'mmHg',
  display: '{0}/{1}',
  values: [170, 130],
  measured_at: '2021-07-08T15:09:06.078602Z',
  color: '#88949D',
  label: '',
};

const answer = {
  question: {
    key: 'HBA1C',
    title: 'Most recent HbA1c collected in the past 6 months',
  },
  answers: [
    {
      value: '213',
    },
  ],
  answer_type: 'numeric',
  created_at: '2021-07-08T15:09:48.979920Z',
  updated_at: '2021-07-08T15:09:48.979945Z',
};

const results = [
  {
    id: 78,
    code: 'glucose-fasting',
    measured_at: '2021-08-12T10:11:16.358000Z',
    device: '22748f29-7658-4728-aa22-6e5adac105f2',
    unit: 'mg/dl',
    value: 200,
    severity_label: 'Significant',
    severity_uid: 'significant',
    color: '#E49421',
  },
  {
    id: 77,
    code: 'glucose-pos-meal',
    measured_at: '2021-08-12T10:10:54.871000Z',
    device: '22748f29-7658-4728-aa22-6e5adac105f2',
    unit: 'mg/dl',
    value: 120,
    severity_label: 'No problems',
    severity_uid: 'no-problems',
    color: '#58B711',
  },
  {
    id: 76,
    code: 'glucose-pre-meal',
    measured_at: '2021-08-12T10:09:14.361000Z',
    device: '22748f29-7658-4728-aa22-6e5adac105f2',
    unit: 'mg/dl',
    value: 90,
    severity_label: 'No problems',
    severity_uid: 'no-problems',
    color: '#58B711',
  },
  {
    id: 75,
    code: '15074-8',
    measured_at: '2021-08-12T10:08:05.940000Z',
    device: '22748f29-7658-4728-aa22-6e5adac105f2',
    unit: 'mg/dl',
    value: 120,
    severity_label: 'Uncategorized',
    severity_uid: 'uncategorized',
    color: '#88949D',
  },
];

const pieChartInput = {
  chart: {
    count: 5,
    avg: '136.00',
  },
  reading: {
    data: {
      links: {
        next: null,
        previous: null,
      },
      count: 5,
      num_pages: 1,
      results: [
        {
          id: 79,
          code: 'glucose-pre-meal',
          measured_at: '2021-08-23T09:51:47.047000Z',
          device: '22748f29-7658-4728-aa22-6e5adac105f2',
          unit: 'mg/dl',
          value: 150,
          severity_label: 'Light',
          severity_uid: 'light',
          color: '#A1B711',
        },
        {
          id: 78,
          code: 'glucose-fasting',
          measured_at: '2021-08-12T10:11:16.358000Z',
          device: '22748f29-7658-4728-aa22-6e5adac105f2',
          unit: 'mg/dl',
          value: 200,
          severity_label: 'Significant',
          severity_uid: 'significant',
          color: '#E49421',
        },
        {
          id: 77,
          code: 'glucose-pos-meal',
          measured_at: '2021-08-12T10:10:54.871000Z',
          device: '22748f29-7658-4728-aa22-6e5adac105f2',
          unit: 'mg/dl',
          value: 120,
          severity_label: 'No problems',
          severity_uid: 'no-problems',
          color: '#58B711',
        },
        {
          id: 76,
          code: 'glucose-pre-meal',
          measured_at: '2021-08-12T10:09:14.361000Z',
          device: '22748f29-7658-4728-aa22-6e5adac105f2',
          unit: 'mg/dl',
          value: 90,
          severity_label: 'No problems',
          severity_uid: 'no-problems',
          color: '#58B711',
        },
        {
          id: 75,
          code: '15074-8',
          measured_at: '2021-08-12T10:08:05.940000Z',
          device: '22748f29-7658-4728-aa22-6e5adac105f2',
          unit: 'mg/dl',
          value: 120,
          severity_label: 'Uncategorized',
          severity_uid: 'uncategorized',
          color: '#88949D',
        },
      ],
    },
  },
  donutChart: {
    series: [
      {
        value: 1,
        marker: 'Light: 1',
      },
      {
        value: 1,
        marker: 'Significant: 1',
      },
      {
        value: 2,
        marker: 'No problems: 2',
      },
      {
        value: 1,
        marker: 'Uncategorized: 1',
      },
    ],
    colors: [-6179055, -1797087, -10963183, -7826275],
  },
  code: 'LP14635-4',
  unit: 'mg/dL',
};

describe('Test DashboardMeasurement model', () => {
  it('Create weight DashboardMeasurement', () => {
    const m = new DashboardMeasurement(weightMeasurement);

    expect(m.slug).toBe('weight');
    expect(m.reading).toBe('85');
    expect(m.unit).toBe(weightMeasurement.unit);
    expect(m.color).toBe(weightMeasurement.color);
    expect(m.description).toBe(weightMeasurement.description);
    expect(m.readOnly).toBe(false);
    expect(m.icon).toBe(undefined);
  });

  it('Create weight DashboardMeasurement with description and id', () => {
    weightMeasurement.description = 'A weight measurement';
    weightMeasurement.id = '123lkm';
    const m = new DashboardMeasurement(weightMeasurement);

    expect(m.description).toBe(weightMeasurement.description);
    expect(m.id).toBe(weightMeasurement.id);
  });

  it('Create glucose DashboardMeasurement', () => {
    const m = new DashboardMeasurement(glucoseMeasurement);

    expect(m.slug).toBe('glucose');
    expect(m.slug).toBe('glucose');
    expect(m.reading).toBe('5.38');
    expect(m.unit).toBe(glucoseMeasurement.unit);
    expect(m.color).toBe(glucoseMeasurement.color);
    expect(m.description).toBe(undefined);
    expect(m.readOnly).toBe(false);
    expect(m.icon).toStrictEqual({class: 'icon-apple', label: 'Before meal'});
  });

  it('Create glucose post meal DashboardMeasurement', () => {
    glucoseMeasurement.code = 'glucose-pos-meal';
    const m = new DashboardMeasurement(glucoseMeasurement);

    expect(m.icon).toStrictEqual({
      class: 'icon-half-apple',
      label: 'Post meal',
    });
  });

  it('Create glucose fasting DashboardMeasurement', () => {
    glucoseMeasurement.code = 'glucose-fasting';
    const m = new DashboardMeasurement(glucoseMeasurement);

    expect(m.icon).toStrictEqual({
      class: 'icon-no-apple',
      label: 'Fasting',
    });
  });

  it('Create blood pressure DashboardMeasurement', () => {
    const m = new DashboardMeasurement(bloodPressureMeasurement);

    expect(m.slug).toBe('blood-pressure');
    expect(m.reading).toBe('170/130');
    expect(m.unit).toBe(bloodPressureMeasurement.unit);
    expect(m.color).toBe(bloodPressureMeasurement.color);
    expect(m.readOnly).toBe(false);
  });

  it('Create MeasurementQuestionAnswer', () => {
    const m = new MeasurementQuestionAnswer(answer, '%');

    expect(m.title).toBe('Most recent HbA1c collected in the past 6 months');
    expect(m.values).toStrictEqual(['213']);
    expect(m.display).toBe('{0}');
    expect(m.unit).toBe('%');
    expect(m.reading).toBe('213');
  });

  it('Create DonutChart', () => {
    const m = new DonutChart(results);

    expect(m.series[0].value).toBe(1);
    expect(m.series[0].marker).toBe('Significant: 1');
    expect(m.colors[0]).toBe(4293170209);
  });

  it('Create empty DonutChart', () => {
    const m = new DonutChart([]);

    expect(m.series).toStrictEqual([]);
    expect(m.colors).toStrictEqual([]);
  });

  it('Create PieChartMeasurement', () => {
    const m = new PieChartMeasurement({...pieChartInput});
    expect(m.chart).toStrictEqual(pieChartInput.donutChart);
    expect(m.count).toStrictEqual(pieChartInput.chart.count);
    expect(m.filterId).toStrictEqual(undefined);
    expect(m.avg).toBe('136.00');
  });

  it('Create PieChartMeasurement without results', () => {
    const m = new PieChartMeasurement({
      ...pieChartInput,
      reading: {data: {results: []}},
    });
    expect(m.chart).toStrictEqual(pieChartInput.donutChart);
    expect(m.count).toStrictEqual(undefined);
    expect(m.filterId).toStrictEqual(undefined);
    expect(m.avg).toBe(0);
  });
});
