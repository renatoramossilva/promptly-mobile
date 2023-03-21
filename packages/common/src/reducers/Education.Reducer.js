import {
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLES_SUCCESS,
  FETCH_EDUCATION_ARTICLES,
  FETCH_SECTIONS_SUCCESS,
  FETCH_RECOMMENDED_ARTICLE_SUCCESS,
  CLEAR_CURRENT_ARTICLE,
  RESET_STATE,
} from '../actions/types';

export const INITIAL_STATE = {
  previewArticles: {
    data: {},
    loading: true,
  },
  article: {
    data: {},
    loading: true,
  },
  sections: {},
  banners: [],
  recommended: [],
};

export default function (state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: {
          data: payload,
          loading: false,
        },
      };

    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        previewArticles: {
          data: payload,
          loading: false,
        },
      };

    case FETCH_SECTIONS_SUCCESS: {
      const items = payload.sort((a, b) => a.id - b.id);
      return {
        ...state,
        sections: items.reduce(
          (p, n) => ({
            ...p,
            [n.id]: n,
          }),
          {},
        ),
      };
    }

    case FETCH_EDUCATION_ARTICLES: {
      return {...state, articles: {...state.articles, ...payload}};
    }

    case FETCH_RECOMMENDED_ARTICLE_SUCCESS: {
      return {
        ...state,
        recommended: payload,
      };
    }

    case CLEAR_CURRENT_ARTICLE: {
      return {
        ...state,
        article: {
          ...INITIAL_STATE.article,
        },
      };
    }

    case RESET_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
}
