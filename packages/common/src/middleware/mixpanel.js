import {Mixpanel} from 'mixpanel-react-native';
import {
  FETCH_USER_DATA,
  CLICK_ADD_READING,
  CLICK_CATEGORIZE_MEASUREMENT,
  CLICK_ADD_MEASUREMENT,
  CLICK_CLOSE_MEASUREMENT,
  CLICK_GET_MEASUREMENT_FROM_DEVICE,
  CLICK_VIEW_ALL_MEASUREMENTS,
  CLICK_MEASUREMENT_CARD_GLUCOSE,
  CLICK_MEASUREMENT_CARD_WEIGHT,
  CLICK_MEASUREMENT_CARD_STEPS,
  CLICK_MEASUREMENT_CARD_BLOOD_PRESSURE,
  CLICK_MEASUREMENT_CARD_ECG,
  CLICK_MEASUREMENT_TAB_GLUCOSE,
  CLICK_MEASUREMENT_TAB_WEIGHT,
  CLICK_MEASUREMENT_TAB_STEPS,
  CLICK_MEASUREMENT_TAB_BLOOD_PRESSURE,
  CLICK_CHART_MARKER,
  CLICK_EDUCATION_ALL_ARTICLES,
  CLICK_ARTICLE_FROM_ALL_ARTICLES,
  CLICK_ARTICLE_QUICK_REFERENCE,
  CLICK_EDUCATION_ARTICLE,
  CLICK_OPEN_DRAWER_MENU,
  CLICK_DRAWER_MENU_ITEM,
  CLICK_BOTTOM_MENU_ITEM,
  CLICK_ADD_DEVICE,
  CLICK_ADD_DEVICE_ITEM,
  CLICK_DEVICE_ITEM_DETAIL,
  CLICK_DEVICE_ITEM_ACTION,
  CLICK_DEVICE_PAIRING_ACTION,
  CLICK_COA_DETAIL,
  CLICK_CONDITION_DETAIL,
  CLICK_CONDITION_TAB,
  CLICK_CONDITION_DOCTORS_DROPDOWN,
  CLICK_START_NEW_ASSESSMENT,
  CLICK_NOTIFICATION,
  CLICK_MY_ACCOUNT_TAB,
  CLICK_MY_ACCOUNT_SAVE,
  CLICK_MY_ACCOUNT_CHANGE_PHOTO,
  CLICK_MY_ACCOUNT_PRIVACY_OPEN,
  CLICK_MY_ACCOUNT_PRIVACY_SAVE,
  CLICK_MY_ACCOUNT_PRIVACY_DOWNLOAD,
} from 'actions/types';
import {
  CLICK_ADD_READING_EVENT,
  CLICK_CATEGORIZE_MEASUREMENT_EVENT,
  CLICK_ADD_MEASUREMENT_EVENT,
  CLICK_CLOSE_MEASUREMENT_EVENT,
  CLICK_GET_MEASUREMENT_FROM_DEVICE_EVENT,
  CLICK_VIEW_ALL_MEASUREMENTS_EVENT,
  CLICK_MEASUREMENT_CARD_GLUCOSE_EVENT,
  CLICK_MEASUREMENT_CARD_WEIGHT_EVENT,
  CLICK_MEASUREMENT_CARD_STEPS_EVENT,
  CLICK_MEASUREMENT_CARD_BLOOD_PRESSURE_EVENT,
  CLICK_MEASUREMENT_CARD_ECG_EVENT,
  CLICK_MEASUREMENT_TAB_GLUCOSE_EVENT,
  CLICK_MEASUREMENT_TAB_WEIGHT_EVENT,
  CLICK_MEASUREMENT_TAB_STEPS_EVENT,
  CLICK_MEASUREMENT_TAB_BLOOD_PRESSURE_EVENT,
  CLICK_CHART_MARKER_EVENT,
  CLICK_ARTICLE_FROM_EDUCATION_MENU_EVENT,
  CLICK_ARTICLE_FROM_ALL_ARTICLES_EVENT,
  CLICK_ARTICLE_QUICK_REFERENCE_EVENT,
  CLICK_ALL_ARTICLES_NOTIFICATION_EVENT,
  CLICK_ARTICLE_FROM_NOTIFICATION_EVENT,
  CLICK_ALL_ARTICLES_EVENT,
  CLICK_OPEN_DRAWER_MENU_EVENT,
  CLICK_DRAWER_MENU_ITEM_EVENT,
  CLICK_BOTTOM_MENU_ITEM_EVENT,
  CLICK_ADD_DEVICE_EVENT,
  CLICK_ADD_DEVICE_ITEM_EVENT,
  CLICK_DEVICE_ITEM_DETAIL_EVENT,
  CLICK_DEVICE_ITEM_ACTION_EVENT,
  CLICK_DEVICE_PAIRING_ACTION_EVENT,
  CLICK_COA_DETAIL_EVENT,
  CLICK_CONDITION_DETAIL_EVENT,
  CLICK_CONDITION_TAB_EVENT,
  CLICK_CONDITION_DOCTORS_DROPDOWN_EVENT,
  CLICK_START_NEW_ASSESSMENT_EVENT,
  CLICK_NOTIFICATION_EVENT,
  CLICK_MY_ACCOUNT_TAB_EVENT,
  CLICK_MY_ACCOUNT_SAVE_EVENT,
  CLICK_MY_ACCOUNT_CHANGE_PHOTO_EVENT,
  CLICK_MY_ACCOUNT_PRIVACY_OPEN_EVENT,
  CLICK_MY_ACCOUNT_PRIVACY_SAVE_EVENT,
  CLICK_MY_ACCOUNT_PRIVACY_DOWNLOAD_EVENT,
} from './events';
import Config from 'react-native-config';

