export const ADD_TOAST = 'ADD_TOAST';
export const RESET_STATE = 'RESET_STATE';

// Session
export const SESSION_COOKIES = 'SESSION_COOKIES';

// User
export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const CHANGE_REGIONAL_PREF = 'CHANGE_REGIONAL_PREF';
export const USER_UPDATE_DATA_BEGINS = 'USER_UPDATE_DATA_BEGINS';
export const USER_UPDATE_DATA_SUCCESS = 'USER_UPDATE_DATA_SUCCESS';
export const USER_UPDATE_DATA_ERROR = 'USER_UPDATE_DATA_ERROR';
export const USER_AVATAR_CHANGE = 'USER_AVATAR_CHANGE';

// Patient
export const FETCH_PATIENT_DATA = 'FETCH_PATIENT_DATA';
export const SET_PATIENT_INSTITUTIONS = 'SET_PATIENT_INSTITUTIONS';
export const FETCH_PATIENT_SCORES = 'FETCH_PATIENT_SCORES';
export const SELECT_PATIENT_COA = 'SELECT_PATIENT_COA';

// HealthSpaces
export const ENHANCE_HEALTH_SPACE_DATA = 'ENHANCE_HEALTH_SPACE_DATA';
export const SET_HEALTH_SPACE = 'SET_HEALTH_SPACE';
export const FETCH_ALL_USER_DATA_FROM_HEALTH_SPACES =
  'FETCH_ALL_USER_DATA_FROM_HEALTH_SPACES';

// Diseases
export const FETCH_DISEASES = 'FETCH_DISEASES';
export const FETCH_DISEASE_BY_ID = 'FETCH_DISEASE_BY_ID';
export const SET_SELECTED_DISEASE = 'SET_SELECTED_DISEASE';
export const FETCH_DISEASE_SCORES = 'FETCH_DISEASE_SCORES';
export const DISEASE_TEAM_MEMBERS = 'DISEASE_TEAM_MEMBERS';
export const DISEASE_TEAM_MEMBERS_ERROR = 'DISEASE_TEAM_MEMBERS_ERROR';
export const DISEASE_EVENTS_TIMELINE = 'DISEASE_EVENTS_TIMELINE';
export const FETCH_READINGS_RANGES = 'FETCH_READINGS_RANGES';

// Devices
export const FETCH_DEVICES = 'FETCH_DEVICES';
export const QUERY_DEVICES = 'QUERY_DEVICES';

// Patient Institution
export const SELECT_PATIENT_INSTITUTION = 'SELECT_PATIENT_INSTITUTION';

// Measurements
export const MEASUREMENTS_SENT_ERROR = 'MEASUREMENTS_SENT_ERROR';
export const MEASUREMENTS_SENT_SUCCESS = 'MEASUREMENTS_SENT_SUCCESS';
export const MEASUREMENTS_CONNECTION_ERROR = 'MEASUREMENTS_CONNECTION_ERROR';
export const MEASUREMENTS_SAVED_SUCCESS = 'MEASUREMENTS_SAVED_SUCCESS';
export const MEASUREMENTS_SAVED_ERROR = 'MEASUREMENTS_SAVED_ERROR';
export const MEASUREMENTS_JWT = 'MEASUREMENTS_JWT';
export const FETCH_MEASUREMENTS = 'FETCH_MEASUREMENTS';
export const FETCH_MEASUREMENT_DETAIL = 'FETCH_MEASUREMENT_DETAIL';
export const FETCH_MEASUREMENTS_SERVER_ANSWER =
  'FETCH_MEASUREMENTS_SERVER_ANSWER';
export const FETCH_TIMELINE = 'FETCH_TIMELINE';
export const FETCH_ALL_READINGS = 'FETCH_ALL_READINGS';

// Notifications
export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS';
export const LOADING_NOTIFICATIONS = 'LOADING_NOTIFICATIONS';

// Articles
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const LOADING_ARTICLES = 'LOADING_ARTICLES';
export const FETCH_EDUCATION_ARTICLES = 'FETCH_EDUCATION_ARTICLES';
export const LOADING_EDUCATION_ARTICLES = 'LOADING_EDUCATION_ARTICLES';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const LOADING_ARTICLE = 'LOADING_ARTICLE';
export const FETCH_SECTIONS_SUCCESS = 'FETCH_SECTIONS_SUCCESS';
export const FETCH_RECOMMENDED_ARTICLE_SUCCESS =
  'FETCH_RECOMMENDED_ARTICLE_SUCCESS';
export const SELECT_EDUCATION_TAB = 'SELECT_EDUCATION_TAB';
export const CLEAR_CURRENT_ARTICLE = 'CLEAR_CURRENT_ARTICLE';

// Settings
export const FETCH_CLINICALTRIALS_SUCCESS = 'FETCH_CLINICALTRIALS_SUCCESS';
export const UPDATE_CLINICALTRIALS_SUCCESS = 'UPDATE_CLINICALTRIALS_SUCCESS';
export const FETCH_TIMEZONE_OPTIONS_SUCCESS = 'FETCH_TIMEZONE_OPTIONS_SUCCESS';
export const FETCH_LANGUAGE_OPTIONS_SUCCESS = 'FETCH_LANGUAGE_OPTIONS_SUCCESS';

