import {createSelector} from 'reselect';
import {get} from 'lodash';
import i18next from 'i18next';
import {DEFAULT_DATE_FORMAT, moment, sortDate} from '../utils/dates';
import {getEventName} from '../utils';
import {getInstitutionData} from '../selectors/selected_institutions';
import {getTrans} from '../utils/translations';

export const getDiseasesData = (state) => state.diseases || [];

export const getSelectedDisease = (state) => state.diseases.selected || {};

export const getDiseaseItems = createSelector(
  [getDiseasesData],
  (disease) => disease.items || [],
);

export const getSelectedTreatmentEventsList = createSelector(
  [getDiseasesData],
  (disease) => disease.selectedTreatmentEvents || [],
);

export const getDiseaseChartData = createSelector(
  [getSelectedDisease, getSelectedTreatmentEventsList],
  (disease, events) =>
    [
      ...get(disease, 'scores[0].scores', []),
      ...events.map((e) => ({
        ...e,
        date: moment(e.event_at).format('L'),
        event: {
          name: e.name,
        },
      })),
    ].sort(sortDate),
);

export const getDiseaseEventsTimeline = createSelector(
  [getDiseasesData],
  (disease) => disease.eventsTimeline || [],
);

const _getEventSection = (items) =>
  items.reduce((p, i) => {
    p[`${i.event.slug}-${i.event.id}`] = {
      event: {
        ...i.event,
        name: getEventName(
          `${getTrans(i.event, 'name', i18next.language)}`,
          i.event.laterality,
        ),
      },
      timings: [
        ...(p[`${i.event.slug}-${i.event.id}`]
          ? p[`${i.event.slug}-${i.event.id}`].timings
          : []),
        i,
      ],
    };
    return p;
  }, {});

export const getDiseaseDetails = createSelector(
  [getSelectedDisease],
  (patientDisease) => {
    return {
      name: patientDisease.disease ? patientDisease.disease.name : '',
      id: patientDisease.disease ? patientDisease.disease.id : undefined,
      created_at: patientDisease
        ? moment(patientDisease.created_at).format(DEFAULT_DATE_FORMAT)
        : '',
      treatment: 'Cirurgia',
      hospital: patientDisease.institution
        ? getInstitutionData(patientDisease.institution)
        : {},
      timeline: {
        patients: patientDisease.timeline
          ? _getEventSection(
              patientDisease.timeline.filter((t) => t.source === 'patient'),
            )
          : [],
        physician: patientDisease.timeline
          ? _getEventSection(
              patientDisease.timeline.filter((t) => t.source !== 'clinician'),
            )
          : [],
      },
    };
  },
);

export const getReadingsRanges = createSelector(
  [getDiseasesData],
  (disease) => disease.ranges || [],
);
