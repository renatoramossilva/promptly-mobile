import {combineReducers} from 'redux';
import userReducer from './User.Reducer';
import patientReducer from './Patient.Reducer';
import toastReducer from './Toast.Reducer';
import devicesReducer from './Devices.Reducer';
import notificationsReducer from './Notifications.Reducer';
import diseasesReducer from './Diseases.Reducer';
import educationReducer from './Education.Reducer';
import sessionReducer from './Session.Reducer';
import settingsReducer from './Settings.Reducer';
import measurementsReducer from './Measurements.Reducer';
import entitiesReducer from './Entities.Reducer';

export default combineReducers({
  user: userReducer,
  patient: patientReducer,
  toast: toastReducer,
  devices: devicesReducer,
  diseases: diseasesReducer,
  notifications: notificationsReducer,
  education: educationReducer,
  session: sessionReducer,
  settings: settingsReducer,
  measurements: measurementsReducer,
  entities: entitiesReducer,
});
