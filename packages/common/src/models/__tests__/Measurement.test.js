import '../../__mocks__/global';
import Measurement from '../Measurement';

describe('Test Measurement model', () => {
  it('Should return Scale measurement format', () => {
    const scaleData = {
      device: {
        model: 'c5ac3dc58c27',
        serial: 'V0.24.131.09',
        firmware: 'V1.0.0.12',
      },
      value: 65.0,
      type: 'bodyComposition',
      measured_at: '2021-02-17T09:18:59.230Z',
    };

    const result = new Measurement('scale', scaleData);

    expect(result.coding).toBe('3141-9');
    expect(result.readings[0].code).toBe('3141-9');
    expect(result.readings[0].unit).toBe('kg');
    expect(result.readings[0].value).toBe('65.00');
    expect(result.readings[0].measured_at).toBe('2021-02-17T09:18:59.230Z');
  });

  it('Should return Glucometer measurement format', () => {
    const glucometerData = [
      {
        device: {
          model: '925',
          serial: '92531553405',
          firmware: 'v1.9.6',
          manufacturer: 'Roche',
        },
        reading: {
          id: 5,
          value: 124,
          meal: 2,
          datetime: '2020-11-12T16:01:06Z',
          timezone: '',
          unit: '',
        },
        type: 'glucometer',
      },
      {
        device: {
          model: '925',
          serial: '92531553405',
          firmware: 'v1.9.6',
          manufacturer: 'Roche',
        },
        reading: {
          id: 6,
          value: 97,
          meal: 1,
          datetime: '2020-11-13T09:23:41Z',
          timezone: '',
          unit: '',
        },
        type: 'glucometer',
      },
    ];

    const result = new Measurement('glucometer', glucometerData);

    expect(result.coding).toBe('15074-8');
    expect(result.readings[0].code).toBe('glucose-pos-meal');
    expect(result.readings[0].unit).toBe('mg/dL');
    expect(result.readings[0].value).toBe(124);
    expect(result.readings[0].measured_at).toBe('2020-11-12T16:01:06Z');
    expect(result.readings[1].code).toBe('glucose-pre-meal');
    expect(result.readings[1].unit).toBe('mg/dL');
    expect(result.readings[1].value).toBe(97);
    expect(result.readings[1].measured_at).toBe('2020-11-13T09:23:41Z');
  });

  it('Should return Tensiometer tension measurement format', () => {
    const tensiometerData = {
      device: {
        model: 'M7 Intelli IT',
        serial: 'D.00.7FB-12',
        firmware: 'OMRONHEALTHCARE',
      },
      reading: {
        systolic: 106,
        diastolic: 70,
        pulse: 72,
        datetime: '2021-02-17T09:52:39Z',
      },
      type: 'tensiometer',
    };

    const result = new Measurement(
      'tensiometer-blood-pressure',
      tensiometerData,
    );

    expect(result.coding).toBe('55284-4');
    expect(result.readings[0].code).toBe('8462-4');
    expect(result.readings[0].unit).toBe('mmHg');
    expect(result.readings[0].value).toBe(70);
    expect(result.readings[0].measured_at).toBe('2021-02-17T09:52:39Z');
    expect(result.readings[1].code).toBe('8480-6');
    expect(result.readings[1].unit).toBe('mmHg');
    expect(result.readings[1].value).toBe(106);
    expect(result.readings[1].measured_at).toBe('2021-02-17T09:52:39Z');
  });

  it('Should return Tensiometer pulse measurement format', () => {
    const tensiometerData = {
      device: {
        model: 'M7 Intelli IT',
        serial: 'D.00.7FB-12',
        firmware: 'OMRONHEALTHCARE',
      },
      reading: {
        systolic: 106,
        diastolic: 70,
        pulse: 72,
        datetime: '2021-02-17T09:52:39Z',
      },
      type: 'tensiometer',
    };

    const result = new Measurement('tensiometer-pulse', tensiometerData);

    expect(result.coding).toBe('8867-4');
    expect(result.readings[0].code).toBe('8867-4');
    expect(result.readings[0].unit).toBe('bpm');
    expect(result.readings[0].value).toBe(72);
    expect(result.readings[0].measured_at).toBe('2021-02-17T09:52:39Z');
  });
});
