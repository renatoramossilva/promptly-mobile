export const user = {
  uuid: '659ac944-9af6-4046-8328-415ea251e666',
  email: 'ptenant01@email.com',
  phone: '+351910000001',
  phone_country: 'PT',
  is_active: true,
  date_joined: '2021-07-08T14:33:08.282625Z',
  private_data: {
    avatar_url: '',
    name: 'Ptenant 01',
    gender: 'M',
    birthdate: '1981-02-20',
    country: '',
    state: '',
    city: '',
    nationality: '',
    national_id: '',
    nhs_id: '',
    vat_number: '',
    complementary_info: {
      insurance: {},
    },
    caregiver: {},
  },
  preferences: {
    regional: {
      language: 'en',
      timezone: 'Europe/Lisbon',
    },
    notifications: {},
  },
  tours: {
    list: 'http://dev.localhost:8000/api/tours',
    update:
      'http://dev.localhost:8000/users/659ac944-9af6-4046-8328-415ea251e666/tours',
    user_state: {},
  },
  health_spaces: [
    {
      url: 'dev.localhost:8001',
      is_global: false,
    },
    {
      url: 'dev.localhost:8000',
      is_global: true,
    },
  ],
  notifications: {
    unread: 0,
  },
  name: 'Ptenant 01',
  loading: false,
  errors: {},
  shortName: 'Ptenant 01',
  healthSpaces: [
    {
      url: 'http://dev.localhost:8001',
      patient: {
        url:
          'http://dev.localhost:8001/api/patients/e2a5495c-e2ff-424f-a7f1-ef4059ce91da',
        id: 'e2a5495c-e2ff-424f-a7f1-ef4059ce91da',
        medical_history: {},
        add_diseases_url:
          'http://dev.localhost:8001/api/patients/e2a5495c-e2ff-424f-a7f1-ef4059ce91da/diseases',
        diseases_url:
          'http://dev.localhost:8001/api/patients/e2a5495c-e2ff-424f-a7f1-ef4059ce91da/diseases',
        measurements: {
          url: 'http://dev.localhost:8001/promiot/measurements',
          jwt:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjczNzg2ODMsImlhdCI6MTYyNzI5MjI4MywiaXNzIjoiMTkyLjE2OC42OC4xMDI6ODAwMSIsImF1ZCI6IjE5Mi4xNjguNjguMTAyOjgwMDEiLCJkZXZpY2VzIjpbImUyYTU0OTVjLWUyZmYtNDI0Zi1hN2YxLWVmNDA1OWNlOTFkYSIsImUyYTU0OTVjLWUyZmYtNDI0Zi1hN2YxLWVmNDA1OWNlOTFkYSJdfQ.pS54CoNzBIFI8ZgaQGCs2TU_lSviV7H4vnMoodQDRzg',
          renew_jwt_url:
            'http://dev.localhost:8001/api/patients/e2a5495c-e2ff-424f-a7f1-ef4059ce91da/measurements-jwt',
        },
        oauth_providers_url:
          'http://dev.localhost:8001/api/patients/e2a5495c-e2ff-424f-a7f1-ef4059ce91da/devices',
      },
      institutions: [
        {
          id: 'cuf',
          url: 'http://dev.localhost:8001/api/institutions/cuf',
          name: 'CUF Infante Santo ',
          type: 'hospital',
          sector: 'private',
          city: 'Porto',
          address: '',
          coords: '',
          country_url: 'http://dev.localhost:8001/api/countries/PT',
          country: 'PT',
          teams_url: 'http://dev.localhost:8001/api/institutions/cuf/teams',
          members_url: 'http://dev.localhost:8001/api/institutions/cuf/members',
          patients_url:
            'http://dev.localhost:8001/api/institutions/cuf/patients',
          followers_url:
            'http://dev.localhost:8001/api/institutions/cuf/followers',
          short_name: 'HCIS',
          avatar_url: '/static/avatar/inst/cuf.png',
          branding: {
            app: {
              colors: {
                primary: '#00AABB',
              },
              logo_url: '/static/avatar/inst/cuf-descobertas-banner.svg',
            },
            colors: {
              primary: '#00AABB',
            },
            logo_url:
              'http://192.168.1.11:8000/static/avatar/inst/cuf-descobertas-banner.svg',
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
    },
    {
      url: 'http://dev.localhost:8000',
    },
  ],
  selectedHealthSpace: {
    url: 'http://dev.localhost:8001',
    patient: {
      url:
        'http://dev.localhost:8001/api/patients/e2a5495c-e2ff-424f-a7f1-ef4059ce91da',
      id: 'e2a5495c-e2ff-424f-a7f1-ef4059ce91da',
      medical_history: {},
      add_diseases_url:
        'http://dev.localhost:8001/api/patients/e2a5495c-e2ff-424f-a7f1-ef4059ce91da/diseases',
      diseases_url:
        'http://dev.localhost:8001/api/patients/e2a5495c-e2ff-424f-a7f1-ef4059ce91da/diseases',
      measurements: {
        url: 'http://dev.localhost:8001/promiot/measurements',
        jwt:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjczNzg2ODMsImlhdCI6MTYyNzI5MjI4MywiaXNzIjoiMTkyLjE2OC42OC4xMDI6ODAwMSIsImF1ZCI6IjE5Mi4xNjguNjguMTAyOjgwMDEiLCJkZXZpY2VzIjpbImUyYTU0OTVjLWUyZmYtNDI0Zi1hN2YxLWVmNDA1OWNlOTFkYSIsImUyYTU0OTVjLWUyZmYtNDI0Zi1hN2YxLWVmNDA1OWNlOTFkYSJdfQ.pS54CoNzBIFI8ZgaQGCs2TU_lSviV7H4vnMoodQDRzg',
        renew_jwt_url:
          'http://dev.localhost:8001/api/patients/e2a5495c-e2ff-424f-a7f1-ef4059ce91da/measurements-jwt',
      },
      oauth_providers_url:
        'http://dev.localhost:8001/api/patients/e2a5495c-e2ff-424f-a7f1-ef4059ce91da/devices',
    },
    institutions: [
      {
        id: 'cuf',
        url: 'http://dev.localhost:8001/api/institutions/cuf',
        name: 'CUF Infante Santo ',
        type: 'hospital',
        sector: 'private',
        city: 'Porto',
        address: '',
        coords: '',
        country_url: 'http://dev.localhost:8001/api/countries/PT',
        country: 'PT',
        teams_url: 'http://dev.localhost:8001/api/institutions/cuf/teams',
        members_url: 'http://dev.localhost:8001/api/institutions/cuf/members',
        patients_url: 'http://dev.localhost:8001/api/institutions/cuf/patients',
        followers_url:
          'http://dev.localhost:8001/api/institutions/cuf/followers',
        short_name: 'HCIS',
        avatar_url: '/static/avatar/inst/cuf.png',
        branding: {
          app: {
            colors: {
              primary: '#00AABB',
            },
            logo_url: '/static/avatar/inst/cuf-descobertas-banner.svg',
          },
          colors: {
            primary: '#00AABB',
          },
          logo_url:
            'http://192.168.1.11:8000/static/avatar/inst/cuf-descobertas-banner.svg',
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
  },
};
