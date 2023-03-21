import Config from 'react-native-config';

class HealthSpace {
  constructor(data) {
    this.url = data.url ? `${this.getHttpProtocol()}${data.url}` : '';
    this.name = data.name;
    this.avatar = data.avatar;
    this.patient = data.patient;
    this.institutions = data.institutions;
  }

  getHttpProtocol = () => `${Config.WEBVIEW_SCHEMA}://`;

  setPatient = (patient) => {
    this.patient = patient;
  };
}

export default HealthSpace;
