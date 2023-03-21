import '../../__mocks__/global';
import * as diseaseSelectors from '../selected_diseases';

const store = {
  diseases: {
    items: [
      {
        url:
          'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/diseases/3',
        id: 3,
        disease: {
          id: 2,
          url: 'https://127.0.0.1:8000/api/diseases/cataract',
          name: 'Catarata',
          slug: 'cataract',
          has_laterality: true,
          laterality: {
            both: {
              title: 'Ambos os olhos',
            },
            left: {
              title: 'Olho esquerdo',
            },
            right: {
              title: 'Olho direito',
            },
          },
        },
        institution: {
          id: 'cuf-descobertas',
          url: 'https://127.0.0.1:8000/api/institutions/cuf-descobertas',
          name: 'CUF Descobertas',
          type: 'hospital',
          sector: 'private',
          city: 'Lisboa',
          address: '',
          coords: '',
          country_url: 'https://127.0.0.1:8000/api/countries/PT',
          country: 'PT',
          teams_url:
            'https://127.0.0.1:8000/api/institutions/cuf-descobertas/teams',
          members_url:
            'https://127.0.0.1:8000/api/institutions/cuf-descobertas/members',
          patients_url:
            'https://127.0.0.1:8000/api/institutions/cuf-descobertas/patients',
          followers_url:
            'https://127.0.0.1:8000/api/institutions/cuf-descobertas/followers',
          short_name: 'HDSC',
          avatar_url: '/static/avatar/inst/cuf-descobertas.png',
          branding: {
            app: {
              colors: {
                primary: '#00AABB',
              },
              logo_url:
                'https://dq579z2uifxaz.cloudfront.net/static/avatar/inst/cuf-VBHC.png',
            },
            eprom: [],
            colors: {
              primary: '#00AABB',
            },
            logo_url:
              'https://dq579z2uifxaz.cloudfront.net/static/avatar/inst/cuf-VBHC.png',
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
        alerts: [],
        stats: {
          patient: {
            completed: 0,
          },
          clinician: {
            total: 5,
            completed: 0,
          },
        },
        timeline: [
          {
            id: 11,
            source: 'clinician',
            status: 'uncompleted',
            completed_at: null,
            timing: {
              id: 34,
              timing: 'Pré-operatório',
              created_at: '2021-05-27T10:14:13.268282Z',
              updated_at: '2021-05-27T10:14:22.247206Z',
              source: 'clinician',
              start_at: '2021-05-08',
              todo_at: '2021-05-13',
              end_at: '2021-05-28',
              completed_at: null,
              status: 'uncompleted',
              event: {
                id: 4,
                name: 'Cirurgia',
                slug: 'surgery-date',
                created_at: '2021-05-27T10:14:12.751635Z',
                updated_at: '2021-05-27T10:14:13.819457Z',
                event_at: '2021-05-28',
                laterality: 'right',
                details: {},
                answers: {
                  SURG_DATE_CAT_FORM: [
                    {
                      value: '2021-05-28',
                      choice: 'yes',
                    },
                  ],
                  CATARACT_TREATMENT_LAT: [
                    {
                      value: 'right',
                      choice: 1,
                    },
                  ],
                },
                form: {},
                patient_disease: 3,
                disease_treatment: 1,
                event: 2,
              },
              can_start: true,
              timing_uid: 'pre-operative',
            },
            event: {
              id: 4,
              name: 'Cirurgia',
              slug: 'surgery-date',
              created_at: '2021-05-27T10:14:12.751635Z',
              updated_at: '2021-05-27T10:14:13.819457Z',
              event_at: '2021-05-28',
              laterality: 'right',
              details: {},
              answers: {
                SURG_DATE_CAT_FORM: [
                  {
                    value: '2021-05-28',
                    choice: 'yes',
                  },
                ],
                CATARACT_TREATMENT_LAT: [
                  {
                    value: 'right',
                    choice: 1,
                  },
                ],
              },
              form: {},
              patient_disease: 3,
              disease_treatment: 1,
              event: 2,
            },
            title: 'Pré-operatório',
          },
          {
            id: 14,
            source: 'clinician',
            status: 'uncompleted',
            completed_at: null,
            timing: {
              id: 38,
              timing: 'Pré-operatório',
              created_at: '2021-05-27T10:14:42.266345Z',
              updated_at: '2021-05-27T10:14:51.399972Z',
              source: 'clinician',
              start_at: '2021-05-09',
              todo_at: '2021-05-14',
              end_at: '2021-05-29',
              completed_at: null,
              status: 'uncompleted',
              event: {
                id: 5,
                name: 'Cirurgia',
                slug: 'surgery-date',
                created_at: '2021-05-27T10:14:41.812918Z',
                updated_at: '2021-05-27T10:14:42.948986Z',
                event_at: '2021-05-29',
                laterality: 'left',
                details: {},
                answers: {
                  SURG_DATE_CAT_FORM: [
                    {
                      value: '2021-05-29',
                      choice: 'yes',
                    },
                  ],
                  CATARACT_TREATMENT_LAT: [
                    {
                      value: 'left',
                      choice: 2,
                    },
                  ],
                },
                form: {},
                patient_disease: 3,
                disease_treatment: 2,
                event: 2,
              },
              can_start: true,
              timing_uid: 'pre-operative',
            },
            event: {
              id: 5,
              name: 'Cirurgia',
              slug: 'surgery-date',
              created_at: '2021-05-27T10:14:41.812918Z',
              updated_at: '2021-05-27T10:14:42.948986Z',
              event_at: '2021-05-29',
              laterality: 'left',
              details: {},
              answers: {
                SURG_DATE_CAT_FORM: [
                  {
                    value: '2021-05-29',
                    choice: 'yes',
                  },
                ],
                CATARACT_TREATMENT_LAT: [
                  {
                    value: 'left',
                    choice: 2,
                  },
                ],
              },
              form: {},
              patient_disease: 3,
              disease_treatment: 2,
              event: 2,
            },
            title: 'Pré-operatório',
          },
          {
            id: 17,
            source: 'clinician',
            status: 'uncompleted',
            completed_at: null,
            timing: {
              id: 42,
              timing: 'Pré-operatório',
              created_at: '2021-05-27T10:15:21.234761Z',
              updated_at: '2021-05-27T10:15:28.927812Z',
              source: 'clinician',
              start_at: '2021-05-10',
              todo_at: '2021-05-15',
              end_at: '2021-05-30',
              completed_at: null,
              status: 'uncompleted',
              event: {
                id: 6,
                name: 'Cirurgia',
                slug: 'surgery-date',
                created_at: '2021-05-27T10:15:20.517271Z',
                updated_at: '2021-05-27T10:15:22.830741Z',
                event_at: '2021-05-30',
                laterality: 'both',
                details: {},
                answers: {
                  SURG_DATE_CAT_FORM: [
                    {
                      value: '2021-05-30',
                      choice: 'yes',
                    },
                  ],
                  CATARACT_TREATMENT_LAT: [
                    {
                      value: 'both',
                      choice: 3,
                    },
                  ],
                },
                form: {},
                patient_disease: 3,
                disease_treatment: 3,
                event: 2,
              },
              can_start: true,
              timing_uid: 'pre-operative',
            },
            event: {
              id: 6,
              name: 'Cirurgia',
              slug: 'surgery-date',
              created_at: '2021-05-27T10:15:20.517271Z',
              updated_at: '2021-05-27T10:15:22.830741Z',
              event_at: '2021-05-30',
              laterality: 'both',
              details: {},
              answers: {
                SURG_DATE_CAT_FORM: [
                  {
                    value: '2021-05-30',
                    choice: 'yes',
                  },
                ],
                CATARACT_TREATMENT_LAT: [
                  {
                    value: 'both',
                    choice: 3,
                  },
                ],
              },
              form: {},
              patient_disease: 3,
              disease_treatment: 3,
              event: 2,
            },
            title: 'Pré-operatório',
          },
          {
            id: 16,
            source: 'clinician',
            status: 'created',
            completed_at: null,
            timing: {
              id: 41,
              timing: 'Intra-operatório',
              created_at: '2021-05-27T10:15:20.848852Z',
              updated_at: '2021-05-27T10:15:20.848889Z',
              source: 'clinician',
              start_at: '2021-05-30',
              todo_at: '2021-05-30',
              end_at: '2021-06-19',
              completed_at: null,
              status: 'created',
              event: {
                id: 6,
                name: 'Cirurgia',
                slug: 'surgery-date',
                created_at: '2021-05-27T10:15:20.517271Z',
                updated_at: '2021-05-27T10:15:22.830741Z',
                event_at: '2021-05-30',
                laterality: 'both',
                details: {},
                answers: {
                  SURG_DATE_CAT_FORM: [
                    {
                      value: '2021-05-30',
                      choice: 'yes',
                    },
                  ],
                  CATARACT_TREATMENT_LAT: [
                    {
                      value: 'both',
                      choice: 3,
                    },
                  ],
                },
                form: {},
                patient_disease: 3,
                disease_treatment: 3,
                event: 2,
              },
              can_start: true,
              timing_uid: 'intra-operative',
            },
            event: {
              id: 6,
              name: 'Cirurgia',
              slug: 'surgery-date',
              created_at: '2021-05-27T10:15:20.517271Z',
              updated_at: '2021-05-27T10:15:22.830741Z',
              event_at: '2021-05-30',
              laterality: 'both',
              details: {},
              answers: {
                SURG_DATE_CAT_FORM: [
                  {
                    value: '2021-05-30',
                    choice: 'yes',
                  },
                ],
                CATARACT_TREATMENT_LAT: [
                  {
                    value: 'both',
                    choice: 3,
                  },
                ],
              },
              form: {},
              patient_disease: 3,
              disease_treatment: 3,
              event: 2,
            },
            title: 'Intra-operatório',
          },
          {
            id: 18,
            source: 'clinician',
            status: 'created',
            completed_at: null,
            timing: {
              id: 43,
              timing: 'Pós-operatório tardio',
              created_at: '2021-05-27T10:15:21.764597Z',
              updated_at: '2021-05-27T10:15:21.764646Z',
              source: 'clinician',
              start_at: '2021-06-20',
              todo_at: '2021-06-29',
              end_at: null,
              completed_at: null,
              status: 'created',
              event: {
                id: 6,
                name: 'Cirurgia',
                slug: 'surgery-date',
                created_at: '2021-05-27T10:15:20.517271Z',
                updated_at: '2021-05-27T10:15:22.830741Z',
                event_at: '2021-05-30',
                laterality: 'both',
                details: {},
                answers: {
                  SURG_DATE_CAT_FORM: [
                    {
                      value: '2021-05-30',
                      choice: 'yes',
                    },
                  ],
                  CATARACT_TREATMENT_LAT: [
                    {
                      value: 'both',
                      choice: 3,
                    },
                  ],
                },
                form: {},
                patient_disease: 3,
                disease_treatment: 3,
                event: 2,
              },
              can_start: true,
              timing_uid: 'late-post-operative',
            },
            event: {
              id: 6,
              name: 'Cirurgia',
              slug: 'surgery-date',
              created_at: '2021-05-27T10:15:20.517271Z',
              updated_at: '2021-05-27T10:15:22.830741Z',
              event_at: '2021-05-30',
              laterality: 'both',
              details: {},
              answers: {
                SURG_DATE_CAT_FORM: [
                  {
                    value: '2021-05-30',
                    choice: 'yes',
                  },
                ],
                CATARACT_TREATMENT_LAT: [
                  {
                    value: 'both',
                    choice: 3,
                  },
                ],
              },
              form: {},
              patient_disease: 3,
              disease_treatment: 3,
              event: 2,
            },
            title: 'Pós-operatório tardio',
          },
        ],
        owner: {
          url:
            'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c',
          id: '71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c',
          name: 'Patient Cataract',
          email: 'patcat@email.com',
          age: 40,
          birthdate: '1981-02-26',
          national_id: '',
          nhs_id: '',
          add_diseases_url:
            'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/diseases',
          diseases_url:
            'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/diseases',
          user_url:
            'https://127.0.0.1:8000/users/2194bcb3-92e8-4750-b9ff-399b3f38f627',
          nationality: '',
          vat_number: '',
          gender: 'M',
          internal_id: '',
          avatar_url: '',
          measurements: {
            url: 'https://127.0.0.1:8000/promiot/measurements',
            jwt:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjIyMTU5OTgsImlhdCI6MTYyMjEyOTU5OCwiaXNzIjoiMTkyLjE2OC42OC4xMDI6ODAwMCIsImF1ZCI6IjE5Mi4xNjguNjguMTAyOjgwMDEiLCJkZXZpY2VzIjpbIjcxYTgyZTRlLWVhZjYtNGYyZi1iZmM3LTI0ZjNmMzljZDgwYyJdfQ.lE_f29ZMYrIP_gHvqhy0TAo_62xEZdMc__V7LCt7XKk',
            renew_jwt_url:
              'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/measurements-jwt',
          },
        },
        created_by: 'e1830570-c808-4c69-bf7b-c0304d7e8844',
        team_members: [],
        add_team_member_url:
          'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/diseases/3/members',
        members_url:
          'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/diseases/3/members',
        created_at: '2021-05-27T10:13:17.496041Z',
        updated_at: '2021-05-27T10:13:17.496091Z',
        institution_team: {
          id: 2,
          url: 'https://127.0.0.1:8000/api/institutions/cuf-descobertas/teams/2',
          disease: {
            id: 2,
            url: 'https://127.0.0.1:8000/api/diseases/cataract',
            name: 'Catarata',
            slug: 'cataract',
            has_laterality: true,
            laterality: {
              both: {
                title: 'Ambos os olhos',
              },
              left: {
                title: 'Olho esquerdo',
              },
              right: {
                title: 'Olho direito',
              },
            },
          },
          institution: {
            id: 'cuf-descobertas',
            url: 'https://127.0.0.1:8000/api/institutions/cuf-descobertas',
            name: 'CUF Descobertas',
            type: 'hospital',
            sector: 'private',
            city: 'Lisboa',
            address: '',
            coords: '',
            country_url: 'https://127.0.0.1:8000/api/countries/PT',
            country: 'PT',
            teams_url:
              'https://127.0.0.1:8000/api/institutions/cuf-descobertas/teams',
            members_url:
              'https://127.0.0.1:8000/api/institutions/cuf-descobertas/members',
            patients_url:
              'https://127.0.0.1:8000/api/institutions/cuf-descobertas/patients',
            followers_url:
              'https://127.0.0.1:8000/api/institutions/cuf-descobertas/followers',
            short_name: 'HDSC',
            avatar_url: '/static/avatar/inst/cuf-descobertas.png',
            branding: {
              app: {
                colors: {
                  primary: '#00AABB',
                },
                logo_url:
                  'https://dq579z2uifxaz.cloudfront.net/static/avatar/inst/cuf-VBHC.png',
              },
              eprom: [],
              colors: {
                primary: '#00AABB',
              },
              logo_url:
                'https://dq579z2uifxaz.cloudfront.net/static/avatar/inst/cuf-VBHC.png',
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
          created_at: '2021-05-27T10:12:22.871583Z',
          members: [
            {
              url:
                'https://127.0.0.1:8000/api/institutions/cuf-descobertas/teams/2/members/e1830570-c808-4c69-bf7b-c0304d7e8844',
              institution_member: {
                id: 2,
                url:
                  'https://127.0.0.1:8000/api/institutions/cuf-descobertas/members/e1830570-c808-4c69-bf7b-c0304d7e8844',
                institution_url:
                  'https://127.0.0.1:8000/api/institutions/cuf-descobertas',
                professional: {
                  id: 'e1830570-c808-4c69-bf7b-c0304d7e8844',
                  url:
                    'https://127.0.0.1:8000/api/professionals/e1830570-c808-4c69-bf7b-c0304d7e8844',
                  prefix: '',
                  name: 'doctor',
                  license_nr: '',
                  category: 'doctor',
                  country: '',
                  country_url: null,
                  city: '',
                  patients_url:
                    'https://127.0.0.1:8000/api/professionals/e1830570-c808-4c69-bf7b-c0304d7e8844/patients',
                  specialities: [],
                  specialities_url: 'https://127.0.0.1:8000/api/specialities',
                  avatar_url: '',
                },
                role: 'superuser',
                created_at: '2021-05-27T10:12:22.832002Z',
                updated_at: '2021-05-27T10:12:22.832029Z',
                internal_id: '',
                patients_url:
                  'https://127.0.0.1:8000/api/institutions/cuf-descobertas/members/e1830570-c808-4c69-bf7b-c0304d7e8844/patients',
              },
              team_url:
                'https://127.0.0.1:8000/api/institutions/cuf-descobertas/teams/2',
              created_at: '2021-05-27T10:12:22.887010Z',
              updated_at: '2021-05-27T10:12:22.887034Z',
              role: 'default',
            },
          ],
          updated_at: '2021-05-27T10:12:22.871618Z',
        },
        action_url:
          'https://127.0.0.1:8000/api/actions?pid=71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c&instid=cuf-descobertas&did=2&pdid=3',
        education_urls: {
          article_endpoint: 'https://cufvbhc.cms.promptly.health/api/v2/',
          sidebar_endpoint: '',
          articles_endpoint:
            'https://cufvbhc.cms.promptly.health/api/v2/pages/?type=articles.ArticlePage&child_of=207',
          promoted_endpoint: '',
          sections_endpoint:
            'https://cufvbhc.cms.promptly.health/api/v2/pages/?child_of=205&fields=*',
        },
        care_doctor: null,
        severity_level: {},
        prom_status: 'created',
        configurations: {},
        scores: [],
      },
    ],
    selected: {
      url:
        'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/diseases/3',
      id: 3,
      disease: {
        id: 2,
        url: 'https://127.0.0.1:8000/api/diseases/cataract',
        name: 'Catarata',
        slug: 'cataract',
        has_laterality: true,
        laterality: {
          both: {
            title: 'Ambos os olhos',
          },
          left: {
            title: 'Olho esquerdo',
          },
          right: {
            title: 'Olho direito',
          },
        },
      },
      institution: {
        id: 'cuf-descobertas',
        url: 'https://127.0.0.1:8000/api/institutions/cuf-descobertas',
        name: 'CUF Descobertas',
        type: 'hospital',
        sector: 'private',
        city: 'Lisboa',
        address: '',
        coords: '',
        country_url: 'https://127.0.0.1:8000/api/countries/PT',
        country: 'PT',
        teams_url:
          'https://127.0.0.1:8000/api/institutions/cuf-descobertas/teams',
        members_url:
          'https://127.0.0.1:8000/api/institutions/cuf-descobertas/members',
        patients_url:
          'https://127.0.0.1:8000/api/institutions/cuf-descobertas/patients',
        followers_url:
          'https://127.0.0.1:8000/api/institutions/cuf-descobertas/followers',
        short_name: 'HDSC',
        avatar_url: '/static/avatar/inst/cuf-descobertas.png',
        branding: {
          app: {
            colors: {
              primary: '#00AABB',
            },
            logo_url:
              'https://dq579z2uifxaz.cloudfront.net/static/avatar/inst/cuf-VBHC.png',
          },
          eprom: [],
          colors: {
            primary: '#00AABB',
          },
          logo_url:
            'https://dq579z2uifxaz.cloudfront.net/static/avatar/inst/cuf-VBHC.png',
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
      alerts: [],
      stats: {
        patient: {
          completed: 0,
        },
        clinician: {
          total: 5,
          completed: 0,
        },
      },
      timeline: [
        {
          id: 11,
          source: 'clinician',
          status: 'uncompleted',
          completed_at: null,
          timing: {
            id: 34,
            timing: 'Pré-operatório',
            created_at: '2021-05-27T10:14:13.268282Z',
            updated_at: '2021-05-27T10:14:22.247206Z',
            source: 'clinician',
            start_at: '2021-05-08',
            todo_at: '2021-05-13',
            end_at: '2021-05-28',
            completed_at: null,
            status: 'uncompleted',
            event: {
              id: 4,
              name: 'Cirurgia',
              slug: 'surgery-date',
              created_at: '2021-05-27T10:14:12.751635Z',
              updated_at: '2021-05-27T10:14:13.819457Z',
              event_at: '2021-05-28',
              laterality: 'right',
              details: {},
              answers: {
                SURG_DATE_CAT_FORM: [
                  {
                    value: '2021-05-28',
                    choice: 'yes',
                  },
                ],
                CATARACT_TREATMENT_LAT: [
                  {
                    value: 'right',
                    choice: 1,
                  },
                ],
              },
              form: {},
              patient_disease: 3,
              disease_treatment: 1,
              event: 2,
            },
            can_start: true,
            timing_uid: 'pre-operative',
          },
          event: {
            id: 4,
            name: 'Cirurgia',
            slug: 'surgery-date',
            created_at: '2021-05-27T10:14:12.751635Z',
            updated_at: '2021-05-27T10:14:13.819457Z',
            event_at: '2021-05-28',
            laterality: 'right',
            details: {},
            answers: {
              SURG_DATE_CAT_FORM: [
                {
                  value: '2021-05-28',
                  choice: 'yes',
                },
              ],
              CATARACT_TREATMENT_LAT: [
                {
                  value: 'right',
                  choice: 1,
                },
              ],
            },
            form: {},
            patient_disease: 3,
            disease_treatment: 1,
            event: 2,
          },
          title: 'Pré-operatório',
        },
        {
          id: 14,
          source: 'clinician',
          status: 'uncompleted',
          completed_at: null,
          timing: {
            id: 38,
            timing: 'Pré-operatório',
            created_at: '2021-05-27T10:14:42.266345Z',
            updated_at: '2021-05-27T10:14:51.399972Z',
            source: 'clinician',
            start_at: '2021-05-09',
            todo_at: '2021-05-14',
            end_at: '2021-05-29',
            completed_at: null,
            status: 'uncompleted',
            event: {
              id: 5,
              name: 'Cirurgia',
              slug: 'surgery-date',
              created_at: '2021-05-27T10:14:41.812918Z',
              updated_at: '2021-05-27T10:14:42.948986Z',
              event_at: '2021-05-29',
              laterality: 'left',
              details: {},
              answers: {
                SURG_DATE_CAT_FORM: [
                  {
                    value: '2021-05-29',
                    choice: 'yes',
                  },
                ],
                CATARACT_TREATMENT_LAT: [
                  {
                    value: 'left',
                    choice: 2,
                  },
                ],
              },
              form: {},
              patient_disease: 3,
              disease_treatment: 2,
              event: 2,
            },
            can_start: true,
            timing_uid: 'pre-operative',
          },
          event: {
            id: 5,
            name: 'Cirurgia',
            slug: 'surgery-date',
            created_at: '2021-05-27T10:14:41.812918Z',
            updated_at: '2021-05-27T10:14:42.948986Z',
            event_at: '2021-05-29',
            laterality: 'left',
            details: {},
            answers: {
              SURG_DATE_CAT_FORM: [
                {
                  value: '2021-05-29',
                  choice: 'yes',
                },
              ],
              CATARACT_TREATMENT_LAT: [
                {
                  value: 'left',
                  choice: 2,
                },
              ],
            },
            form: {},
            patient_disease: 3,
            disease_treatment: 2,
            event: 2,
          },
          title: 'Pré-operatório',
        },
        {
          id: 17,
          source: 'clinician',
          status: 'uncompleted',
          completed_at: null,
          timing: {
            id: 42,
            timing: 'Pré-operatório',
            created_at: '2021-05-27T10:15:21.234761Z',
            updated_at: '2021-05-27T10:15:28.927812Z',
            source: 'clinician',
            start_at: '2021-05-10',
            todo_at: '2021-05-15',
            end_at: '2021-05-30',
            completed_at: null,
            status: 'uncompleted',
            event: {
              id: 6,
              name: 'Cirurgia',
              slug: 'surgery-date',
              created_at: '2021-05-27T10:15:20.517271Z',
              updated_at: '2021-05-27T10:15:22.830741Z',
              event_at: '2021-05-30',
              laterality: 'both',
              details: {},
              answers: {
                SURG_DATE_CAT_FORM: [
                  {
                    value: '2021-05-30',
                    choice: 'yes',
                  },
                ],
                CATARACT_TREATMENT_LAT: [
                  {
                    value: 'both',
                    choice: 3,
                  },
                ],
              },
              form: {},
              patient_disease: 3,
              disease_treatment: 3,
              event: 2,
            },
            can_start: true,
            timing_uid: 'pre-operative',
          },
          event: {
            id: 6,
            name: 'Cirurgia',
            slug: 'surgery-date',
            created_at: '2021-05-27T10:15:20.517271Z',
            updated_at: '2021-05-27T10:15:22.830741Z',
            event_at: '2021-05-30',
            laterality: 'both',
            details: {},
            answers: {
              SURG_DATE_CAT_FORM: [
                {
                  value: '2021-05-30',
                  choice: 'yes',
                },
              ],
              CATARACT_TREATMENT_LAT: [
                {
                  value: 'both',
                  choice: 3,
                },
              ],
            },
            form: {},
            patient_disease: 3,
            disease_treatment: 3,
            event: 2,
          },
          title: 'Pré-operatório',
        },
        {
          id: 16,
          source: 'clinician',
          status: 'created',
          completed_at: null,
          timing: {
            id: 41,
            timing: 'Intra-operatório',
            created_at: '2021-05-27T10:15:20.848852Z',
            updated_at: '2021-05-27T10:15:20.848889Z',
            source: 'clinician',
            start_at: '2021-05-30',
            todo_at: '2021-05-30',
            end_at: '2021-06-19',
            completed_at: null,
            status: 'created',
            event: {
              id: 6,
              name: 'Cirurgia',
              slug: 'surgery-date',
              created_at: '2021-05-27T10:15:20.517271Z',
              updated_at: '2021-05-27T10:15:22.830741Z',
              event_at: '2021-05-30',
              laterality: 'both',
              details: {},
              answers: {
                SURG_DATE_CAT_FORM: [
                  {
                    value: '2021-05-30',
                    choice: 'yes',
                  },
                ],
                CATARACT_TREATMENT_LAT: [
                  {
                    value: 'both',
                    choice: 3,
                  },
                ],
              },
              form: {},
              patient_disease: 3,
              disease_treatment: 3,
              event: 2,
            },
            can_start: true,
            timing_uid: 'intra-operative',
          },
          event: {
            id: 6,
            name: 'Cirurgia',
            slug: 'surgery-date',
            created_at: '2021-05-27T10:15:20.517271Z',
            updated_at: '2021-05-27T10:15:22.830741Z',
            event_at: '2021-05-30',
            laterality: 'both',
            details: {},
            answers: {
              SURG_DATE_CAT_FORM: [
                {
                  value: '2021-05-30',
                  choice: 'yes',
                },
              ],
              CATARACT_TREATMENT_LAT: [
                {
                  value: 'both',
                  choice: 3,
                },
              ],
            },
            form: {},
            patient_disease: 3,
            disease_treatment: 3,
            event: 2,
          },
          title: 'Intra-operatório',
        },
        {
          id: 18,
          source: 'clinician',
          status: 'created',
          completed_at: null,
          timing: {
            id: 43,
            timing: 'Pós-operatório tardio',
            created_at: '2021-05-27T10:15:21.764597Z',
            updated_at: '2021-05-27T10:15:21.764646Z',
            source: 'clinician',
            start_at: '2021-06-20',
            todo_at: '2021-06-29',
            end_at: null,
            completed_at: null,
            status: 'created',
            event: {
              id: 6,
              name: 'Cirurgia',
              slug: 'surgery-date',
              created_at: '2021-05-27T10:15:20.517271Z',
              updated_at: '2021-05-27T10:15:22.830741Z',
              event_at: '2021-05-30',
              laterality: 'both',
              details: {},
              answers: {
                SURG_DATE_CAT_FORM: [
                  {
                    value: '2021-05-30',
                    choice: 'yes',
                  },
                ],
                CATARACT_TREATMENT_LAT: [
                  {
                    value: 'both',
                    choice: 3,
                  },
                ],
              },
              form: {},
              patient_disease: 3,
              disease_treatment: 3,
              event: 2,
            },
            can_start: true,
            timing_uid: 'late-post-operative',
          },
          event: {
            id: 6,
            name: 'Cirurgia',
            slug: 'surgery-date',
            created_at: '2021-05-27T10:15:20.517271Z',
            updated_at: '2021-05-27T10:15:22.830741Z',
            event_at: '2021-05-30',
            laterality: 'both',
            details: {},
            answers: {
              SURG_DATE_CAT_FORM: [
                {
                  value: '2021-05-30',
                  choice: 'yes',
                },
              ],
              CATARACT_TREATMENT_LAT: [
                {
                  value: 'both',
                  choice: 3,
                },
              ],
            },
            form: {},
            patient_disease: 3,
            disease_treatment: 3,
            event: 2,
          },
          title: 'Pós-operatório tardio',
        },
      ],
      owner: {
        url:
          'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c',
        id: '71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c',
        name: 'Patient Cataract',
        email: 'patcat@email.com',
        age: 40,
        birthdate: '1981-02-26',
        national_id: '',
        nhs_id: '',
        add_diseases_url:
          'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/diseases',
        diseases_url:
          'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/diseases',
        user_url:
          'https://127.0.0.1:8000/users/2194bcb3-92e8-4750-b9ff-399b3f38f627',
        nationality: '',
        vat_number: '',
        gender: 'M',
        internal_id: '',
        avatar_url: '',
        measurements: {
          url: 'https://127.0.0.1:8000/promiot/measurements',
          jwt:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjIyMTU5OTgsImlhdCI6MTYyMjEyOTU5OCwiaXNzIjoiMTkyLjE2OC42OC4xMDI6ODAwMCIsImF1ZCI6IjE5Mi4xNjguNjguMTAyOjgwMDEiLCJkZXZpY2VzIjpbIjcxYTgyZTRlLWVhZjYtNGYyZi1iZmM3LTI0ZjNmMzljZDgwYyJdfQ.lE_f29ZMYrIP_gHvqhy0TAo_62xEZdMc__V7LCt7XKk',
          renew_jwt_url:
            'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/measurements-jwt',
        },
      },
      created_by: 'e1830570-c808-4c69-bf7b-c0304d7e8844',
      team_members: [],
      add_team_member_url:
        'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/diseases/3/members',
      members_url:
        'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/diseases/3/members',
      created_at: '2021-05-27T10:13:17.496041Z',
      updated_at: '2021-05-27T10:13:17.496091Z',
      institution_team: {
        id: 2,
        url: 'https://127.0.0.1:8000/api/institutions/cuf-descobertas/teams/2',
        disease: {
          id: 2,
          url: 'https://127.0.0.1:8000/api/diseases/cataract',
          name: 'Catarata',
          slug: 'cataract',
          has_laterality: true,
          laterality: {
            both: {
              title: 'Ambos os olhos',
            },
            left: {
              title: 'Olho esquerdo',
            },
            right: {
              title: 'Olho direito',
            },
          },
        },
        institution: {
          id: 'cuf-descobertas',
          url: 'https://127.0.0.1:8000/api/institutions/cuf-descobertas',
          name: 'CUF Descobertas',
          type: 'hospital',
          sector: 'private',
          city: 'Lisboa',
          address: '',
          coords: '',
          country_url: 'https://127.0.0.1:8000/api/countries/PT',
          country: 'PT',
          teams_url:
            'https://127.0.0.1:8000/api/institutions/cuf-descobertas/teams',
          members_url:
            'https://127.0.0.1:8000/api/institutions/cuf-descobertas/members',
          patients_url:
            'https://127.0.0.1:8000/api/institutions/cuf-descobertas/patients',
          followers_url:
            'https://127.0.0.1:8000/api/institutions/cuf-descobertas/followers',
          short_name: 'HDSC',
          avatar_url: '/static/avatar/inst/cuf-descobertas.png',
          branding: {
            app: {
              colors: {
                primary: '#00AABB',
              },
              logo_url:
                'https://dq579z2uifxaz.cloudfront.net/static/avatar/inst/cuf-VBHC.png',
            },
            eprom: [],
            colors: {
              primary: '#00AABB',
            },
            logo_url:
              'https://dq579z2uifxaz.cloudfront.net/static/avatar/inst/cuf-VBHC.png',
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
        created_at: '2021-05-27T10:12:22.871583Z',
        members: [
          {
            url:
              'https://127.0.0.1:8000/api/institutions/cuf-descobertas/teams/2/members/e1830570-c808-4c69-bf7b-c0304d7e8844',
            institution_member: {
              id: 2,
              url:
                'https://127.0.0.1:8000/api/institutions/cuf-descobertas/members/e1830570-c808-4c69-bf7b-c0304d7e8844',
              institution_url:
                'https://127.0.0.1:8000/api/institutions/cuf-descobertas',
              professional: {
                id: 'e1830570-c808-4c69-bf7b-c0304d7e8844',
                url:
                  'https://127.0.0.1:8000/api/professionals/e1830570-c808-4c69-bf7b-c0304d7e8844',
                prefix: '',
                name: 'doctor',
                license_nr: '',
                category: 'doctor',
                country: '',
                country_url: null,
                city: '',
                patients_url:
                  'https://127.0.0.1:8000/api/professionals/e1830570-c808-4c69-bf7b-c0304d7e8844/patients',
                specialities: [],
                specialities_url: 'https://127.0.0.1:8000/api/specialities',
                avatar_url: '',
              },
              role: 'superuser',
              created_at: '2021-05-27T10:12:22.832002Z',
              updated_at: '2021-05-27T10:12:22.832029Z',
              internal_id: '',
              patients_url:
                'https://127.0.0.1:8000/api/institutions/cuf-descobertas/members/e1830570-c808-4c69-bf7b-c0304d7e8844/patients',
            },
            team_url:
              'https://127.0.0.1:8000/api/institutions/cuf-descobertas/teams/2',
            created_at: '2021-05-27T10:12:22.887010Z',
            updated_at: '2021-05-27T10:12:22.887034Z',
            role: 'default',
          },
        ],
        updated_at: '2021-05-27T10:12:22.871618Z',
      },
      action_url:
        'https://127.0.0.1:8000/api/actions?pid=71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c&instid=cuf-descobertas&did=2&pdid=3',
      education_urls: {
        article_endpoint: 'https://cufvbhc.cms.promptly.health/api/v2/',
        sidebar_endpoint: '',
        articles_endpoint:
          'https://cufvbhc.cms.promptly.health/api/v2/pages/?type=articles.ArticlePage&child_of=207',
        promoted_endpoint: '',
        sections_endpoint:
          'https://cufvbhc.cms.promptly.health/api/v2/pages/?child_of=205&fields=*',
      },
      care_doctor: null,
      severity_level: {},
      prom_status: 'created',
      configurations: {},
      scores: [],
    },
    treatmentsOptions: [],
    selectedTreatmentEvents: [{id: 1}],
    selectedEvents: [],
    pdisease: {},
    eventsTimeline: [
      {
        id: '0.3183603197030789',
        icon: 'careplan',
        laterality: 'right',
        title: 'Pré-operatório',
        date: '2021-05-27',
        source: 'assessment',
        extraAttrs: {
          status: 'uncompleted',
          laterality: 'right',
          assessment_source: 'clinician',
        },
        links: {
          webapp_uri:
            'promptly://institution/cuf-descobertas/patient/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/pdisease/3/assessment/11',
        },
        form: [],
        status: 'uncompleted',
      },
      {
        id: '0.9506860544416678',
        icon: 'careplan',
        laterality: 'left',
        title: 'Pré-operatório',
        date: '2021-05-27',
        source: 'assessment',
        extraAttrs: {
          status: 'uncompleted',
          laterality: 'left',
          assessment_source: 'clinician',
        },
        links: {
          webapp_uri:
            'promptly://institution/cuf-descobertas/patient/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/pdisease/3/assessment/14',
        },
        form: [],
        status: 'uncompleted',
      },
      {
        id: '0.29109262320977813',
        icon: 'careplan',
        laterality: 'both',
        title: 'Pré-operatório',
        date: '2021-05-27',
        source: 'assessment',
        extraAttrs: {
          status: 'uncompleted',
          laterality: 'both',
          assessment_source: 'clinician',
        },
        links: {
          webapp_uri:
            'promptly://institution/cuf-descobertas/patient/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/pdisease/3/assessment/17',
        },
        form: [],
        status: 'uncompleted',
      },
      {
        id: '0.3010207363018904',
        icon: 'careplan',
        laterality: '',
        title: 'Início de seguimento',
        date: '2021-05-27',
        source: 'event',
        extraAttrs: {
          laterality: null,
          form: '',
          uid: 'disease-creation',
        },
        links: {
          edit_url: {
            verb: 'patch',
            url:
              'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/diseases/3/events/3',
          },
        },
        form: [],
      },
    ],
    ranges: [
      {
        code: 'glucose-fasting',
      },
    ],
  },
};

describe('test disease selectors', () => {
  test('getDiseasesData', () => {
    const diseasesDataSuccess = diseaseSelectors.getDiseasesData({
      diseases: 'diseasesDataSuccess',
    });
    expect(diseasesDataSuccess).toBe('diseasesDataSuccess');

    const diseasesDataFail = diseaseSelectors.getDiseasesData({});
    expect(diseasesDataFail).toEqual([]);
  });

  test('getDiseaseItems', () => {
    const diseaseItemsSuccess = diseaseSelectors.getDiseaseItems({
      diseases: {items: 'diseaseItemsSuccess'},
    });
    expect(diseaseItemsSuccess).toBe('diseaseItemsSuccess');

    const diseaseItemsFail = diseaseSelectors.getDiseaseItems({diseases: {}});
    expect(diseaseItemsFail).toEqual([]);
  });

  test('getSelectedDisease', () => {
    const selectedDiseaseSuccess = diseaseSelectors.getSelectedDisease({
      diseases: {selected: 'selectedDiseaseSuccess'},
    });
    expect(selectedDiseaseSuccess).toBe('selectedDiseaseSuccess');

    const selectedDiseaseFail = diseaseSelectors.getSelectedDisease({
      diseases: {},
    });
    expect(selectedDiseaseFail).toEqual({});
  });

  test('getDiseaseEventsTimeLine', () => {
    const data = diseaseSelectors.getDiseaseEventsTimeline({
      ...store,
    });
    expect(data).toEqual([
      {
        date: '2021-05-27',
        extraAttrs: {
          assessment_source: 'clinician',
          laterality: 'right',
          status: 'uncompleted',
        },
        form: [],
        icon: 'careplan',
        id: '0.3183603197030789',
        laterality: 'right',
        links: {
          webapp_uri:
            'promptly://institution/cuf-descobertas/patient/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/pdisease/3/assessment/11',
        },
        source: 'assessment',
        status: 'uncompleted',
        title: 'Pré-operatório',
      },
      {
        date: '2021-05-27',
        extraAttrs: {
          assessment_source: 'clinician',
          laterality: 'left',
          status: 'uncompleted',
        },
        form: [],
        icon: 'careplan',
        id: '0.9506860544416678',
        laterality: 'left',
        links: {
          webapp_uri:
            'promptly://institution/cuf-descobertas/patient/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/pdisease/3/assessment/14',
        },
        source: 'assessment',
        status: 'uncompleted',
        title: 'Pré-operatório',
      },
      {
        date: '2021-05-27',
        extraAttrs: {
          assessment_source: 'clinician',
          laterality: 'both',
          status: 'uncompleted',
        },
        form: [],
        icon: 'careplan',
        id: '0.29109262320977813',
        laterality: 'both',
        links: {
          webapp_uri:
            'promptly://institution/cuf-descobertas/patient/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/pdisease/3/assessment/17',
        },
        source: 'assessment',
        status: 'uncompleted',
        title: 'Pré-operatório',
      },
      {
        date: '2021-05-27',
        extraAttrs: {form: '', laterality: null, uid: 'disease-creation'},
        form: [],
        icon: 'careplan',
        id: '0.3010207363018904',
        laterality: '',
        links: {
          edit_url: {
            url:
              'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/diseases/3/events/3',
            verb: 'patch',
          },
        },
        source: 'event',
        title: 'Início de seguimento',
      },
    ]);
  });

  test('getDiseaseDetails', () => {
    expect(diseaseSelectors.getDiseaseDetails({...store})).toEqual({
      created_at: '2021-05-27',
      hospital: {
        childrens: [],
        description: 'Lisboa',
        id: 'cuf-descobertas',
        image: {
          name: 'CUF Descobertas',
          src: '/static/avatar/inst/cuf-descobertas.png',
        },
        name: 'CUF Descobertas',
        short_name: 'HDSC',
      },
      id: 2,
      name: 'Catarata',
      timeline: {
        patients: {},
        physician: {},
      },
      treatment: 'Cirurgia',
    });
  });

  test('getSelectedTreatmentEventsList', () => {
    expect(
      diseaseSelectors.getSelectedTreatmentEventsList({
        ...store,
      }),
    ).toEqual([{id: 1}]);

    expect(
      diseaseSelectors.getSelectedTreatmentEventsList({
        disease: {
          selectedTreatmentEvents: [],
        },
      }),
    ).toEqual([]);
  });

  test('getReadingsRanges', () => {
    expect(
      diseaseSelectors.getReadingsRanges({
        ...store,
      }),
    ).toEqual([{code: 'glucose-fasting'}]);
  });
});