export const mixpanelMiddleware = () => {
  if (!Config.MIXPANEL) {
    return store => next => action => {
      next(action);
    };
  }

  const mixpanel = new Mixpanel(Config.MIXPANEL);
  mixpanel.init();

  return store => next => action => {
    switch (action.type) {
      case FETCH_USER_DATA: {
        const data = action.payload;
        mixpanel.identify(data.uuid);
        mixpanel.people.set({
          isPatient: true,
        });
        break;
      }

      case CLICK_ADD_READING: {
        const {measurementType} = action.payload;
        mixpanel.track(CLICK_ADD_READING_EVENT, {
          measurementType,
        });
        break;
      }

      case CLICK_CATEGORIZE_MEASUREMENT: {
        mixpanel.track(CLICK_CATEGORIZE_MEASUREMENT_EVENT);
        break;
      }

      case CLICK_ADD_MEASUREMENT: {
        const {measurementType} = action.payload;
        mixpanel.track(CLICK_ADD_MEASUREMENT_EVENT, {
          measurementType,
        });
        break;
      }

      case CLICK_CLOSE_MEASUREMENT: {
        mixpanel.track(CLICK_CLOSE_MEASUREMENT_EVENT);
        break;
      }

      case CLICK_GET_MEASUREMENT_FROM_DEVICE: {
        const {deviceType} = action.payload;
        mixpanel.track(CLICK_GET_MEASUREMENT_FROM_DEVICE_EVENT, {
          deviceType,
        });
        break;
      }

      case CLICK_VIEW_ALL_MEASUREMENTS: {
        mixpanel.track(CLICK_VIEW_ALL_MEASUREMENTS_EVENT);
        break;
      }

      case CLICK_MEASUREMENT_CARD_GLUCOSE: {
        mixpanel.track(CLICK_MEASUREMENT_CARD_GLUCOSE_EVENT);
        break;
      }

      case CLICK_MEASUREMENT_CARD_WEIGHT: {
        mixpanel.track(CLICK_MEASUREMENT_CARD_WEIGHT_EVENT);
        break;
      }

      case CLICK_MEASUREMENT_CARD_STEPS: {
        mixpanel.track(CLICK_MEASUREMENT_CARD_STEPS_EVENT);
        break;
      }

      case CLICK_MEASUREMENT_CARD_BLOOD_PRESSURE: {
        mixpanel.track(CLICK_MEASUREMENT_CARD_BLOOD_PRESSURE_EVENT);
        break;
      }

      case CLICK_MEASUREMENT_CARD_ECG: {
        mixpanel.track(CLICK_MEASUREMENT_CARD_ECG_EVENT);
        break;
      }

      case CLICK_MEASUREMENT_TAB_GLUCOSE: {
        mixpanel.track(CLICK_MEASUREMENT_TAB_GLUCOSE_EVENT);
        break;
      }

      case CLICK_MEASUREMENT_TAB_WEIGHT: {
        mixpanel.track(CLICK_MEASUREMENT_TAB_WEIGHT_EVENT);
        break;
      }

      case CLICK_MEASUREMENT_TAB_STEPS: {
        mixpanel.track(CLICK_MEASUREMENT_TAB_STEPS_EVENT);
        break;
      }

      case CLICK_MEASUREMENT_TAB_BLOOD_PRESSURE: {
        mixpanel.track(CLICK_MEASUREMENT_TAB_BLOOD_PRESSURE_EVENT);
        break;
      }

      case CLICK_CHART_MARKER: {
        mixpanel.track(CLICK_CHART_MARKER_EVENT);
        break;
      }

      case CLICK_EDUCATION_ARTICLE: {
        const {articleId, diseaseId, from} = action.payload;
        switch (from) {
          case 'NOTIFICATION':
            mixpanel.track(CLICK_ARTICLE_FROM_NOTIFICATION_EVENT, {
              articleId,
              diseaseId,
            });
            break;
          default:
            mixpanel.track(CLICK_ARTICLE_FROM_EDUCATION_MENU_EVENT, {
              articleId,
              diseaseId,
            });
            break;
        }
        break;
      }

      case CLICK_ARTICLE_FROM_ALL_ARTICLES: {
        const {articleId, diseaseId} = action.payload;
        mixpanel.track(CLICK_ARTICLE_FROM_ALL_ARTICLES_EVENT, {
          articleId,
          diseaseId,
        });
        break;
      }

      case CLICK_EDUCATION_ALL_ARTICLES: {
        const {diseaseId, from} = action.payload;
        switch (from) {
          case 'NOTIFICATION':
            mixpanel.track(CLICK_ALL_ARTICLES_NOTIFICATION_EVENT, {diseaseId});
            break;
          default:
            mixpanel.track(CLICK_ALL_ARTICLES_EVENT, {diseaseId});
            break;
        }
        break;
      }

      case CLICK_ARTICLE_QUICK_REFERENCE: {
        const {articleId, diseaseId} = action.payload;
        mixpanel.track(CLICK_ARTICLE_QUICK_REFERENCE_EVENT, {
          articleId,
          diseaseId,
        });
        break;
      }

      case CLICK_OPEN_DRAWER_MENU: {
        mixpanel.track(CLICK_OPEN_DRAWER_MENU_EVENT);
        break;
      }

      case CLICK_DRAWER_MENU_ITEM: {
        const {name} = action.payload;
        mixpanel.track(CLICK_DRAWER_MENU_ITEM_EVENT, {
          name,
        });
        break;
      }

      case CLICK_BOTTOM_MENU_ITEM: {
        const {name} = action.payload;
        mixpanel.track(CLICK_BOTTOM_MENU_ITEM_EVENT, {
          name,
        });
        break;
      }

      case CLICK_ADD_DEVICE: {
        mixpanel.track(CLICK_ADD_DEVICE_EVENT);
        break;
      }

      case CLICK_ADD_DEVICE_ITEM: {
        const {deviceName} = action.payload;
        mixpanel.track(CLICK_ADD_DEVICE_ITEM_EVENT, {
          deviceName,
        });
        break;
      }

      case CLICK_DEVICE_ITEM_DETAIL: {
        const {deviceName} = action.payload;
        mixpanel.track(CLICK_DEVICE_ITEM_DETAIL_EVENT, {
          deviceName,
        });
        break;
      }

      case CLICK_DEVICE_ITEM_ACTION: {
        const {deviceName, deviceAction} = action.payload;
        mixpanel.track(CLICK_DEVICE_ITEM_ACTION_EVENT, {
          deviceName,
          deviceAction,
        });
        break;
      }

      case CLICK_DEVICE_PAIRING_ACTION: {
        const {deviceName, deviceAction} = action.payload;
        mixpanel.track(CLICK_DEVICE_PAIRING_ACTION_EVENT, {
          deviceName,
          deviceAction,
        });
        break;
      }

      case CLICK_COA_DETAIL: {
        mixpanel.track(CLICK_COA_DETAIL_EVENT);
        break;
      }

      case CLICK_CONDITION_DETAIL: {
        const {disease_slug} = action.payload;
        mixpanel.track(CLICK_CONDITION_DETAIL_EVENT, {
          disease_slug,
        });
        break;
      }

      case CLICK_CONDITION_TAB: {
        const {name} = action.payload;
        mixpanel.track(CLICK_CONDITION_TAB_EVENT, {
          name,
        });
        break;
      }

      case CLICK_CONDITION_DOCTORS_DROPDOWN: {
        mixpanel.track(CLICK_CONDITION_DOCTORS_DROPDOWN_EVENT);
        break;
      }

      case CLICK_START_NEW_ASSESSMENT: {
        const {origin, disease_slug} = action.payload;
        mixpanel.track(CLICK_START_NEW_ASSESSMENT_EVENT, {
          origin,
          disease_slug,
        });
        break;
      }

      case CLICK_NOTIFICATION: {
        const {origin, category} = action.payload;
        mixpanel.track(CLICK_NOTIFICATION_EVENT, {
          origin,
          category,
        });
        break;
      }

      case CLICK_MY_ACCOUNT_TAB: {
        const {name} = action.payload;
        mixpanel.track(CLICK_MY_ACCOUNT_TAB_EVENT, {
          name,
        });
        break;
      }

      case CLICK_MY_ACCOUNT_SAVE: {
        const {name} = action.payload;
        mixpanel.track(CLICK_MY_ACCOUNT_SAVE_EVENT, {
          name,
        });
        break;
      }

      case CLICK_MY_ACCOUNT_CHANGE_PHOTO: {
        mixpanel.track(CLICK_MY_ACCOUNT_CHANGE_PHOTO_EVENT);
        break;
      }

      case CLICK_MY_ACCOUNT_PRIVACY_OPEN: {
        const {name} = action.payload;
        mixpanel.track(CLICK_MY_ACCOUNT_PRIVACY_OPEN_EVENT, {
          name,
        });
        break;
      }

      case CLICK_MY_ACCOUNT_PRIVACY_SAVE: {
        const {name} = action.payload;
        mixpanel.track(CLICK_MY_ACCOUNT_PRIVACY_SAVE_EVENT, {
          name,
        });
        break;
      }

      case CLICK_MY_ACCOUNT_PRIVACY_DOWNLOAD: {
        const {name} = action.payload;
        mixpanel.track(CLICK_MY_ACCOUNT_PRIVACY_DOWNLOAD_EVENT, {
          name,
        });
        break;
      }

      default:
        break;
    }
    next(action);
  };
};

export default mixpanelMiddleware;
