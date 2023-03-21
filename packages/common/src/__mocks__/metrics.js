export const metrics = [
  {
    id: '0.10628831463698174',
    category: '15074-8',
    slug: 'glucose',
    title: 'Glucose',
    display: '{0}',
    unit: 'mg/dl',
    values: [],
    color: '#88949D',
    label: '',
    readOnly: false,
    date: null,
    editableForm: {
      code: '15074-8',
      fields: [
        {
          code: '15074-8',
          widget: 'text',
          unit: 'mg/dl',
        },
      ],
      classifier: {
        icons: {
          'glucose-fasting': {
            icon: 'icon-no-apple',
            label: 'Fasting',
          },
          'glucose-pre-meal': {
            icon: 'icon-apple',
            label: 'Before meal',
          },
          'glucose-pos-meal': {
            icon: 'icon-half-apple',
            label: 'Post meal',
          },
        },
      },
    },
    classifier: {
      icons: {
        'glucose-fasting': {
          icon: 'icon-no-apple',
          label: 'Fasting',
        },
        'glucose-pre-meal': {
          icon: 'icon-apple',
          label: 'Before meal',
        },
        'glucose-pos-meal': {
          icon: 'icon-half-apple',
          label: 'Post meal',
        },
      },
    },
    code: '15074-8',
  },
  {
    id: '0.14792720825554562',
    category: '55284-4',
    slug: 'blood-pressure',
    title: 'Blood pressure',
    display: '{0}/{1}',
    reading: '170/130',
    unit: 'mmHg',
    values: [170, 130],
    color: '#88949D',
    label: '',
    readOnly: false,
    date: '2021-07-08T15:09:06.078602Z',
    editableForm: {
      code: '55284-4',
      fields: [
        {
          name: 'Systolic blood pressure',
          code: '8480-6',
          widget: 'text',
          unit: 'mmHg',
        },
        {
          name: 'Diastolic blood pressure',
          code: '8462-4',
          widget: 'text',
          unit: 'mmHg',
        },
      ],
    },
    code: '55284-4',
  },
  {
    id: '0.652602863490507',
    category: 'steps',
    slug: 'steps',
    title: 'Steps',
    display: '{0}',
    unit: 'Today',
    values: [],
    color: '#88949D',
    label: '',
    readOnly: true,
    date: '2021-07-16T14:24:43.615430Z',
    editableForm: {
      code: 'steps',
      fields: [
        {
          code: 'steps',
          widget: 'text',
          unit: 'Today',
        },
      ],
    },
    code: 'steps',
  },
  {
    id: '0.23764344961096895',
    category: 'resting-heart-rate',
    title: 'Resting Heart Rate',
    display: '{0}',
    unit: 'bpm',
    values: [],
    color: '#88949D',
    label: '',
    readOnly: true,
    date: null,
    editableForm: {
      code: 'resting-heart-rate',
      fields: [
        {
          code: 'resting-heart-rate',
          widget: 'text',
          unit: 'bpm',
        },
      ],
    },
    code: 'resting-heart-rate',
  },
  {
    id: '0.6774549738824318',
    category: '3141-9',
    slug: 'weight',
    title: 'Weight',
    display: '{0}',
    reading: '85',
    unit: 'kg',
    values: [85],
    color: '#88949D',
    label: '',
    readOnly: false,
    date: '2021-07-16T10:45:57.792000Z',
    editableForm: {
      code: '3141-9',
      fields: [
        {
          code: '3141-9',
          widget: 'text',
          unit: 'kg',
        },
      ],
    },
    code: '3141-9',
  },
  {
    id: '0.8161215262124579',
    category: 'ecg',
    download_url:
      'http://dev.localhost:8000/api/patients/b405e156-eacd-4632-b96e-ac041957ce69/assets/8rGqgHws?dl=1',
    title: 'ECG',
    display: '{0}',
    reading: 'Inconclusive',
    unit: '',
    values: ['Inconclusive', -1],
    color: '#ff4400',
    label: 'Normal synus rhythm',
    readOnly: true,
    date: '2022-01-03T00:00:00Z',
    editableForm: {
      code: 'ecg',
      fields: [
        {
          code: 'ecg',
          widget: 'text',
          unit: '',
        },
      ],
    },
    code: 'ecg',
  },
];

export const glucoseMetrics = [
  {
    id: 16,
    category: '15074-8',
    slug: 'glucose',
    title: 'Glucose',
    description: 'Last reading',
    display: '{0}',
    reading: '130',
    unit: 'mg/dl',
    values: [130],
    readOnly: false,
    editableForm: {
      code: '15074-8',
      fields: [
        {
          code: '15074-8',
          widget: 'text',
          unit: 'mg/dl',
        },
      ],
      classifier: {
        icons: {
          'glucose-fasting': {
            icon: 'icon-no-apple',
            label: 'Fasting',
          },
          'glucose-pre-meal': {
            icon: 'icon-apple',
            label: 'Before meal',
          },
          'glucose-pos-meal': {
            icon: 'icon-half-apple',
            label: 'Post meal',
          },
        },
      },
    },
    icon: {
      class: 'icon-apple',
      label: 'Before meal',
    },
    classifier: {
      icons: {
        'glucose-fasting': {
          icon: 'icon-no-apple',
          label: 'Fasting',
        },
        'glucose-pre-meal': {
          icon: 'icon-apple',
          label: 'Before meal',
        },
        'glucose-pos-meal': {
          icon: 'icon-half-apple',
          label: 'Post meal',
        },
      },
    },
    code: 'glucose-pre-meal',
  },
  {
    id: '0.780555075946141',
    category: 'month-glucose-readings',
    title: 'Last Month Readings',
    description: 'Average',
    display: '{0}',
    unit: '/ per day',
    values: [],
    readOnly: true,
    editableForm: {
      code: 'month-glucose-readings',
      fields: [
        {
          code: 'month-glucose-readings',
          widget: 'text',
          unit: '/ per day',
        },
      ],
    },
    code: 'month-glucose-readings',
  },
  {
    title: 'Most recent HbA1c collected in the past 6 months',
    values: ['213'],
    display: '{0}',
    unit: '%',
    reading: '213',
    readOnly: true,
  },
];

export const ecgMetrics = [
  {
    color: '#88949D',
    date: '2022-01-03T00:00:00Z',
    description: '',
    id: '__ma__20220103000000__d__d917451f-f774-486b-9b12-e302654a519d__c__ecg',
    title: 'Não categorizado',
    url:
      'http://192.168.68.102:8000/api/patients/d917451f-f774-486b-9b12-e302654a519d/assets/QIhcmDT1?dl=1',
  },
  {
    color: '#88949D',
    date: '2022-01-02T00:00:00Z',
    description: '',
    id: '__ma__20220102000000__d__d917451f-f774-486b-9b12-e302654a519d__c__ecg',
    title: 'Não categorizado',
    url:
      'http://192.168.68.102:8000/api/patients/d917451f-f774-486b-9b12-e302654a519d/assets/XOJuz72m?dl=1',
  },
  {
    color: '#88949D',
    date: '2022-01-01T00:00:00Z',
    description: '',
    id: '__ma__20220101000000__d__d917451f-f774-486b-9b12-e302654a519d__c__ecg',
    title: 'Não categorizado',
    url:
      'http://192.168.68.102:8000/api/patients/d917451f-f774-486b-9b12-e302654a519d/assets/LD2UNRho?dl=1',
  },
];
