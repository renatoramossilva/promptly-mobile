import Axios, {CancelToken} from '../utils/axios';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';
import {networkRequest} from '../utils/';
import {
  FETCH_ARTICLES_SUCCESS,
  LOADING_ARTICLES,
  FETCH_EDUCATION_ARTICLES,
  LOADING_EDUCATION_ARTICLES,
  FETCH_ARTICLE_SUCCESS,
  LOADING_ARTICLE,
  FETCH_SECTIONS_SUCCESS,
  FETCH_RECOMMENDED_ARTICLE_SUCCESS,
  SELECT_EDUCATION_TAB,
  ADD_TOAST,
  CLEAR_CURRENT_ARTICLE,
} from './types';
import {SERVER_ERROR, CONNECTION_ERROR} from '../constants/messages';
import ArticleModel from '../models/Article';

export const fetchArticlesFromDiseases = (diseases = []) => {
  return dispatch => {
    let cancelRequest;
    let resultObj = {};
    let fetchSuccess = true;

    const onlineFn = async () => {
      for (const disease of diseases) {
        const {education_urls} = disease;
        const options = {
          method: 'get',
          url: `${education_urls.articles_endpoint}${ArticleModel.defaultFilters}&limit=3`,
          cancelToken: new CancelToken(func => (cancelRequest = func)),
          cache: false,
        };
        const timeout = setTimeout(
          () => cancelRequest(),
          parseInt(Config.WS_TIMEOUT, 10),
        );
        await Axios(options)
          .then(response => {
            const data = response.data;
            if (data) {
              resultObj[disease.id] = data;
              fetchSuccess = true;
            }
          })
          .catch(() => {
            fetchArticlesFromDiseasesFallBack(dispatch, true);
          })
          .finally(() => clearTimeout(timeout));
      }

      if (fetchSuccess) {
        AsyncStorage.setItem('@articles', JSON.stringify(resultObj))
          .then(() => dispatch(fetchArticlesFromDiseasesSuccess(resultObj)))
          .catch(() => fetchArticlesFromDiseasesFallBack(dispatch, true));
      } else {
        fetchArticlesFromDiseasesFallBack(dispatch, true);
      }
    };

    const offlineFn = () => {
      fetchArticlesFromDiseasesFallBack(dispatch, true);
    };

    dispatch({
      type: LOADING_ARTICLES,
    });
    networkRequest(onlineFn, offlineFn);
  };
};

const fetchArticlesFromDiseasesFallBack = (dispatch, isConnected) => {
  AsyncStorage.getItem('@articles')
    .then(result => {
      if (result !== null) {
        dispatch(fetchArticlesFromDiseasesSuccess(JSON.parse(result)));
      } else if (isConnected) {
        dispatch(noResultsAvailable);
      } else {
        dispatch(noInternetConnection);
      }
    })
    .catch(() => {
      return noResultsAvailable;
    });
};

const fetchArticlesFromDiseasesSuccess = response => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: response,
});

export const fetchEducationArticles = (url, sectionId) => {
  return dispatch => {
    let cancelRequest;
    const options = {
      method: 'get',
      url: `${url}&section=${sectionId}&fields=url,title,subtitle,introduction,article_image_thumbnail,authors`,
      cancelToken: new CancelToken(func => (cancelRequest = func)),
      cache: false,
    };

    const onlineFn = () => {
      const timeout = setTimeout(
        () => cancelRequest(),
        parseInt(Config.WS_TIMEOUT, 10),
      );

      Axios(options)
        .then(response => {
          const data = response?.data?.items;
          if (data) {
            AsyncStorage.setItem(
              `@educationArticles-${sectionId}`,
              JSON.stringify(data),
            )
              .then(() =>
                dispatch(fetchEducationArticlesSuccess(data, sectionId)),
              )
              .catch(() =>
                dispatch(fetchEducationArticlesFallBack(true, sectionId)),
              );
          } else {
            dispatch(fetchEducationArticlesFallBack(true, sectionId));
          }
        })
        .catch(() => {
          dispatch(fetchEducationArticlesFallBack(true, sectionId));
        })
        .finally(() => clearTimeout(timeout));
    };

    const offlineFn = () => {
      dispatch(fetchEducationArticlesFallBack(false, sectionId));
    };

    dispatch({
      type: LOADING_EDUCATION_ARTICLES,
    });
    networkRequest(onlineFn, offlineFn);
  };
};

const fetchEducationArticlesFallBack = (isConnected, sectionId) =>
  AsyncStorage.getItem(`@educationArticles-${sectionId}`)
    .then(result => {
      if (result !== null) {
        return fetchEducationArticlesSuccess(JSON.parse(result), sectionId);
      } else if (isConnected) {
        return noResultsAvailable;
      } else {
        return noInternetConnection;
      }
    })
    .catch(() => {
      return noResultsAvailable;
    });

const fetchEducationArticlesSuccess = (response, sectionId) => ({
  type: FETCH_EDUCATION_ARTICLES,
  payload: {[sectionId]: [...response]},
});

export const fetchSections = url => {
  return dispatch => {
    let cancelRequest;
    const options = {
      method: 'get',
      url: url,
      cancelToken: new CancelToken(func => (cancelRequest = func)),
      cache: false,
    };

    const onlineFn = () => {
      const timeout = setTimeout(
        () => cancelRequest(),
        parseInt(Config.WS_TIMEOUT, 10),
      );

      Axios(options)
        .then(response => {
          const data = response?.data?.items;
          if (data) {
            AsyncStorage.setItem('@articlesSections', JSON.stringify(data))
              .then(() => dispatch(fetchSectionsSuccess(data)))
              .catch(() => fetchSectionsFallBack(dispatch, true));
          } else {
            fetchSectionsFallBack(dispatch, true);
          }
        })
        .catch(() => {
          fetchSectionsFallBack(dispatch, true);
        })
        .finally(() => clearTimeout(timeout));
    };

    const offlineFn = () => {
      fetchSectionsFallBack(dispatch, false);
    };

    dispatch({
      type: LOADING_EDUCATION_ARTICLES,
    });
    networkRequest(onlineFn, offlineFn);
  };
};

