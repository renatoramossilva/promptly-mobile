import axios from 'axios';
import {moment} from 'utils/dates';

export default class PromiotClientAPI {
  constructor({token, lang}) {
    this.axios = axios.create();
    this.token = token;
    this.lang = lang;
    this._setDefaultHeaders();
  }

  _setDefaultHeaders() {
    this.axios.defaults.headers['Accept-Language'] = this.lang.toLowerCase();
  }

  getMeasurements({url}) {
    return this.axios.get(`${url}`, this.getHeaders());
  }

  getAllReadings({url, code, unit, chartFilters}) {
    return this.axios.get(
      `${url}/${code}/readings?unit=${unit}&${chartFilters}`,
      this.getHeaders(),
    );
  }

  getHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
  }

  changeCode(url, category, id, code) {
    return this.axios.patch(
      `${url}/${category}/${id}`,
      {code},
      this.getHeaders(),
    );
  }

  saveMeasurement({url, device, category, fields, code, date, name}) {
    let measuredAt = moment();
    if (date) {
      measuredAt = moment(`${date} ${moment().format('HH:mm:ss')}`);
    }

    const promiotData = {
      device,
      measurements: [
        {
          coding: category,
          name: name || '',
          readings: fields.map((field) => ({
            ...field,
            code: code || field.code,
            name: field.name || '',
            measured_at: measuredAt,
          })),
        },
      ],
    };
    const options = {
      method: 'post',
      url: url,
      data: promiotData,
      ...this.getHeaders(),
    };
    return this.axios(options);
  }
}
