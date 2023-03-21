export const patientState = {
  patient: {
    institutions: [
      {
        id: 'cuf',
        url: 'http://127.0.0.1:8001/api/institutions/cuf',
        name: 'CUF Infante Santo ',
        type: 'hospital',
        sector: 'private',
        city: 'Porto',
        address: '',
        coords: '',
        country_url: 'http://127.0.0.1:8001/api/countries/PT',
        country: 'PT',
        teams_url: 'http://127.0.0.1:8001/api/institutions/cuf/teams',
        members_url: 'http://127.0.0.1:8001/api/institutions/cuf/members',
        patients_url: 'http://127.0.0.1:8001/api/institutions/cuf/patients',
        followers_url: 'http://127.0.0.1:8001/api/institutions/cuf/followers',
        short_name: 'HCIS',
        avatar_url: '/static/avatar/inst/cuf.png',
        branding: {
          app: {
            colors: {
              primary: '#00AABB',
            },
            logo_url:
              'https://127.0.0.1/static/avatar/inst/cuf-descobertas-banner.svg',
          },
          colors: {
            primary: '#00AABB',
          },
          logo_url:
            'https://127.0.0.1/static/avatar/inst/cuf-descobertas-banner.svg',
        },
        configurations: {
          features: {
            Expand: {
              enabled: true,
            },
            metrics: {
              enabled: true,
            },
            Featured: {
              enabled: true,
            },
            WatchList: {
              enabled: true,
            },
            FiltersEnabled: {
              enabled: true,
            },
            ClinicalProtocol: {
              enabled: true,
            },
          },
        },
      },
    ],
    selectedInstitution: {
      id: 'cuf',
      url: 'http://127.0.0.1:8001/api/institutions/cuf',
      name: 'CUF Infante Santo ',
      type: 'hospital',
      sector: 'private',
      city: 'Porto',
      address: '',
      coords: '',
      country_url: 'http://127.0.0.1:8001/api/countries/PT',
      country: 'PT',
      teams_url: 'http://127.0.0.1:8001/api/institutions/cuf/teams',
      members_url: 'http://127.0.0.1:8001/api/institutions/cuf/members',
      patients_url: 'http://127.0.0.1:8001/api/institutions/cuf/patients',
      followers_url: 'http://127.0.0.1:8001/api/institutions/cuf/followers',
      short_name: 'HCIS',
      avatar_url: '/static/avatar/inst/cuf.png',
      branding: {
        app: {
          colors: {
            primary: '#00AABB',
          },
          logo_url:
            'https://127.0.0.1/static/avatar/inst/cuf-descobertas-banner.svg',
        },
        colors: {
          primary: '#00AABB',
        },
        logo_url:
          'https://127.0.0.1/static/avatar/inst/cuf-descobertas-banner.svg',
      },
      configurations: {
        features: {
          Expand: {
            enabled: true,
          },
          metrics: {
            enabled: true,
          },
          Featured: {
            enabled: true,
          },
          WatchList: {
            enabled: true,
          },
          FiltersEnabled: {
            enabled: true,
          },
          ClinicalProtocol: {
            enabled: true,
          },
        },
      },
    },
    url:
      'http://127.0.0.1:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc',
    id: 'lkm123lkm123',
    medical_history: {},
    add_diseases_url:
      'http://127.0.0.1:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc/diseases',
    diseases_url:
      'http://127.0.0.1:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc/diseases',
    measurements: {
      url: 'http://127.0.0.1:8001/promiot/measurements',
      jwt: 'lkm123lkm123',
      renew_jwt_url:
        'http://127.0.0.1:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc/measurements-jwt',
    },
    oauth_providers_url:
      'http://127.0.0.1:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc/devices',
  },
};
