import Article from '../Article';
const t = (val) => val;

const data = {
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
};

describe('Test Article model', () => {
  it('Should return article format', () => {
    const article = new Article(data, t);

    const expected = {
      id: 166,
      url: '/artigos/alimentacao-para-diabeticos/',
      image:
        'https://cms.labs.promptly.health/media/images/artigo-diabeticos-alimentacao.2e16d0ba.fill-280x150.png',
      previewImage:
        'https://cms.labs.promptly.health/media/images/artigo-diabeticos-alimentacao.2e16d0ba.fill-150x150.png',
      title: 'Alimentação para diabéticos',
      subtitle: '',
      description:
        'Conheça algumas das regras básicas de uma alimentação para diabéticos e não só.',
      author: {
        logo:
          'https://cms.labs.promptly.health/media/images/Screenshot_2020-03-11_at_14.49.50.2e16d0ba.fill-50x50.png',
        name: 'Written by CUF',
      },
      body: undefined,
      headerImage: undefined,
      authors: [
        {
          avatar: {
            height: 50,
            url:
              'https://cms.labs.promptly.health/media/images/Screenshot_2020-03-11_at_14.49.50.2e16d0ba.fill-50x50.png',
            width: 50,
          },
          name: 'CUF',
        },
      ],
      quick_reference: undefined,
      disease_slug: undefined,
    };

    expect(article).toEqual(expected);
  });

  it('Should return no image', () => {
    data.article_image_150x150 = undefined;
    const article = new Article(data, t);

    expect(article.previewImage).toEqual(undefined);
  });
});
