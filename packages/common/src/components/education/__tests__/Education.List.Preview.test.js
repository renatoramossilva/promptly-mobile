import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import EducationListPreview from '../Education.List.Preview';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

describe('Test EducationListPreview component', () => {
  const disease = {
    url:
      'https://127.0.0.1:8000/api/patients/9fb1bd0f-54e4-4c86-8adf-eecccce96220/diseases/1',
    id: 1,
    disease: {
      id: 1,
      url: 'https://127.0.0.1:8000/api/diseases/type-2-diabetes',
      name: 'Diabetes',
      slug: 'type-2-diabetes',
      has_laterality: false,
      laterality: null,
    },
    institution: {
      id: 'cuf',
      url: 'https://127.0.0.1:8000/api/institutions/cuf',
      name: 'CUF Infante Santo ',
      type: 'hospital',
      sector: 'private',
      city: 'Porto',
      address: '',
      coords: '',
      country_url: 'https://127.0.0.1:8000/api/countries/PT',
      country: 'PT',
      teams_url: 'https://127.0.0.1:8000/api/institutions/cuf/teams',
      members_url: 'https://127.0.0.1:8000/api/institutions/cuf/members',
      patients_url: 'https://127.0.0.1:8000/api/institutions/cuf/patients',
      followers_url:
        'https://127.0.0.1:8000/api/institutions/cuf/followers',
      short_name: 'HCIS',
      avatar_url: '/static/avatar/inst/cuf.png',
      branding: {
        app: {
          colors: {
            primary: '#00AABB',
          },
          logo_url:
            'https://dq579z2uifxaz.cloudfront.net/static/avatar/inst/cuf-descobertas-banner.svg',
        },
        colors: {
          primary: '#00AABB',
        },
        logo_url:
          'https://dq579z2uifxaz.cloudfront.net/static/avatar/inst/cuf-descobertas-banner.svg',
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
        new_patients: {},
      },
    },
    updated_at: '2021-03-02T19:30:35.780198Z',
    created_by: null,
    members_url:
      'https://127.0.0.1:8000/api/patients/9fb1bd0f-54e4-4c86-8adf-eecccce96220/diseases/1/members',
    alerts: [],
    created_at: '2021-03-02T19:30:35.780160Z',
    owner: {
      url:
        'https://127.0.0.1:8000/api/patients/9fb1bd0f-54e4-4c86-8adf-eecccce96220',
      id: '9fb1bd0f-54e4-4c86-8adf-eecccce96220',
      name: 'Paciente Diabetes',
      email: 'type-2-diabetes-cuf@email.com',
      age: 28,
      birthdate: '1992-08-25',
      national_id: 'nid123456789',
      nhs_id: '123abc456def',
      add_diseases_url:
        'https://127.0.0.1:8000/api/patients/9fb1bd0f-54e4-4c86-8adf-eecccce96220/diseases',
      diseases_url:
        'https://127.0.0.1:8000/api/patients/9fb1bd0f-54e4-4c86-8adf-eecccce96220/diseases',
      user_url:
        'https://127.0.0.1:8000/users/9dd132fe-a361-484c-9952-414b72896dbb',
      nationality: 'pt',
      vat_number: '',
      gender: 'M',
      internal_id: '',
      avatar_url: '',
    },
    education_urls: {
      article_endpoint: 'https://diabetes-cuf.cms.labs.promptly.health/api/v2/',
      sidebar_endpoint: '',
      articles_endpoint:
        'https://diabetes-cuf.cms.labs.promptly.health/api/v2/pages/?type=articles.ArticlePage&child_of=153',
      promoted_endpoint: '',
      sections_endpoint:
        'https://diabetes-cuf.cms.labs.promptly.health/api/v2/pages/?child_of=151&fields=*',
    },
    action_url:
      'http://dev.localhost:8000/api/actions?pid=9fb1bd0f-54e4-4c86-8adf-eecccce96220&instid=cuf&did=1&pdid=1',
    configurations: {
      promiot: {},
      features: {
        carePlan: {
          enabled: false,
        },
        insurance: {
          enabled: true,
        },
        statusBar: {
          enabled: true,
        },
      },
      clinical_protocol: {},
    },
  };

  const articles = {
    meta: {
      total_count: 10,
    },
    items: [
      {
        id: 156,
        meta: {
          type: 'articles.ArticlePage',
          detail_url: 'https://cms.labs.promptly.health/api/v2/pages/156/',
          html_url:
            'http://diabetes-cuf.cms.labs.promptly.health/artigos/diabetes-ocular/',
          slug: 'diabetes-ocular',
          first_published_at: '2020-05-08T09:26:11.505335Z',
        },
        title: 'Diabetes ocular',
        url: '/artigos/diabetes-ocular/',
        subtitle: '',
        introduction:
          'A diabetes ocular é um grupo de problemas oculares que acontece em pessoas com Diabetes Mellitus. Este grupo de doenças pode, em última fase, causar perda visual significativa ou mesmo nos casos mais graves levar a cegueira.',
        article_image_thumbnail: {
          url:
            'https://cms.labs.promptly.health/media/images/doenca-diabetes-ocular.2e16d0ba.fill-280x150.png',
          width: 280,
          height: 150,
        },
        article_image_150x150: {
          url:
            'https://cms.labs.promptly.health/media/images/doenca-diabetes-ocular.2e16d0ba.fill-150x150.png',
          width: 150,
          height: 150,
        },
        article_image_max_150x150: {
          url:
            'https://cms.labs.promptly.health/media/images/doenca-diabetes-ocular.max-150x150.png',
          width: 150,
          height: 84,
        },
        article_image_width_150x150: {
          url:
            'https://cms.labs.promptly.health/media/images/doenca-diabetes-ocular.width-150.png',
          width: 150,
          height: 84,
        },
        authors: [
          {
            name: 'CUF',
            avatar: {
              url:
                'https://cms.labs.promptly.health/media/images/Screenshot_2020-03-11_at_14.49.50.2e16d0ba.fill-50x50.png',
              width: 50,
              height: 50,
            },
          },
        ],
      },
      {
        id: 157,
        meta: {
          type: 'articles.ArticlePage',
          detail_url: 'https://cms.labs.promptly.health/api/v2/pages/157/',
          html_url:
            'http://diabetes-cuf.cms.labs.promptly.health/artigos/cirurgia-para-diabetes/',
          slug: 'cirurgia-para-diabetes',
          first_published_at: '2020-05-08T09:30:43.904397Z',
        },
        title: 'Cirurgia para a Diabetes',
        url: '/artigos/cirurgia-para-diabetes/',
        subtitle: '',
        introduction:
          'A diabetes mellitus tipo 2 (DMT2) é a forma mais comum de diabetes, sendo responsável por 95% de todos os casos.',
        article_image_thumbnail: {
          url:
            'https://cms.labs.promptly.health/media/images/Cirurgia-para-a-diabetes.2e16d0ba.fill-280x150.jpg',
          width: 280,
          height: 150,
        },
        article_image_150x150: {
          url:
            'https://cms.labs.promptly.health/media/images/Cirurgia-para-a-diabetes.2e16d0ba.fill-150x150.jpg',
          width: 150,
          height: 150,
        },
        article_image_max_150x150: {
          url:
            'https://cms.labs.promptly.health/media/images/Cirurgia-para-a-diabetes.max-150x150.jpg',
          width: 150,
          height: 84,
        },
        article_image_width_150x150: {
          url:
            'https://cms.labs.promptly.health/media/images/Cirurgia-para-a-diabetes.width-150.jpg',
          width: 150,
          height: 84,
        },
        authors: [
          {
            name: 'CUF',
            avatar: {
              url:
                'https://cms.labs.promptly.health/media/images/Screenshot_2020-03-11_at_14.49.50.2e16d0ba.fill-50x50.png',
              width: 50,
              height: 50,
            },
          },
        ],
      },
      {
        id: 166,
        meta: {
          type: 'articles.ArticlePage',
          detail_url: 'https://cms.labs.promptly.health/api/v2/pages/166/',
          html_url:
            'http://diabetes-cuf.cms.labs.promptly.health/artigos/alimentacao-para-diabeticos/',
          slug: 'alimentacao-para-diabeticos',
          first_published_at: '2020-06-12T10:46:18.571791Z',
        },
        title: 'Alimentação para diabéticos',
        url: '/artigos/alimentacao-para-diabeticos/',
        subtitle: '',
        introduction:
          'Conheça algumas das regras básicas de uma alimentação para diabéticos e não só.',
        article_image_thumbnail: {
          url:
            'https://cms.labs.promptly.health/media/images/artigo-diabeticos-alimentacao.2e16d0ba.fill-280x150.png',
          width: 280,
          height: 150,
        },
        article_image_150x150: {
          url:
            'https://cms.labs.promptly.health/media/images/artigo-diabeticos-alimentacao.2e16d0ba.fill-150x150.png',
          width: 150,
          height: 150,
        },
        article_image_max_150x150: {
          url:
            'https://cms.labs.promptly.health/media/images/artigo-diabeticos-alimentacao.max-150x150.png',
          width: 150,
          height: 84,
        },
        article_image_width_150x150: {
          url:
            'https://cms.labs.promptly.health/media/images/artigo-diabeticos-alimentacao.width-150.png',
          width: 150,
          height: 84,
        },
        authors: [
          {
            name: 'CUF',
            avatar: {
              url:
                'https://cms.labs.promptly.health/media/images/Screenshot_2020-03-11_at_14.49.50.2e16d0ba.fill-50x50.png',
              width: 50,
              height: 50,
            },
          },
        ],
      },
    ],
  };

  it('Should render nothing to read', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EducationListPreview disease={disease} articles={{items: []}} />
      </ApplicationProvider>,
    );
    const element = queryByTestId('educationDiseaseContainer');
    expect(element).toBeNull();
  });

  it('Should render correct disease title', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EducationListPreview disease={disease} articles={articles} />
      </ApplicationProvider>,
    );
    const element = getByTestId('diseaseTitle');
    expect(element.props.children).toBe(disease.disease.name);
  });

  it('Should render 3 items', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EducationListPreview disease={disease} articles={articles} />
      </ApplicationProvider>,
    );
    const element = getByTestId('educationListPreviewArticlesContainer');
    expect(element.props.children[0].length).toBe(3);
  });
});
