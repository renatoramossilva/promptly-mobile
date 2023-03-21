import {
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLES_SUCCESS,
  FETCH_EDUCATION_ARTICLES,
  FETCH_SECTIONS_SUCCESS,
  FETCH_RECOMMENDED_ARTICLE_SUCCESS,
  RESET_STATE,
} from 'actions/types';
import {article, articles, sections} from '../../__mocks__/articles';
import reducer, {INITIAL_STATE} from '../Education.Reducer';

const START_STATE = {
  previewArticles: {
    data: articles,
    loading: true,
  },
  article: {
    data: article,
    loading: true,
  },
  sections: sections,
  banners: [],
  recommended: [],
};

describe('Test Education reducer', () => {
  it('fetch Education article', () => {
    expect(
      reducer(undefined, {
        type: FETCH_ARTICLE_SUCCESS,
        payload: article,
      }),
    ).toEqual({
      ...INITIAL_STATE,
      article: {
        data: article,
        loading: false,
      },
    });
  });

  it('fetch Education articles preview', () => {
    expect(
      reducer(undefined, {
        type: FETCH_ARTICLES_SUCCESS,
        payload: articles,
      }),
    ).toEqual({
      ...INITIAL_STATE,
      previewArticles: {
        data: articles,
        loading: false,
      },
    });
  });

  it('fetch Education section', () => {
    expect(
      reducer(undefined, {
        type: FETCH_SECTIONS_SUCCESS,
        payload: sections,
      }),
    ).toEqual({
      ...INITIAL_STATE,
      sections: {
        152: {
          id: 152,
          meta: {
            type: 'articles.SectionPage',
            detail_url:
              'http://diabetes-cuf.cms.promptly.health/api/v2/pages/152/',
            html_url: 'http://diabetes-cuf.cms.promptly.health/tabs/diabetes/',
            slug: 'diabetes',
            show_in_menus: false,
            seo_title: '',
            search_description: '',
            first_published_at: '2020-05-08T09:15:13.541668Z',
          },
          title: 'Diabetes',
        },
      },
    });
  });

  it('fetch Education articles', () => {
    expect(
      reducer(
        {articles: undefined},
        {
          type: FETCH_EDUCATION_ARTICLES,
          payload: articles,
        },
      ),
    ).toEqual({
      articles: articles,
    });
  });

  it('fetch recommended articles', () => {
    expect(
      reducer(
        {articles: undefined},
        {
          type: FETCH_RECOMMENDED_ARTICLE_SUCCESS,
          payload: articles,
        },
      ),
    ).toEqual({
      recommended: articles,
    });
  });

  it('reset education', () => {
    const state = reducer(START_STATE, {
      type: RESET_STATE,
    });

    expect(state).toStrictEqual(INITIAL_STATE);
  });
});