// Entities
export const FETCH_INSURANCES_SUCCESS = 'FETCH_INSURANCES_SUCCESS';
export const FETCH_GEOLOCATIONS = 'FETCH_GEOLOCATIONS';

// Data collection
export const CLICK_ADD_READING = 'CLICK_ADD_READING';
export const CLICK_CATEGORIZE_MEASUREMENT = 'CLICK_CATEGORIZE_MEASUREMENT';
export const CLICK_ADD_MEASUREMENT = 'CLICK_ADD_MEASUREMENT';
export const CLICK_CLOSE_MEASUREMENT = 'CLICK_CLOSE_MEASUREMENT';
export const CLICK_GET_MEASUREMENT_FROM_DEVICE =
  'CLICK_GET_MEASUREMENT_FROM_DEVICE';
export const CLICK_VIEW_ALL_MEASUREMENTS = 'CLICK_VIEW_ALL_MEASUREMENTS';
export const CLICK_MEASUREMENT_CARD_GLUCOSE = 'CLICK_MEASUREMENT_CARD_GLUCOSE';
export const CLICK_MEASUREMENT_CARD_WEIGHT = 'CLICK_MEASUREMENT_CARD_WEIGHT';
export const CLICK_MEASUREMENT_CARD_STEPS = 'CLICK_MEASUREMENT_CARD_STEPS';
export const CLICK_MEASUREMENT_CARD_ECG = 'CLICK_MEASUREMENT_CARD_ECG';
export const CLICK_MEASUREMENT_CARD_BLOOD_PRESSURE =
  'CLICK_MEASUREMENT_CARD_BLOOD_PRESSURE';
export const CLICK_MEASUREMENT_TAB_GLUCOSE = 'CLICK_MEASUREMENT_TAB_GLUCOSE';
export const CLICK_MEASUREMENT_TAB_WEIGHT = 'CLICK_MEASUREMENT_TAB_WEIGHT';
export const CLICK_MEASUREMENT_TAB_STEPS = 'CLICK_MEASUREMENT_TAB_STEPS';
export const CLICK_MEASUREMENT_TAB_BLOOD_PRESSURE =
  'CLICK_MEASUREMENT_TAB_BLOOD_PRESSURE';
export const CLICK_CHART_MARKER = 'CLICK_CHART_MARKER';
export const CLICK_EDUCATION_ARTICLE = 'CLICK_EDUCATION_ARTICLE';
export const CLICK_ARTICLE_FROM_NOTIFICATION =
  'CLICK_ARTICLE_FROM_NOTIFICATION';
export const CLICK_ARTICLE_FROM_ALL_ARTICLES =
  'CLICK_ARTICLE_FROM_ALL_ARTICLES';
export const CLICK_EDUCATION_ALL_ARTICLES = 'CLICK_EDUCATION_ALL_ARTICLES';
export const CLICK_ALL_ARTICLES_NOTIFICATION =
  'CLICK_ALL_ARTICLES_NOTIFICATION';
export const CLICK_ARTICLE_QUICK_REFERENCE = 'CLICK_ARTICLE_QUICK_REFERENCE';
export const CLICK_OPEN_DRAWER_MENU = 'CLICK_OPEN_DRAWER_MENU';
export const CLICK_DRAWER_MENU_ITEM = 'CLICK_DRAWER_MENU_ITEM';
export const CLICK_ADD_DEVICE = 'CLICK_ADD_DEVICE';
export const CLICK_ADD_DEVICE_ITEM = 'CLICK_ADD_DEVICE_ITEM';
export const CLICK_DEVICE_ITEM_DETAIL = 'CLICK_DEVICE_ITEM_DETAIL';
export const CLICK_DEVICE_ITEM_ACTION = 'CLICK_DEVICE_ITEM_ACTION';
export const CLICK_DEVICE_PAIRING_ACTION = 'CLICK_DEVICE_PAIRING_ACTION';
export const CLICK_COA_DETAIL = 'CLICK_COA_DETAIL';
export const CLICK_BOTTOM_MENU_ITEM = 'CLICK_BOTTOM_MENU_ITEM';
export const CLICK_CONDITION_DETAIL = 'CLICK_CONDITION_DETAIL';
export const CLICK_CONDITION_TAB = 'CLICK_CONDITION_TAB';
export const CLICK_CONDITION_DOCTORS_DROPDOWN =
  'CLICK_CONDITION_DOCTORS_DROPDOWN';
export const CLICK_START_NEW_ASSESSMENT = 'CLICK_START_NEW_ASSESSMENT';
export const CLICK_NOTIFICATION = 'CLICK_NOTIFICATION';
export const CLICK_MY_ACCOUNT_TAB = 'CLICK_MY_ACCOUNT_TAB';
export const CLICK_MY_ACCOUNT_SAVE = 'CLICK_MY_ACCOUNT_SAVE';
export const CLICK_MY_ACCOUNT_CHANGE_PHOTO = 'CLICK_MY_ACCOUNT_CHANGE_PHOTO';
export const CLICK_MY_ACCOUNT_PRIVACY_OPEN = 'CLICK_MY_ACCOUNT_PRIVACY_OPEN';
export const CLICK_MY_ACCOUNT_PRIVACY_SAVE = 'CLICK_MY_ACCOUNT_PRIVACY_SAVE';
export const CLICK_MY_ACCOUNT_PRIVACY_DOWNLOAD =
  'CLICK_MY_ACCOUNT_PRIVACY_DOWNLOAD';