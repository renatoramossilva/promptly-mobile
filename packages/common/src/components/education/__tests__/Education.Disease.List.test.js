import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import EducationDiseaseList from '../Education.Disease.List';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Test EducationDiseaseList component', () => {
  const selectedArticles = [
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
      id: 175,
      meta: {
        type: 'articles.ArticlePage',
        detail_url: 'https://cms.labs.promptly.health/api/v2/pages/175/',
        html_url:
          'http://diabetes-cuf.cms.labs.promptly.health/artigos/o-que-e-retinopatia-diabetica/',
        slug: 'o-que-e-retinopatia-diabetica',
        first_published_at: '2020-06-12T11:46:16.170479Z',
      },
      title: 'O que é a retinopatia diabética?',
      url: '/artigos/o-que-e-retinopatia-diabetica/',
      subtitle: '',
      introduction:
        'A retinopatia diabética é a principal causa de cegueira entre os 20 e os 64 anos. Se tem diabetes, é importante que adote estratégias para proteger os olhos.',
      article_image_thumbnail: {
        url:
          'https://cms.labs.promptly.health/media/images/artigo-retinopatia-diabetica-o-que.2e16d0ba.fill-280x150.png',
        width: 280,
        height: 150,
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
      id: 184,
      meta: {
        type: 'articles.ArticlePage',
        detail_url: 'https://cms.labs.promptly.health/api/v2/pages/184/',
        html_url:
          'http://diabetes-cuf.cms.labs.promptly.health/artigos/cuidados-aos-pes/',
        slug: 'cuidados-aos-pes',
        first_published_at: '2020-07-06T14:34:47.473883Z',
      },
      title: 'Cuidados aos pés',
      url: '/artigos/cuidados-aos-pes/',
      subtitle: '',
      introduction:
        'Os diabéticos têm motivos muito especiais para cuidar dos pés. Níveis elevados de glicose no\r\nsanguepor um longo tempo podem levar à diminuição da sensibilidade e a uma alteração da\r\ncirculação de sangue nos pés.',
      article_image_thumbnail: {
        url:
          'https://cms.labs.promptly.health/media/images/doenca-pe-diabetico.2e16d0ba.fill-280x150.jpg',
        width: 280,
        height: 150,
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
      id: 185,
      meta: {
        type: 'articles.ArticlePage',
        detail_url: 'https://cms.labs.promptly.health/api/v2/pages/185/',
        html_url:
          'http://diabetes-cuf.cms.labs.promptly.health/artigos/diabetes-mellitus/',
        slug: 'diabetes-mellitus',
        first_published_at: '2020-07-06T14:54:46.963444Z',
      },
      title: 'Diabetes Mellitus',
      url: '/artigos/diabetes-mellitus/',
      subtitle: '',
      introduction:
        'É uma doença metabólica, crónica, caracterizada por um aumento do nível de glicose no sangue. A insulina é\r\nproduzida no pâncreas e tem a função de controlar o nível de glicose do sangue, regulando a sua produção e o\r\narmazenamento.',
      article_image_thumbnail: {
        url:
          'https://cms.labs.promptly.health/media/images/doenca-diabetes_1.2e16d0ba.fill-280x150.png',
        width: 280,
        height: 150,
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
      id: 186,
      meta: {
        type: 'articles.ArticlePage',
        detail_url: 'https://cms.labs.promptly.health/api/v2/pages/186/',
        html_url:
          'http://diabetes-cuf.cms.labs.promptly.health/artigos/hipoglicemia/',
        slug: 'hipoglicemia',
        first_published_at: '2020-07-06T15:37:32.464257Z',
      },
      title: 'Hipoglicemia',
      url: '/artigos/hipoglicemia/',
      subtitle: '',
      introduction:
        'A hipoglicemia é designada pela descida do valor de glicose (açúcar) no sangue para níveis abaixo do limite inferior normal (glicemia inferior a 70 mg/dl) dependendo da idade da pessoa e condição física geral.',
      article_image_thumbnail: {
        url:
          'https://cms.labs.promptly.health/media/images/doenca-hipoglicemia.2e16d0ba.fill-280x150.png',
        width: 280,
        height: 150,
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
      id: 187,
      meta: {
        type: 'articles.ArticlePage',
        detail_url: 'https://cms.labs.promptly.health/api/v2/pages/187/',
        html_url:
          'http://diabetes-cuf.cms.labs.promptly.health/artigos/insulinoterapia/',
        slug: 'insulinoterapia',
        first_published_at: '2020-07-06T16:19:22.000469Z',
      },
      title: 'Insulinoterapia',
      url: '/artigos/insulinoterapia/',
      subtitle: '',
      introduction:
        'A insulina é uma hormona produzida pelo pâncreas que permite que a glicose entre nas células de todo o organismo para ser usada como fonte de energia.',
      article_image_thumbnail: {
        url:
          'https://cms.labs.promptly.health/media/images/artigo-insulina-controlar-diabetes.2e16d0ba.fill-280x150_PKSKrGZ.png',
        width: 280,
        height: 150,
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
      id: 188,
      meta: {
        type: 'articles.ArticlePage',
        detail_url: 'https://cms.labs.promptly.health/api/v2/pages/188/',
        html_url:
          'http://diabetes-cuf.cms.labs.promptly.health/artigos/alimentacao-tabela-de-equivalentes/',
        slug: 'alimentacao-tabela-de-equivalentes',
        first_published_at: '2020-07-06T16:38:08.503623Z',
      },
      title: 'Alimentação - Tabela de equivalentes',
      url: '/artigos/alimentacao-tabela-de-equivalentes/',
      subtitle: '',
      introduction: 'Equivalentes Alimentares',
      article_image_thumbnail: {
        url:
          'https://cms.labs.promptly.health/media/images/artigo-covid19-alimentacao-saudave.2e16d0ba.fill-280x150.jpg',
        width: 280,
        height: 150,
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
      id: 189,
      meta: {
        type: 'articles.ArticlePage',
        detail_url: 'https://cms.labs.promptly.health/api/v2/pages/189/',
        html_url:
          'http://diabetes-cuf.cms.labs.promptly.health/artigos/de-que-forma-atividade-fisica-influencia-os-niveis-de-glicemia/',
        slug: 'de-que-forma-atividade-fisica-influencia-os-niveis-de-glicemia',
        first_published_at: '2020-07-06T16:42:48.800093Z',
      },
      title: 'De que forma a atividade física influencia os níveis de glicémia',
      url:
        '/artigos/de-que-forma-atividade-fisica-influencia-os-niveis-de-glicemia/',
      subtitle: '',
      introduction:
        'A atividade física é uma forma eficaz de prevenir complicações da Diabetes e de controlar os níveis de glicemia.',
      article_image_thumbnail: {
        url:
          'https://cms.labs.promptly.health/media/images/artigo-ginasio-exercicio.2e16d0ba.fill-280x150.png',
        width: 280,
        height: 150,
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
  ];

  it('Should render nothing to read because no articles', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <EducationDiseaseList selectedArticles={[]} />
        </Provider>
      </ApplicationProvider>,
    );
    const element = getByTestId('statusBannerTitle');
    expect(element.props.children).toBe('Nothing to read yet!');
  });

  it('Should render flatlist', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <EducationDiseaseList selectedArticles={selectedArticles} />
        </Provider>
      </ApplicationProvider>,
    );
    const element = getByTestId('EducationDiseaseListFlatlist');
    expect(element).not.toBeNull();
  });
});
