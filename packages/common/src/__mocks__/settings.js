export const clinicalTrials = [
  {
    category: 'Cataract',
    items: [
      {
        agreed: true,
        agreed_at: '2021-08-31T13:16:44.043609Z',
        clinical_trial: {
          id: 'WNgkxVp',
          display: 'CUF Value Based Healthcare - Cataract',
          logo: null,
        },
        patient_disease: {
          id: 3,
          disease: {
            name: 'Cataract',
          },
          institution: {
            short_name: 'HDSC',
          },
          updated_at: '2021-08-18T09:34:31.072440Z',
        },
        refused_at: null,
      },
      {
        agreed: false,
        agreed_at: null,
        clinical_trial: {
          id: 'WNgkxVx',
          display: 'Institution 2',
          logo: null,
        },
        patient_disease: {
          id: 3,
          disease: {
            name: 'Cataract',
          },
          institution: {
            short_name: 'HDSC',
          },
          updated_at: '2021-08-18T09:34:31.072440Z',
        },
        refused_at: null,
      },
    ],
  },
];

export const settings = {
  clinicalTrials: [
    {
      clinical_trial: {
        id: 'K1Ve9V5',
        display: 'Institution 1',
        html: 'html 1',
        logo: '/static/terms/logos/cuf-ct-logo.svg',
      },
      agreed: true,
      agreed_at: '2021-10-27T17:36:29.150143Z',
      refused_at: null,
      download_url:
        'http://localhost:8000/api/terms/patients/32131-1432523-421ekm/diseases/1/clinical-trials/4324324/export?f=pdf',
    },
    {
      clinical_trial: {
        id: 'MEVlbYj',
        display: 'Institution 1',
        html: 'html 2',
        logo: '/static/terms/logos/multicare-ct-logo.svg',
      },
      agreed: false,
      agreed_at: null,
      refused_at: null,
      download_url:
        'hhttp://localhost:8000/api/terms/patients/32131-1432523-421ekm/diseases/1/clinical-trials/31231/export?f=pdf',
    },
  ],
};

export const languages = [
  {label: 'English', value: 'en'},
  {label: 'Português', value: 'pt'},
  {label: 'Español', value: 'es'},
  {label: 'Português Brasil', value: 'pt-br'},
  {label: 'Français', value: 'fr'},
  {label: 'English (United Kingdom)', value: 'en-gb'},
  {label: 'Dansk', value: 'da-dk'},
  {label: 'Czech', value: 'cz'},
];
