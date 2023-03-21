export const mockedDevices = {
  result: {
    linked: [
      {
        avatar_url:
          'http://192.168.1.11:8001/static/avatar/logo-accu-check.png',
        description: 'Dispositivo de monitorização de glicose',
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
          uid: '10:08:2C:34:B8:EF',
        },
        url:
          'http://192.168.1.11:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc/devices/accu-chek-guide',
        disconnect_url:
          'http://192.168.1.11:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc/devices/10:08:2C:34:B8:EF',
        provider_type: 'bluetooth',
      },
      {
        avatar_url: 'http://192.168.1.11:8001/static/avatar/medisante-logo.png',
        description: 'Monitorização de peso',
        name: 'Medisante BC800',
        connected: true,
        slug: 'medisante-bc800',
        identifier: {
          name: 'IMEI',
          uid: '43243243432432',
        },
        url:
          'http://192.168.1.11:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc/devices/medisante-bc800',
        disconnect_url:
          'http://192.168.1.11:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc/devices/43243243432432',
        provider_type: 'form',
      },
      {
        avatarUrl: '/static/avatar/devices/Withings/withings-logo.png',
        connected: true,
        description: 'Withings devices',
        disconnectUrl:
          'http://192.168.1.11:8001/api/patients/ce75c3e8-9dbb-4950-95e0-fe4a4a9adc66/devices/27750099',
        history: false,
        type: 'ecg-reader',
        id: '27750099',
        name: 'Withings',
        providerType: 'oauth2',
        slug: 'withings',
        url:
          'http://192.168.1.11:8001/com/oauth2_user/account_login?b=authorize2&scope=user.activity%2Cuser.metrics&state=oauth2-withings%3A%3A3710cc49-a246-4388-886e-43d81e70924f&response_type=code&redirect_uri=https%3A%2F%2Fpt.preprod.labs.promptly.health%2Fapi%2Foauth2%2Fdevice%2Fcallback&client_id=3248934b5aaa8bb7d845f0eb620e8c0694128b16606b26efebf3cf5feed5cbf4',
        pin: false,
        steps: {},
      },
    ],
    syncable: [
      {
        avatar_url:
          'http://192.168.1.11:8001/static/avatar/logo-accu-check.png',
        description: 'Dispositivo de monitorização de glicose',
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
          uid: '10:08:2C:34:B8:EF',
        },
        url:
          'http://192.168.1.11:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc/devices/accu-chek-guide',
        disconnect_url:
          'http://192.168.1.11:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc/devices/10:08:2C:34:B8:EF',
        provider_type: 'bluetooth',
      },
    ],
    available: [
      {
        avatar_url:
          'http://192.168.1.11:8001/static/avatar/oauth-garmin-connect.png',
        description:
          'Use o seu dispositivo Garmin para rastrear a sua saúde na Promptly',
        name: 'Garmin vivosmart 4',
        connected: false,
        slug: 'garmin-vivosmart-4',
        identifier: {
          name: '',
          uid: '',
        },
        url:
          'https://connect.garmin.com/oauthConfirm?oauth_callback=http%3A%2F%2F192.168.1.11%3A8001%2Fapi%2Foauth%2F8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc%2Fgarmin-vivosmart-4%2Fcallback&oauth_token=5504a811-d013-4d52-b703-f6042472c77e',
        disconnect_url: '',
        provider_type: 'oauth',
      },
      {
        avatar_url: 'http://192.168.1.11:8001/static/avatar/logo-xiaomi.png',
        description: 'Balança de composição corporal',
        name: 'Xiaomi Mi Scale 2',
        connected: false,
        slug: 'xiaomi-mi-scale-2',
        identifier: {
          name: 'id',
          type: 'scale',
          search_name: 'name',
          search_value: 'MIBFS',
          search_service: 'BODY_COMPOSITION_SERVICE',
          uid: '',
        },
        url:
          'http://192.168.1.11:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc/devices/xiaomi-mi-scale-2',
        disconnect_url: '',
        provider_type: 'bluetooth',
      },
      {
        avatar_url: 'http://192.168.1.11:8001/static/avatar/medisante-logo.png',
        description:
          'Dispositivo de monitorização de glicose e tensão arterial',
        name: 'Medisante BP800',
        connected: false,
        slug: 'medisante-bp800',
        identifier: {
          name: 'IMEI',
          uid: '',
        },
        url:
          'http://192.168.1.11:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc/devices/medisante-bp800',
        disconnect_url: '',
        provider_type: 'form',
      },
      {
        avatar_url: 'http://192.168.1.11:8001/static/avatar/logo-omron.png',
        description: 'Dispositivo de monitorização da pressão arterial',
        name: 'Omron M7 Intelli',
        connected: false,
        slug: 'omron-m7-intelli',
        identifier: {
          pin: true,
          name: 'id',
          type: 'tensiometer',
          history: true,
          search_name: 'localName',
          search_value: 'BLEsmart_',
          search_service: 'BLOOD_PRESURE_SERVICE',
          uid: '',
        },
        url:
          'http://192.168.1.11:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc/devices/omron-m7-intelli',
        disconnect_url: '',
        provider_type: 'bluetooth',
      },
    ],
    scale: [],
    glucometer: [
      {
        avatar_url:
          'http://192.168.1.11:8001/static/avatar/logo-accu-check.png',
        description: 'Dispositivo de monitorização de glicose',
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
          uid: '10:08:2C:34:B8:EF',
        },
        url:
          'http://192.168.1.11:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc/devices/accu-chek-guide',
        disconnect_url:
          'http://192.168.1.11:8001/api/patients/8ec8f471-ca4a-4e4e-bf25-eb2cf41cfccc/devices/10:08:2C:34:B8:EF',
        provider_type: 'bluetooth',
      },
    ],
    tensiometer: [],
  },
  loading: false,
};
