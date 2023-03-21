import {makeTrans} from '../utils/translations';

export const GENERAL_ERROR = {
  title: makeTrans('Oops'),
  message: makeTrans('something went wrong'),
};

export const SERVER_ERROR = {
  title: makeTrans('Oops'),
  message: makeTrans('something went wrong'),
};

export const CONNECTION_ERROR = {
  title: makeTrans('Connection error'),
  message: makeTrans(
    'You have no internet connection. Please turn your data on and try again.',
  ),
};

export const PROVIDER_DISCONNECTED_SUCCESS = {
  title: makeTrans('Device removed'),
  message: makeTrans('Your device was successfully removed.'),
  image: require('../images/img-notification-check.png'),
};

export const PROVIDER_CONNECTED_SUCCESS = {
  title: makeTrans('Device added'),
  message: makeTrans('Your device was successfully added.'),
  image: require('../images/img-notification-check.png'),
};

export const MEASUREMENTS_CONNECTING = {
  title: makeTrans('Connecting to device'),
  image: require('../images/img-notification-sync.png'),
};

export const MEASUREMENTS_SAVED_SUCCESS = {
  title: makeTrans('Measurements saved'),
  message: makeTrans('Measurements successfully saved to your device.'),
  image: require('../images/img-notification-check.png'),
};

export const MEASUREMENTS_SAVED_ERROR = {
  title: makeTrans('Something went wrong'),
  message: makeTrans('Measurements were not saved to your device.'),
};

export const MEASUREMENTS_SENT_SUCCESS = {
  title: makeTrans('Measurements successfully received'),
  message: makeTrans('Analysis will be ready in a few seconds.'),
  image: require('../images/img-notification-check.png'),
};

export const MEASUREMENTS_NO_RESULTS = {
  title: makeTrans('All measurements are up do date'),
  image: require('../images/img-notification-check.png'),
};

export const MEASUREMENTS_SENT_ERROR = {
  title: makeTrans('Measurements saved'),
  message: makeTrans(
    'We received the measurements but were unable to analyze them right now. We will try again later.',
  ),
};

export const MEASUREMENTS_CONNECTION_ERROR = {
  title: makeTrans('Connection error'),
  message: makeTrans(
    "You have no internet connection. We'll try to send your measurements again later.",
  ),
};

export const MEASUREMENTS_GETTING_DATA = {
  title: makeTrans('Getting data from device'),
  message: makeTrans('Please wait, this might take a few seconds.'),
  image: require('../images/img-notification-sync.png'),
};

export const DISEASE_TEAM_MEMBERS_ERROR = {
  message: makeTrans('Oops! Failed to load your clinicians!'),
  type: 'error',
};

export const SAVE_MEASUREMENT = {
  title: makeTrans('Measurement sent'),
  message: makeTrans('Measurement successfully sent!'),
  image: require('../images/img-notification-check.png'),
};

export const MEASUREMENT_SEND_ERROR = {
  message: makeTrans('Oops! Failed to send measurement!'),
  type: 'error',
};

export const SERVER_ACTION_SUCCESS_UPDATE = {
  message: makeTrans('Successfully updated!'),
  type: 'success',
};

export const DOWNLOAD_CLINICAL_TRIAL = {
  title: makeTrans('Consent downloaded'),
  message: makeTrans('Consent successfully downloaded!'),
};

export const SUCCESS_UPLOAD_USER_AVATAR = {
  message: makeTrans('Profile picture changed successfully!'),
  type: 'success',
};

export const ERROR_UPLOAD_USER_AVATAR = {
  message: makeTrans(
    'Oops! We couldn´t update your profile image. Please try again or contact support.',
  ),
  type: 'error',
};

export const UPLOAD_USER_AVATAR_CONNECTION_ERROR = {
  title: makeTrans('Connection error'),
  message: makeTrans(
    "You have no internet connection. We'll try to send your measurements again later.",
  ),
};

export const NETWORK_UNREACHABLE_REMOTE = {
  image: require('../images/img-no-connection.png'),
  title: makeTrans("Oops looks like you can't reach our servers"),
  subtitle: makeTrans('Please try again later'),
};

export const NETWORK_UNREACHABLE_LOCAL = {
  image: require('../images/img-no-connection.png'),
  title: makeTrans("It seems you're offline"),
  subtitle: makeTrans('Please check your internet connection and try again'),
};

// validation constants
export const REQUIRED_MSG = 'This field is required';
export const EMAIL_INVALID_MSG = 'Please insert a valid email';
export const INVALID_COUNTRY_PHONE_MSG =
  'This country is not valid for the given number';
export const INVALID_VAT_NUMBER = 'Invalid VAT Number';