const fetchSectionsFallBack = (dispatch, isConnected) => {
  AsyncStorage.getItem('@articlesSections')
    .then(result => {
      if (result !== null) {
        dispatch(fetchSectionsSuccess(JSON.parse(result)));
      } else if (isConnected) {
        dispatch(noResultsAvailable);
      } else {
        dispatch(noInternetConnection);
      }
    })
    .catch(() => {
      return noResultsAvailable;
    });
};

const fetchSectionsSuccess = response => ({
  type: FETCH_SECTIONS_SUCCESS,
  payload: response,
});

export const fetchArticle = (url, id) => {
  return dispatch => {
    let cancelRequest;
    const options = {
      method: 'get',
      url: `${url}pages/${id}`,
      cancelToken: new CancelToken(func => (cancelRequest = func)),
      cache: false,
    };

    const onlineFn = () => {
      const timeout = setTimeout(
        () => cancelRequest(),
        parseInt(Config.WS_TIMEOUT, 10),
      );

      Axios(options)
        .then(response => {
          const data = response?.data;
          if (data) {
            AsyncStorage.setItem(`@article-${id}`, JSON.stringify(data))
              .then(() => dispatch(fetchArticleSuccess(data)))
              .catch(() => fetchArticleFallBack(dispatch, true, id));
          } else {
            fetchArticleFallBack(dispatch, true, id);
          }
        })
        .catch(() => {
          fetchArticleFallBack(dispatch, true, id);
        })
        .finally(() => clearTimeout(timeout));
    };

    const offlineFn = () => {
      fetchArticleFallBack(dispatch, false, id);
    };

    dispatch({
      type: LOADING_ARTICLE,
    });
    networkRequest(onlineFn, offlineFn);
  };
};

const fetchArticleFallBack = (dispatch, isConnected, id) => {
  AsyncStorage.getItem(`@article-${id}`)
    .then(result => {
      if (result !== null) {
        dispatch(fetchArticleSuccess(JSON.parse(result)));
      } else if (isConnected) {
        dispatch(noResultsAvailable);
      } else {
        dispatch(noInternetConnection);
      }
    })
    .catch(() => {
      dispatch(noResultsAvailable);
    });
};

const fetchArticleSuccess = response => ({
  type: FETCH_ARTICLE_SUCCESS,
  payload: response,
});

export const fetchRecommendedArticles = url => {
  return dispatch => {
    let cancelRequest;
    const options = {
      method: 'get',
      url: `${url}`,
      cancelToken: new CancelToken(func => (cancelRequest = func)),
      cache: false,
    };

    const onlineFn = () => {
      const timeout = setTimeout(
        () => cancelRequest(),
        parseInt(Config.WS_TIMEOUT, 10),
      );

      Axios(options)
        .then(response => {
          const articles = response.data.reduce((prev, data) => {
            const {recommended_articles: recommended} = data;
            return [
              ...prev,
              ...(recommended &&
              recommended.articles &&
              recommended.articles.length
                ? recommended.articles.map(articleID => ({
                    url: `${recommended.url}&id=${articleID}&fields=id,slug,url,title,subtitle,introduction,header_image_thumbnail,authors`,
                    disease: data.disease,
                  }))
                : []),
            ];
          }, []);
          Promise.all(articles.map(article => Axios.get(article.url))).then(
            result => {
              const data = result.reduce((p, r, index) => {
                if (r.data.items.length) {
                  return [
                    ...p,
                    {...r.data.items[0], disease: articles[index].disease},
                  ];
                }
                return p;
              }, []);
              if (data) {
                AsyncStorage.setItem(
                  '@recommended-articles',
                  JSON.stringify(data),
                )
                  .then(() => dispatch(fetchRecommendedArticlesSuccess(data)))
                  .catch(() =>
                    fetchRecommendedArticlesFallBack(dispatch, true),
                  );
              } else {
                fetchRecommendedArticlesFallBack(dispatch, true);
              }
            },
          );
        })
        .catch(() => {
          fetchRecommendedArticlesFallBack(dispatch, true);
        })
        .finally(() => clearTimeout(timeout));
    };

    const offlineFn = () => {
      fetchRecommendedArticlesFallBack(dispatch, false);
    };

    dispatch({
      type: LOADING_ARTICLE,
    });
    networkRequest(onlineFn, offlineFn);
  };
};

const fetchRecommendedArticlesFallBack = (dispatch, isConnected) => {
  AsyncStorage.getItem('@recommended-articles')
    .then(result => {
      if (result !== null) {
        dispatch(fetchRecommendedArticlesSuccess(JSON.parse(result)));
      } else if (!isConnected) {
        dispatch(noInternetConnection);
      }
    })
    .catch(() => {
      dispatch(noResultsAvailable);
    });
};

const fetchRecommendedArticlesSuccess = response => ({
  type: FETCH_RECOMMENDED_ARTICLE_SUCCESS,
  payload: response,
});

const noResultsAvailable = {
  type: ADD_TOAST,
  payload: SERVER_ERROR,
};

const noInternetConnection = {
  type: ADD_TOAST,
  payload: CONNECTION_ERROR,
};

export const setSelectedTab = tabKey => dispatch => {
  dispatch({
    type: SELECT_EDUCATION_TAB,
    payload: tabKey,
  });
};

export const clearArticleDetail = () => ({
  type: CLEAR_CURRENT_ARTICLE,
});
