import Device from '../Device';

describe('Test Device model', () => {
  it('Should return bluetooth device format', () => {
    const glucometerData = {
      avatar_url: 'https://127.0.0.1:8000/static/avatar/logo-accu-check.png',
      description: 'Monitorização de glicose',
      name: 'Accu-Chek Guide',
      connected: true,
      slug: 'accu-chek-guide',
      identifier: {
        pin: true,
        name: 'id',
        type: 'glucometer',
        history: true,
        search_name: 'name',
        search_value: 'meter',
        search_service: 'GLUCOSE_SERVICE',
        uid: '4BA235BE-5ECF-CAF7-8F4F-139E79C8C3C5',
      },
      url:
        'https://127.0.0.1:8000/api/patients/647124a1-f242-492d-bf25-b7447df8536e/devices/accu-chek-guide',
      disconnect_url:
        'https://127.0.0.1:8000/api/patients/647124a1-f242-492d-bf25-b7447df8536e/devices/4BA235BE-5ECF-CAF7-8F4F-139E79C8C3C5',
      provider_type: 'bluetooth',
      steps: {},
    };

    const device = new Device(glucometerData);

    const expected = {
      avatarUrl: 'https://127.0.0.1:8000/static/avatar/logo-accu-check.png',
      connected: true,
      description: 'Monitorização de glicose',
      disconnectUrl:
        'https://127.0.0.1:8000/api/patients/647124a1-f242-492d-bf25-b7447df8536e/devices/4BA235BE-5ECF-CAF7-8F4F-139E79C8C3C5',
      history: true,
      identifierName: 'id',
      identifierSearchName: 'name',
      identifierSearchValue: 'meter',
      identifierSearchService: 'GLUCOSE_SERVICE',
      type: 'glucometer',
      id: '4BA235BE-5ECF-CAF7-8F4F-139E79C8C3C5',
      name: 'Accu-Chek Guide',
      providerType: 'bluetooth',
      slug: 'accu-chek-guide',
      url:
        'https://127.0.0.1:8000/api/patients/647124a1-f242-492d-bf25-b7447df8536e/devices/accu-chek-guide',
      pin: true,
      steps: {},
    };

    expect(device).toEqual(expected);
  });

  it('Should return no bluetooth device format', () => {
    const medisanteData = {
      avatar_url: 'https://127.0.0.1:8000/static/avatar/medisante-logo.png',
      description: 'Monitorização de peso',
      name: 'Medisante BC800',
      connected: true,
      slug: 'medisante-bc800',
      identifier: {
        name: 'IMEI',
        uid: '31231212',
      },
      url:
        'https://127.0.0.1:8000/api/patients/647124a1-f242-492d-bf25-b7447df8536e/devices/medisante-bc800',
      disconnect_url:
        'https://127.0.0.1:8000/api/patients/647124a1-f242-492d-bf25-b7447df8536e/devices/31231212',
      provider_type: 'form',
      steps: {},
    };

    const device = new Device(medisanteData);

    const expected = {
      avatarUrl: 'https://127.0.0.1:8000/static/avatar/medisante-logo.png',
      connected: true,
      description: 'Monitorização de peso',
      disconnectUrl:
        'https://127.0.0.1:8000/api/patients/647124a1-f242-492d-bf25-b7447df8536e/devices/31231212',
      history: false,
      identifierName: 'IMEI',
      id: '31231212',
      name: 'Medisante BC800',
      providerType: 'form',
      slug: 'medisante-bc800',
      url:
        'https://127.0.0.1:8000/api/patients/647124a1-f242-492d-bf25-b7447df8536e/devices/medisante-bc800',
      pin: false,
      steps: {},
    };

    expect(device).toEqual(expected);
  });

  it('Should return no bluetooth incomplete device format', () => {
    const medisanteData = {
      slug: 'medisante-bc800',
      name: 'Medisante BC800',
      identifier: {
        uid: '31231212',
      },
      url:
        'https://127.0.0.1:8000/api/patients/647124a1-f242-492d-bf25-b7447df8536e/devices/medisante-bc800',
      provider_type: 'form',
      steps: {},
    };

    const device = new Device(medisanteData);

    const expected = {
      avatarUrl: undefined,
      connected: false,
      description: undefined,
      disconnectUrl: undefined,
      history: false,
      id: '31231212',
      identifierName: undefined,
      identifierSearchName: undefined,
      identifierSearchService: undefined,
      identifierSearchValue: undefined,
      name: 'Medisante BC800',
      pin: false,
      providerType: 'form',
      slug: 'medisante-bc800',
      type: undefined,
      url:
        'https://127.0.0.1:8000/api/patients/647124a1-f242-492d-bf25-b7447df8536e/devices/medisante-bc800',
      steps: {},
    };

    expect(device).toEqual(expected);
  });
});
