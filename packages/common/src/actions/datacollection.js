import {
  CLICK_ADD_READING,
  CLICK_CATEGORIZE_MEASUREMENT,
  CLICK_ADD_MEASUREMENT,
  CLICK_CLOSE_MEASUREMENT,
  CLICK_GET_MEASUREMENT_FROM_DEVICE,
  CLICK_VIEW_ALL_MEASUREMENTS,
  CLICK_CHART_MARKER,
  CLICK_EDUCATION_ALL_ARTICLES,
  CLICK_ARTICLE_FROM_ALL_ARTICLES,
  CLICK_ARTICLE_QUICK_REFERENCE,
  CLICK_EDUCATION_ARTICLE,
  CLICK_OPEN_DRAWER_MENU,
  CLICK_DRAWER_MENU_ITEM,
  CLICK_ADD_DEVICE,
  CLICK_ADD_DEVICE_ITEM,
  CLICK_DEVICE_ITEM_DETAIL,
  CLICK_DEVICE_ITEM_ACTION,
  CLICK_DEVICE_PAIRING_ACTION,
  CLICK_COA_DETAIL,
  CLICK_BOTTOM_MENU_ITEM,
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
} from './types';

export const clickAddReading = payload => ({
  type: CLICK_ADD_READING,
  payload,
});

export const clickCategorizeMeasurement = () => ({
  type: CLICK_CATEGORIZE_MEASUREMENT,
});

export const clickAddMeasurement = payload => ({
  type: CLICK_ADD_MEASUREMENT,
  payload,
});

export const clickCloseMeasurement = () => ({
  type: CLICK_CLOSE_MEASUREMENT,
});

export const clickGetMeasurementFromDevice = payload => ({
  type: CLICK_GET_MEASUREMENT_FROM_DEVICE,
  payload,
});

export const clickDashboardMeasurementsDetail = item => ({
  type: item?.action ? item.action : CLICK_VIEW_ALL_MEASUREMENTS,
});

export const clickMeasurementsTab = item => ({type: item.action});

export const clickChartMarker = () => ({
  type: CLICK_CHART_MARKER,
});

// click on education article
export const clickEducationArticle = payload => ({
  type: CLICK_EDUCATION_ARTICLE,
  payload,
});

// click on article from all articles' screen
export const clickArticleFromAllArticles = payload => ({
  type: CLICK_ARTICLE_FROM_ALL_ARTICLES,
  payload,
});

// click on education all articles
export const clickEducationAllArticles = payload => ({
  type: CLICK_EDUCATION_ALL_ARTICLES,
  payload,
});

// click on article quick reference
export const clickArticleQuickReference = payload => ({
  type: CLICK_ARTICLE_QUICK_REFERENCE,
  payload,
});

export const clickOpenDrawer = () => ({
  type: CLICK_OPEN_DRAWER_MENU,
});

export const clickDrawerItem = payload => ({
  type: CLICK_DRAWER_MENU_ITEM,
  payload,
});

export const clickBottomMenuItem = payload => ({
  type: CLICK_BOTTOM_MENU_ITEM,
  payload,
});

export const clickAddDevice = () => ({
  type: CLICK_ADD_DEVICE,
});

export const clickAddDeviceItem = payload => ({
  type: CLICK_ADD_DEVICE_ITEM,
  payload,
});

export const clickDeviceItemDetail = payload => ({
  type: CLICK_DEVICE_ITEM_DETAIL,
  payload,
});

// click on device modal action
export const clickDeviceItemAction = payload => ({
  type: CLICK_DEVICE_ITEM_ACTION,
  payload,
});

// click on device pairing procedure action
export const clickDevicePairingAction = payload => ({
  type: CLICK_DEVICE_PAIRING_ACTION,
  payload,
});

export const clickCoaDetail = () => ({
  type: CLICK_COA_DETAIL,
});

export const clickConditionDetail = payload => ({
  type: CLICK_CONDITION_DETAIL,
  payload,
});

export const clickConditionTab = payload => ({
  type: CLICK_CONDITION_TAB,
  payload,
});

export const clickConditionDoctorsDropdown = () => ({
  type: CLICK_CONDITION_DOCTORS_DROPDOWN,
});

export const clickNewAssessment = payload => ({
  type: CLICK_START_NEW_ASSESSMENT,
  payload,
});

export const clickNotification = payload => ({
  type: CLICK_NOTIFICATION,
  payload,
});

export const clickMyAccountTab = payload => ({
  type: CLICK_MY_ACCOUNT_TAB,
  payload,
});

export const clickMyAccountSave = payload => ({
  type: CLICK_MY_ACCOUNT_SAVE,
  payload,
});

export const clickChangePhoto = () => ({
  type: CLICK_MY_ACCOUNT_CHANGE_PHOTO,
});

export const clickPrivacyOpenItem = payload => ({
  type: CLICK_MY_ACCOUNT_PRIVACY_OPEN,
  payload,
});

export const clickPrivacySaveItem = payload => ({
  type: CLICK_MY_ACCOUNT_PRIVACY_SAVE,
  payload,
});

export const clickPrivacyDownloadItem = payload => ({
  type: CLICK_MY_ACCOUNT_PRIVACY_DOWNLOAD,
  payload,
});
