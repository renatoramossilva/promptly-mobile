import {makeTrans} from 'utils/translations';

export const GENERAL_INFO_SECTION = 'GENERAL_INFO_SECTION';
export const COMPLEMENTARY_INFO_SECTION = 'COMPLEMENTARY_INFO_SECTION';
export const PREFERENCES_SECTION = 'PREFERENCES_SECTION';
export const CAREGIVER_SECTION = 'CAREGIVER_SECTION';
export const PRIVACY_SECTION = 'PRIVACY_SECTION';
export const ABOUT_PROMPTLY = 'ABOUT_PROMPTLY';

export const TAB_SECTIONS = [
  {title: makeTrans('General info'), key: GENERAL_INFO_SECTION},
  {title: makeTrans('Complementary info'), key: COMPLEMENTARY_INFO_SECTION},
  {title: makeTrans('Preferences'), key: PREFERENCES_SECTION},
  {title: makeTrans('Caregiver'), key: CAREGIVER_SECTION},
  {title: makeTrans('Privacy'), key: PRIVACY_SECTION},
  {title: makeTrans('About Promptly'), key: ABOUT_PROMPTLY},
];

// Complementary info
export const MERITAL_OPTIONS = [
  {label: makeTrans('Single'), value: '0'},
  {label: makeTrans('Married'), value: '1'},
  {label: makeTrans('Divorced'), value: '2'},
  {label: makeTrans('Widower'), value: '3'},
  {label: makeTrans('Separated'), value: '4'},
];

export const PROFESSIONAL_STATUS_OPTIONS = [
  {label: makeTrans('Employed'), value: '0'},
  {label: makeTrans('Unemployed'), value: '1'},
  {label: makeTrans('Retired'), value: '2'},
  {label: makeTrans('Disabled'), value: '3'},
];

export const EDUCATION_OPTIONS = [
  {label: makeTrans('None'), value: '0'},
  {label: makeTrans('1st Grade'), value: '1'},
  {label: makeTrans('2nd Grade'), value: '2'},
  {label: makeTrans('3rd Grade'), value: '3'},
  {label: makeTrans('High school'), value: '4'},
  {label: makeTrans('Bachelor'), value: '5'},
  {label: makeTrans('Master'), value: '6'},
  {label: makeTrans('Doctoral'), value: '7'},
];

export const YES_NO_OPTIONS = [
  {label: makeTrans('Yes'), value: 'yes'},
  {label: makeTrans('No'), value: 'no'},
];
export const TIMEZONES = [
  {
    value: 'Pacific/Niue',
    label: '(GMT-11:00) Niue Time',
    i18n: {
      label_pt: '(GMT-11:00) Hora de Niuê',
      label_pt_br: '(GMT-11:00) Horário de Niue',
      label_es: '(GMT-11:00) Hora de Niue',
    },
  },
  {
    value: 'Pacific/Pago_Pago',
    label: '(GMT-11:00) Samoa Standard Time',
    i18n: {
      label_pt: '(GMT-11:00) Hora padrão de Samoa',
      label_pt_br: '(GMT-11:00) Horário Padrão de Samoa',
      label_es: '(GMT-11:00) Hora estándar de Samoa',
    },
  },
  {
    value: 'Pacific/Rarotonga',
    label: '(GMT-10:00) Cook Islands Standard Time',
    i18n: {
      label_pt: '(GMT-10:00) Hora padrão das Ilhas Cook',
      label_pt_br: '(GMT-10:00) Horário Padrão das Ilhas Cook',
      label_es: '(GMT-10:00) Hora estándar de las Islas Cook',
    },
  },
  {
    value: 'Pacific/Honolulu',
    label: '(GMT-10:00) Hawaii-Aleutian Standard Time',
    i18n: {
      label_pt: '(GMT-10:00) Hora padrão do Havai e Aleutas',
      label_pt_br: '(GMT-10:00) Horário Padrão do Havaí e Ilhas Aleutas',
      label_es: '(GMT-10:00) Hora estándar de Hawái-Aleutianas',
    },
  },
  {
    value: 'Pacific/Tahiti',
    label: '(GMT-10:00) Tahiti Time',
    i18n: {
      label_pt: '(GMT-10:00) Hora do Taiti',
      label_pt_br: '(GMT-10:00) Horário do Taiti',
      label_es: '(GMT-10:00) Hora de Tahití',
    },
  },
  {
    value: 'Pacific/Marquesas',
    label: '(GMT-09:30) Marquesas Time',
    i18n: {
      label_pt: '(GMT-09:30) Hora das Ilhas Marquesas',
      label_pt_br: '(GMT-09:30) Horário das Marquesas',
      label_es: '(GMT-09:30) Hora de Marquesas',
    },
  },
  {
    value: 'Pacific/Gambier',
    label: '(GMT-09:00) Gambier Time',
    i18n: {
      label_pt: '(GMT-09:00) Hora de Gambier',
      label_pt_br: '(GMT-09:00) Horário de Gambier',
      label_es: '(GMT-09:00) Hora de Gambier',
    },
  },
  {
    value: 'America/Adak',
    label: '(GMT-09:00) Hawaii-Aleutian Time (Adak)',
    i18n: {
      label_pt: '(GMT-09:00) Hora do Havai e Aleutas (Adak)',
      label_pt_br: '(GMT-09:00) Horário do Havaí e Ilhas Aleutas (Adak)',
      label_es: '(GMT-09:00) Hora de Hawái-Aleutianas (Adak)',
    },
  },
  {
    value: 'America/Anchorage',
    label: '(GMT-08:00) Alaska Time - Anchorage',
    i18n: {
      label_pt: '(GMT-08:00) Hora do Alasca - Anchorage',
      label_pt_br: '(GMT-08:00) Horário do Alasca - Anchorage',
      label_es: '(GMT-08:00) Hora de Alaska - Anchorage',
    },
  },
  {
    value: 'America/Juneau',
    label: '(GMT-08:00) Alaska Time - Juneau',
    i18n: {
      label_pt: '(GMT-08:00) Hora do Alasca - Juneau',
      label_pt_br: '(GMT-08:00) Horário do Alasca - Juneau',
      label_es: '(GMT-08:00) Hora de Alaska - Juneau',
    },
  },
  {
    value: 'America/Metlakatla',
    label: '(GMT-08:00) Alaska Time - Metlakatla',
    i18n: {
      label_pt: '(GMT-08:00) Hora do Alasca - Metlakatla',
      label_pt_br: '(GMT-08:00) Horário do Alasca - Metlakatla',
      label_es: '(GMT-08:00) Hora de Alaska - Metlakatla',
    },
  },
  {
    value: 'America/Nome',
    label: '(GMT-08:00) Alaska Time - Nome',
    i18n: {
      label_pt: '(GMT-08:00) Hora do Alasca - Nome',
      label_pt_br: '(GMT-08:00) Horário do Alasca - Nome',
      label_es: '(GMT-08:00) Hora de Alaska - Nome',
    },
  },
  {
    value: 'America/Sitka',
    label: '(GMT-08:00) Alaska Time - Sitka',
    i18n: {
      label_pt: '(GMT-08:00) Hora do Alasca - Sitka',
      label_pt_br: '(GMT-08:00) Horário do Alasca - Sitka',
      label_es: '(GMT-08:00) Hora de Alaska - Sitka',
    },
  },
  {
    value: 'America/Yakutat',
    label: '(GMT-08:00) Alaska Time - Yakutat',
    i18n: {
      label_pt: '(GMT-08:00) Hora do Alasca - Yakutat',
      label_pt_br: '(GMT-08:00) Horário do Alasca - Yakutat',
      label_es: '(GMT-08:00) Hora de Alaska - Yakutat',
    },
  },
  {
    value: 'Pacific/Pitcairn',
    label: '(GMT-08:00) Pitcairn Time',
    i18n: {
      label_pt: '(GMT-08:00) Hora de Pitcairn',
      label_pt_br: '(GMT-08:00) Horário de Pitcairn',
      label_es: '(GMT-08:00) Hora de Pitcairn',
    },
  },
  {
    value: 'America/Hermosillo',
    label: '(GMT-07:00) Mexican Pacific Standard Time',
    i18n: {
      label_pt: '(GMT-07:00) Hora padrão do Pacífico Mexicano',
      label_pt_br: '(GMT-07:00) Horário Padrão do Pacífico Mexicano',
      label_es: '(GMT-07:00) Hora estándar del Pacífico de México',
    },
  },
  {
    value: 'America/Creston',
    label: '(GMT-07:00) Mountain Standard Time - Creston',
    i18n: {
      label_pt: '(GMT-07:00) Hora padrão da Montanha - Creston',
      label_pt_br: '(GMT-07:00) Horário Padrão das Montanhas - Creston',
      label_es: '(GMT-07:00) Hora estándar de las Montañas Rocosas - Creston',
    },
  },
  {
    value: 'America/Dawson_Creek',
    label: '(GMT-07:00) Mountain Standard Time - Dawson Creek',
    i18n: {
      label_pt: '(GMT-07:00) Hora padrão da Montanha - Dawson Creek',
      label_pt_br: '(GMT-07:00) Horário Padrão das Montanhas - Dawson Creek',
      label_es:
        '(GMT-07:00) Hora estándar de las Montañas Rocosas - Dawson Creek',
    },
  },
  {
    value: 'America/Fort_Nelson',
    label: '(GMT-07:00) Mountain Standard Time - Fort Nelson',
    i18n: {
      label_pt: '(GMT-07:00) Hora padrão da Montanha - Fort Nelson',
      label_pt_br: '(GMT-07:00) Horário Padrão das Montanhas - Fort Nelson',
      label_es:
        '(GMT-07:00) Hora estándar de las Montañas Rocosas - Fort Nelson',
    },
  },
  {
    value: 'America/Phoenix',
    label: '(GMT-07:00) Mountain Standard Time - Phoenix',
    i18n: {
      label_pt: '(GMT-07:00) Hora padrão da Montanha - Phoenix',
      label_pt_br: '(GMT-07:00) Horário Padrão das Montanhas - Phoenix',
      label_es: '(GMT-07:00) Hora estándar de las Montañas Rocosas - Phoenix',
    },
  },
  {
    value: 'America/Dawson',
    label: '(GMT-07:00) Pacific Time - Dawson',
    i18n: {
      label_pt: '(GMT-07:00) Hora do Pacífico - Dawson',
      label_pt_br: '(GMT-07:00) Horário do Pacífico - Dawson',
      label_es: '(GMT-07:00) Hora del Pacífico - Dawson',
    },
  },
  {
    value: 'America/Los_Angeles',
    label: '(GMT-07:00) Pacific Time - Los Angeles',
    i18n: {
      label_pt: '(GMT-07:00) Hora do Pacífico - Los Angeles',
      label_pt_br: '(GMT-07:00) Horário do Pacífico - Los Angeles',
      label_es: '(GMT-07:00) Hora del Pacífico - Los Ángeles',
    },
  },
  {
    value: 'America/Tijuana',
    label: '(GMT-07:00) Pacific Time - Tijuana',
    i18n: {
      label_pt: '(GMT-07:00) Hora do Pacífico - Tijuana',
      label_pt_br: '(GMT-07:00) Horário do Pacífico - Tijuana',
      label_es: '(GMT-07:00) Hora del Pacífico - Tijuana',
    },
  },
  {
    value: 'America/Vancouver',
    label: '(GMT-07:00) Pacific Time - Vancouver',
    i18n: {
      label_pt: '(GMT-07:00) Hora do Pacífico - Vancouver',
      label_pt_br: '(GMT-07:00) Horário do Pacífico - Vancouver',
      label_es: '(GMT-07:00) Hora del Pacífico - Vancouver',
    },
  },
  {
    value: 'America/Whitehorse',
    label: '(GMT-07:00) Pacific Time - Whitehorse',
    i18n: {
      label_pt: '(GMT-07:00) Hora do Pacífico - Whitehorse',
      label_pt_br: '(GMT-07:00) Horário do Pacífico - Whitehorse',
      label_es: '(GMT-07:00) Hora del Pacífico - Whitehorse',
    },
  },
  {
    value: 'America/Belize',
    label: '(GMT-06:00) Central Standard Time - Belize',
    i18n: {
      label_pt: '(GMT-06:00) Hora padrão Central - Belize',
      label_pt_br: '(GMT-06:00) Horário Padrão Central - Belize',
      label_es: '(GMT-06:00) Hora estándar central - Belice',
    },
  },
  {
    value: 'America/Costa_Rica',
    label: '(GMT-06:00) Central Standard Time - Costa Rica',
    i18n: {
      label_pt: '(GMT-06:00) Hora padrão Central - Costa Rica',
      label_pt_br: '(GMT-06:00) Horário Padrão Central - Costa Rica',
      label_es: '(GMT-06:00) Hora estándar central - Costa Rica',
    },
  },
  {
    value: 'America/El_Salvador',
    label: '(GMT-06:00) Central Standard Time - El Salvador',
    i18n: {
      label_pt: '(GMT-06:00) Hora padrão Central - El Salvador',
      label_pt_br: '(GMT-06:00) Horário Padrão Central - El Salvador',
      label_es: '(GMT-06:00) Hora estándar central - El Salvador',
    },
  },
  {
    value: 'America/Guatemala',
    label: '(GMT-06:00) Central Standard Time - Guatemala',
    i18n: {
      label_pt: '(GMT-06:00) Hora padrão Central - Guatemala',
      label_pt_br: '(GMT-06:00) Horário Padrão Central - Guatemala',
      label_es: '(GMT-06:00) Hora estándar central - Guatemala',
    },
  },
  {
    value: 'America/Managua',
    label: '(GMT-06:00) Central Standard Time - Managua',
    i18n: {
      label_pt: '(GMT-06:00) Hora padrão Central - Manágua',
      label_pt_br: '(GMT-06:00) Horário Padrão Central - Manágua',
      label_es: '(GMT-06:00) Hora estándar central - Managua',
    },
  },
  {
    value: 'America/Regina',
    label: '(GMT-06:00) Central Standard Time - Regina',
    i18n: {
      label_pt: '(GMT-06:00) Hora padrão Central - Regina',
      label_pt_br: '(GMT-06:00) Horário Padrão Central - Regina',
      label_es: '(GMT-06:00) Hora estándar central - Regina',
    },
  },
  {
    value: 'America/Swift_Current',
    label: '(GMT-06:00) Central Standard Time - Swift Current',
    i18n: {
      label_pt: '(GMT-06:00) Hora padrão Central - Swift Current',
      label_pt_br: '(GMT-06:00) Horário Padrão Central - Swift Current',
      label_es: '(GMT-06:00) Hora estándar central - Swift Current',
    },
  },
  {
    value: 'America/Tegucigalpa',
    label: '(GMT-06:00) Central Standard Time - Tegucigalpa',
    i18n: {
      label_pt: '(GMT-06:00) Hora padrão Central - Tegucigalpa',
      label_pt_br: '(GMT-06:00) Horário Padrão Central - Tegucigalpa',
      label_es: '(GMT-06:00) Hora estándar central - Tegucigalpa',
    },
  },
  {
    value: 'Pacific/Easter',
    label: '(GMT-06:00) Easter Island Time',
    i18n: {
      label_pt: '(GMT-06:00) Hora da Ilha da Páscoa',
      label_pt_br: '(GMT-06:00) Horário da Ilha de Páscoa',
      label_es: '(GMT-06:00) Hora de la isla de Pascua',
    },
  },
  {
    value: 'Pacific/Galapagos',
    label: '(GMT-06:00) Galapagos Time',
    i18n: {
      label_pt: '(GMT-06:00) Hora das Galápagos',
      label_pt_br: '(GMT-06:00) Horário de Galápagos',
      label_es: '(GMT-06:00) Hora de Galápagos',
    },
  },
  {
    value: 'America/Chihuahua',
    label: '(GMT-06:00) Mexican Pacific Time - Chihuahua',
    i18n: {
      label_pt: '(GMT-06:00) Hora do Pacífico Mexicano - Chihuahua',
      label_pt_br: '(GMT-06:00) Horário do Pacífico Mexicano - Chihuahua',
      label_es: '(GMT-06:00) Hora del Pacífico de México - Chihuahua',
    },
  },
  {
    value: 'America/Mazatlan',
    label: '(GMT-06:00) Mexican Pacific Time - Mazatlan',
    i18n: {
      label_pt: '(GMT-06:00) Hora do Pacífico Mexicano - Mazatlan',
      label_pt_br: '(GMT-06:00) Horário do Pacífico Mexicano - Mazatlan',
      label_es: '(GMT-06:00) Hora del Pacífico de México - Mazatlán',
    },
  },
  {
    value: 'America/Boise',
    label: '(GMT-06:00) Mountain Time - Boise',
    i18n: {
      label_pt: '(GMT-06:00) Hora da Montanha - Boise',
      label_pt_br: '(GMT-06:00) Horário das Montanhas - Boise',
      label_es: '(GMT-06:00) Hora de las Montañas Rocosas - Boise',
    },
  },
  {
    value: 'America/Cambridge_Bay',
    label: '(GMT-06:00) Mountain Time - Cambridge Bay',
    i18n: {
      label_pt: '(GMT-06:00) Hora da Montanha - Cambridge Bay',
      label_pt_br: '(GMT-06:00) Horário das Montanhas - Cambridge Bay',
      label_es: '(GMT-06:00) Hora de las Montañas Rocosas - Cambridge Bay',
    },
  },
  {
    value: 'America/Denver',
    label: '(GMT-06:00) Mountain Time - Denver',
    i18n: {
      label_pt: '(GMT-06:00) Hora da Montanha - Denver',
      label_pt_br: '(GMT-06:00) Horário das Montanhas - Denver',
      label_es: '(GMT-06:00) Hora de las Montañas Rocosas - Denver',
    },
  },
  {
    value: 'America/Edmonton',
    label: '(GMT-06:00) Mountain Time - Edmonton',
    i18n: {
      label_pt: '(GMT-06:00) Hora da Montanha - Edmonton',
      label_pt_br: '(GMT-06:00) Horário das Montanhas - Edmonton',
      label_es: '(GMT-06:00) Hora de las Montañas Rocosas - Edmonton',
    },
  },
  {
    value: 'America/Inuvik',
    label: '(GMT-06:00) Mountain Time - Inuvik',
    i18n: {
      label_pt: '(GMT-06:00) Hora da Montanha - Inuvik',
      label_pt_br: '(GMT-06:00) Horário das Montanhas - Inuvik',
      label_es: '(GMT-06:00) Hora de las Montañas Rocosas - Inuvik',
    },
  },
  {
    value: 'America/Ojinaga',
    label: '(GMT-06:00) Mountain Time - Ojinaga',
    i18n: {
      label_pt: '(GMT-06:00) Hora da Montanha - Ojinaga',
      label_pt_br: '(GMT-06:00) Horário das Montanhas - Ojinaga',
      label_es: '(GMT-06:00) Hora de las Montañas Rocosas - Ojinaga',
    },
  },
  {
    value: 'America/Yellowknife',
    label: '(GMT-06:00) Mountain Time - Yellowknife',
    i18n: {
      label_pt: '(GMT-06:00) Hora da Montanha - Yellowknife',
      label_pt_br: '(GMT-06:00) Horário das Montanhas - Yellowknife',
      label_es: '(GMT-06:00) Hora de las Montañas Rocosas - Yellowknife',
    },
  },
  {
    value: 'America/Eirunepe',
    label: '(GMT-05:00) Acre Standard Time - Eirunepe',
    i18n: {
      label_pt: '(GMT-05:00) Hora padrão do Acre - Eirunepé',
      label_pt_br: '(GMT-05:00) Horário Padrão do Acre - Eirunepé',
      label_es: '(GMT-05:00) Hora estándar de Acre - Eirunepé',
    },
  },
  {
    value: 'America/Rio_Branco',
    label: '(GMT-05:00) Acre Standard Time - Rio Branco',
    i18n: {
      label_pt: '(GMT-05:00) Hora padrão do Acre - Rio Branco',
      label_pt_br: '(GMT-05:00) Horário Padrão do Acre - Rio Branco',
      label_es: '(GMT-05:00) Hora estándar de Acre - Río Branco',
    },
  },
  {
    value: 'America/Bahia_Banderas',
    label: '(GMT-05:00) Central Time - Bahia Banderas',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - Bahia Banderas',
      label_pt_br: '(GMT-05:00) Horário Central - Bahia de Banderas',
      label_es: '(GMT-05:00) Hora central - Bahía de Banderas',
    },
  },
  {
    value: 'America/North_Dakota/Beulah',
    label: '(GMT-05:00) Central Time - Beulah, North Dakota',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - Beulah, Dakota do Norte',
      label_pt_br: '(GMT-05:00) Horário Central - Beulah, Dakota do Norte',
      label_es: '(GMT-05:00) Hora central - Beulah, Dakota del Norte',
    },
  },
  {
    value: 'America/North_Dakota/Center',
    label: '(GMT-05:00) Central Time - Center, North Dakota',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - Center, Dakota do Norte',
      label_pt_br: '(GMT-05:00) Horário Central - Center, Dakota do Norte',
      label_es: '(GMT-05:00) Hora central - Center, Dakota del Norte',
    },
  },
  {
    value: 'America/Chicago',
    label: '(GMT-05:00) Central Time - Chicago',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - Chicago',
      label_pt_br: '(GMT-05:00) Horário Central - Chicago',
      label_es: '(GMT-05:00) Hora central - Chicago',
    },
  },
  {
    value: 'America/Indiana/Knox',
    label: '(GMT-05:00) Central Time - Knox, Indiana',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - Knox, Indiana',
      label_pt_br: '(GMT-05:00) Horário Central - Knox, Indiana',
      label_es: '(GMT-05:00) Hora central - Knox, Indiana',
    },
  },
  {
    value: 'America/Matamoros',
    label: '(GMT-05:00) Central Time - Matamoros',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - Matamoros',
      label_pt_br: '(GMT-05:00) Horário Central - Matamoros',
      label_es: '(GMT-05:00) Hora central - Matamoros',
    },
  },
  {
    value: 'America/Menominee',
    label: '(GMT-05:00) Central Time - Menominee',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - Menominee',
      label_pt_br: '(GMT-05:00) Horário Central - Menominee',
      label_es: '(GMT-05:00) Hora central - Menominee',
    },
  },
  {
    value: 'America/Merida',
    label: '(GMT-05:00) Central Time - Merida',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - Mérida',
      label_pt_br: '(GMT-05:00) Horário Central - Mérida',
      label_es: '(GMT-05:00) Hora central - Mérida',
    },
  },
  {
    value: 'America/Mexico_City',
    label: '(GMT-05:00) Central Time - Mexico City',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - Cidade do México',
      label_pt_br: '(GMT-05:00) Horário Central - Cidade do México',
      label_es: '(GMT-05:00) Hora central - Ciudad de México',
    },
  },
  {
    value: 'America/Monterrey',
    label: '(GMT-05:00) Central Time - Monterrey',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - Monterrey',
      label_pt_br: '(GMT-05:00) Horário Central - Monterrey',
      label_es: '(GMT-05:00) Hora central - Monterrey',
    },
  },
  {
    value: 'America/North_Dakota/New_Salem',
    label: '(GMT-05:00) Central Time - New Salem, North Dakota',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - New Salen, Dakota do Norte',
      label_pt_br: '(GMT-05:00) Horário Central - New Salen, Dakota do Norte',
      label_es: '(GMT-05:00) Hora central - New Salem, Dakota del Norte',
    },
  },
  {
    value: 'America/Rainy_River',
    label: '(GMT-05:00) Central Time - Rainy River',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - Rainy River',
      label_pt_br: '(GMT-05:00) Horário Central - Rainy River',
      label_es: '(GMT-05:00) Hora central - Rainy River',
    },
  },
  {
    value: 'America/Rankin_Inlet',
    label: '(GMT-05:00) Central Time - Rankin Inlet',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - Rankin Inlet',
      label_pt_br: '(GMT-05:00) Horário Central - Rankin Inlet',
      label_es: '(GMT-05:00) Hora central - Rankin Inlet',
    },
  },
  {
    value: 'America/Resolute',
    label: '(GMT-05:00) Central Time - Resolute',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - Resolute',
      label_pt_br: '(GMT-05:00) Horário Central - Resolute',
      label_es: '(GMT-05:00) Hora central - Resolute',
    },
  },
  {
    value: 'America/Indiana/Tell_City',
    label: '(GMT-05:00) Central Time - Tell City, Indiana',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - Tell City, Indiana',
      label_pt_br: '(GMT-05:00) Horário Central - Tell City, Indiana',
      label_es: '(GMT-05:00) Hora central - Tell City, Indiana',
    },
  },
  {
    value: 'America/Winnipeg',
    label: '(GMT-05:00) Central Time - Winnipeg',
    i18n: {
      label_pt: '(GMT-05:00) Hora Central - Winnipeg',
      label_pt_br: '(GMT-05:00) Horário Central - Winnipeg',
      label_es: '(GMT-05:00) Hora central - Winnipeg',
    },
  },
  {
    value: 'America/Bogota',
    label: '(GMT-05:00) Colombia Standard Time',
    i18n: {
      label_pt: '(GMT-05:00) Hora padrão da Colômbia',
      label_pt_br: '(GMT-05:00) Horário Padrão da Colômbia',
      label_es: '(GMT-05:00) Hora estándar de Colombia',
    },
  },
  {
    value: 'America/Atikokan',
    label: '(GMT-05:00) Eastern Standard Time - Atikokan',
    i18n: {
      label_pt: '(GMT-05:00) Hora padrão Oriental - Atikokan',
      label_pt_br: '(GMT-05:00) Horário Padrão do Leste - Atikokan',
      label_es: '(GMT-05:00) Hora estándar oriental - Atikokan',
    },
  },
  {
    value: 'America/Cancun',
    label: '(GMT-05:00) Eastern Standard Time - Cancun',
    i18n: {
      label_pt: '(GMT-05:00) Hora padrão Oriental - Cancun',
      label_pt_br: '(GMT-05:00) Horário Padrão do Leste - Cancún',
      label_es: '(GMT-05:00) Hora estándar oriental - Cancún',
    },
  },
  {
    value: 'America/Jamaica',
    label: '(GMT-05:00) Eastern Standard Time - Jamaica',
    i18n: {
      label_pt: '(GMT-05:00) Hora padrão Oriental - Jamaica',
      label_pt_br: '(GMT-05:00) Horário Padrão do Leste - Jamaica',
      label_es: '(GMT-05:00) Hora estándar oriental - Jamaica',
    },
  },
  {
    value: 'America/Panama',
    label: '(GMT-05:00) Eastern Standard Time - Panama',
    i18n: {
      label_pt: '(GMT-05:00) Hora padrão Oriental - Panamá',
      label_pt_br: '(GMT-05:00) Horário Padrão do Leste - Panamá',
      label_es: '(GMT-05:00) Hora estándar oriental - Panamá',
    },
  },
  {
    value: 'America/Guayaquil',
    label: '(GMT-05:00) Ecuador Time',
    i18n: {
      label_pt: '(GMT-05:00) Hora do Equador',
      label_pt_br: '(GMT-05:00) Horário do Equador',
      label_es: '(GMT-05:00) Hora de Ecuador',
    },
  },
  {
    value: 'America/Lima',
    label: '(GMT-05:00) Peru Standard Time',
    i18n: {
      label_pt: '(GMT-05:00) Hora padrão do Peru',
      label_pt_br: '(GMT-05:00) Horário Padrão do Peru',
      label_es: '(GMT-05:00) Hora estándar de Perú',
    },
  },
  {
    value: 'America/Boa_Vista',
    label: '(GMT-04:00) Amazon Standard Time - Boa Vista',
    i18n: {
      label_pt: '(GMT-04:00) Hora padrão do Amazonas - Boa Vista',
      label_pt_br: '(GMT-04:00) Horário Padrão do Amazonas - Boa Vista',
      label_es: '(GMT-04:00) Hora estándar del Amazonas - Boa Vista',
    },
  },
  {
    value: 'America/Manaus',
    label: '(GMT-04:00) Amazon Standard Time - Manaus',
    i18n: {
      label_pt: '(GMT-04:00) Hora padrão do Amazonas - Manaus',
      label_pt_br: '(GMT-04:00) Horário Padrão do Amazonas - Manaus',
      label_es: '(GMT-04:00) Hora estándar del Amazonas - Manaos',
    },
  },
  {
    value: 'America/Porto_Velho',
    label: '(GMT-04:00) Amazon Standard Time - Porto Velho',
    i18n: {
      label_pt: '(GMT-04:00) Hora padrão do Amazonas - Porto Velho',
      label_pt_br: '(GMT-04:00) Horário Padrão do Amazonas - Porto Velho',
      label_es: '(GMT-04:00) Hora estándar del Amazonas - Porto Velho',
    },
  },
  {
    value: 'America/Campo_Grande',
    label: '(GMT-04:00) Amazon Time - Campo Grande',
    i18n: {
      label_pt: '(GMT-04:00) Hora do Amazonas - Campo Grande',
      label_pt_br: '(GMT-04:00) Horário do Amazonas - Campo Grande',
      label_es: '(GMT-04:00) Hora del Amazonas - Campo Grande',
    },
  },
  {
    value: 'America/Cuiaba',
    label: '(GMT-04:00) Amazon Time - Cuiaba',
    i18n: {
      label_pt: '(GMT-04:00) Hora do Amazonas - Cuiabá',
      label_pt_br: '(GMT-04:00) Horário do Amazonas - Cuiabá',
      label_es: '(GMT-04:00) Hora del Amazonas - Cuiabá',
    },
  },
  {
    value: 'America/Barbados',
    label: '(GMT-04:00) Atlantic Standard Time - Barbados',
    i18n: {
      label_pt: '(GMT-04:00) Hora padrão do Atlântico - Barbados',
      label_pt_br: '(GMT-04:00) Horário Padrão do Atlântico - Barbados',
      label_es: '(GMT-04:00) Hora estándar del Atlántico - Barbados',
    },
  },
  {
    value: 'America/Blanc-Sablon',
    label: '(GMT-04:00) Atlantic Standard Time - Blanc-Sablon',
    i18n: {
      label_pt: '(GMT-04:00) Hora padrão do Atlântico - Blanc-Sablon',
      label_pt_br: '(GMT-04:00) Horário Padrão do Atlântico - Blanc-Sablon',
      label_es: '(GMT-04:00) Hora estándar del Atlántico - Blanc-Sablon',
    },
  },
  {
    value: 'America/Curacao',
    label: '(GMT-04:00) Atlantic Standard Time - Curaçao',
    i18n: {
      label_pt: '(GMT-04:00) Hora padrão do Atlântico - Curaçau',
      label_pt_br: '(GMT-04:00) Horário Padrão do Atlântico - Curaçao',
      label_es: '(GMT-04:00) Hora estándar del Atlántico - Curazao',
    },
  },
  {
    value: 'America/Martinique',
    label: '(GMT-04:00) Atlantic Standard Time - Martinique',
    i18n: {
      label_pt: '(GMT-04:00) Hora padrão do Atlântico - Martinica',
      label_pt_br: '(GMT-04:00) Horário Padrão do Atlântico - Martinica',
      label_es: '(GMT-04:00) Hora estándar del Atlántico - Martinica',
    },
  },
  {
    value: 'America/Port_of_Spain',
    label: '(GMT-04:00) Atlantic Standard Time - Port of Spain',
    i18n: {
      label_pt: '(GMT-04:00) Hora padrão do Atlântico - Porto de Espanha',
      label_pt_br: '(GMT-04:00) Horário Padrão do Atlântico - Port of Spain',
      label_es: '(GMT-04:00) Hora estándar del Atlántico - Puerto España',
    },
  },
  {
    value: 'America/Puerto_Rico',
    label: '(GMT-04:00) Atlantic Standard Time - Puerto Rico',
    i18n: {
      label_pt: '(GMT-04:00) Hora padrão do Atlântico - Porto Rico',
      label_pt_br: '(GMT-04:00) Horário Padrão do Atlântico - Porto Rico',
      label_es: '(GMT-04:00) Hora estándar del Atlántico - Puerto Rico',
    },
  },
  {
    value: 'America/Santo_Domingo',
    label: '(GMT-04:00) Atlantic Standard Time - Santo Domingo',
    i18n: {
      label_pt: '(GMT-04:00) Hora padrão do Atlântico - Santo Domingo',
      label_pt_br: '(GMT-04:00) Horário Padrão do Atlântico - Santo Domingo',
      label_es: '(GMT-04:00) Hora estándar del Atlántico - Santo Domingo',
    },
  },
  {
    value: 'America/La_Paz',
    label: '(GMT-04:00) Bolivia Time',
    i18n: {
      label_pt: '(GMT-04:00) Hora da Bolívia',
      label_pt_br: '(GMT-04:00) Horário da Bolívia',
      label_es: '(GMT-04:00) Hora de Bolivia',
    },
  },
  {
    value: 'America/Santiago',
    label: '(GMT-04:00) Chile Time',
    i18n: {
      label_pt: '(GMT-04:00) Hora do Chile',
      label_pt_br: '(GMT-04:00) Horário do Chile',
      label_es: '(GMT-04:00) Hora de Chile',
    },
  },
  {
    value: 'America/Havana',
    label: '(GMT-04:00) Cuba Time',
    i18n: {
      label_pt: '(GMT-04:00) Hora de Cuba',
      label_pt_br: '(GMT-04:00) Horário de Cuba',
      label_es: '(GMT-04:00) Hora de Cuba',
    },
  },
  {
    value: 'America/Detroit',
    label: '(GMT-04:00) Eastern Time - Detroit',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Detroit',
      label_pt_br: '(GMT-04:00) Horário do Leste - Detroit',
      label_es: '(GMT-04:00) Hora oriental - Detroit',
    },
  },
  {
    value: 'America/Grand_Turk',
    label: '(GMT-04:00) Eastern Time - Grand Turk',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Grand Turk',
      label_pt_br: '(GMT-04:00) Horário do Leste - Grand Turk',
      label_es: '(GMT-04:00) Hora oriental - Gran Turca',
    },
  },
  {
    value: 'America/Indiana/Indianapolis',
    label: '(GMT-04:00) Eastern Time - Indianapolis',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Indianápolis',
      label_pt_br: '(GMT-04:00) Horário do Leste - Indianápolis',
      label_es: '(GMT-04:00) Hora oriental - Indianápolis',
    },
  },
  {
    value: 'America/Iqaluit',
    label: '(GMT-04:00) Eastern Time - Iqaluit',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Iqaluit',
      label_pt_br: '(GMT-04:00) Horário do Leste - Iqaluit',
      label_es: '(GMT-04:00) Hora oriental - Iqaluit',
    },
  },
  {
    value: 'America/Kentucky/Louisville',
    label: '(GMT-04:00) Eastern Time - Louisville',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Louisville',
      label_pt_br: '(GMT-04:00) Horário do Leste - Louisville',
      label_es: '(GMT-04:00) Hora oriental - Louisville',
    },
  },
  {
    value: 'America/Indiana/Marengo',
    label: '(GMT-04:00) Eastern Time - Marengo, Indiana',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Marengo, Indiana',
      label_pt_br: '(GMT-04:00) Horário do Leste - Marengo, Indiana',
      label_es: '(GMT-04:00) Hora oriental - Marengo, Indiana',
    },
  },
  {
    value: 'America/Kentucky/Monticello',
    label: '(GMT-04:00) Eastern Time - Monticello, Kentucky',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Monticello, Kentucky',
      label_pt_br: '(GMT-04:00) Horário do Leste - Monticello, Kentucky',
      label_es: '(GMT-04:00) Hora oriental - Monticello, Kentucky',
    },
  },
  {
    value: 'America/Nassau',
    label: '(GMT-04:00) Eastern Time - Nassau',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Nassau',
      label_pt_br: '(GMT-04:00) Horário do Leste - Nassau',
      label_es: '(GMT-04:00) Hora oriental - Nassau',
    },
  },
  {
    value: 'America/New_York',
    label: '(GMT-04:00) Eastern Time - New York',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Nova Iorque',
      label_pt_br: '(GMT-04:00) Horário do Leste - Nova York',
      label_es: '(GMT-04:00) Hora oriental - Nueva York',
    },
  },
  {
    value: 'America/Nipigon',
    label: '(GMT-04:00) Eastern Time - Nipigon',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Nipigon',
      label_pt_br: '(GMT-04:00) Horário do Leste - Nipigon',
      label_es: '(GMT-04:00) Hora oriental - Nipigon',
    },
  },
  {
    value: 'America/Pangnirtung',
    label: '(GMT-04:00) Eastern Time - Pangnirtung',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Pangnirtung',
      label_pt_br: '(GMT-04:00) Horário do Leste - Pangnirtung',
      label_es: '(GMT-04:00) Hora oriental - Pangnirtung',
    },
  },
  {
    value: 'America/Indiana/Petersburg',
    label: '(GMT-04:00) Eastern Time - Petersburg, Indiana',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Petersburg, Indiana',
      label_pt_br: '(GMT-04:00) Horário do Leste - Petersburg, Indiana',
      label_es: '(GMT-04:00) Hora oriental - Petersburg, Indiana',
    },
  },
  {
    value: 'America/Port-au-Prince',
    label: '(GMT-04:00) Eastern Time - Port-au-Prince',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Port-au-Prince',
      label_pt_br: '(GMT-04:00) Horário do Leste - Porto Príncipe',
      label_es: '(GMT-04:00) Hora oriental - Puerto Príncipe',
    },
  },
  {
    value: 'America/Thunder_Bay',
    label: '(GMT-04:00) Eastern Time - Thunder Bay',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Thunder Bay',
      label_pt_br: '(GMT-04:00) Horário do Leste - Thunder Bay',
      label_es: '(GMT-04:00) Hora oriental - Thunder Bay',
    },
  },
  {
    value: 'America/Toronto',
    label: '(GMT-04:00) Eastern Time - Toronto',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Toronto',
      label_pt_br: '(GMT-04:00) Horário do Leste - Toronto',
      label_es: '(GMT-04:00) Hora oriental - Toronto',
    },
  },
  {
    value: 'America/Indiana/Vevay',
    label: '(GMT-04:00) Eastern Time - Vevay, Indiana',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Vevay, Indiana',
      label_pt_br: '(GMT-04:00) Horário do Leste - Vevay, Indiana',
      label_es: '(GMT-04:00) Hora oriental - Vevay, Indiana',
    },
  },
  {
    value: 'America/Indiana/Vincennes',
    label: '(GMT-04:00) Eastern Time - Vincennes, Indiana',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Vincennes, Indiana',
      label_pt_br: '(GMT-04:00) Horário do Leste - Vincennes, Indiana',
      label_es: '(GMT-04:00) Hora oriental - Vincennes, Indiana',
    },
  },
  {
    value: 'America/Indiana/Winamac',
    label: '(GMT-04:00) Eastern Time - Winamac, Indiana',
    i18n: {
      label_pt: '(GMT-04:00) Hora Oriental - Winamac, Indiana',
      label_pt_br: '(GMT-04:00) Horário do Leste - Winamac, Indiana',
      label_es: '(GMT-04:00) Hora oriental - Winamac, Indiana',
    },
  },
  {
    value: 'America/Guyana',
    label: '(GMT-04:00) Guyana Time',
    i18n: {
      label_pt: '(GMT-04:00) Hora da Guiana',
      label_pt_br: '(GMT-04:00) Horário da Guiana',
      label_es: '(GMT-04:00) Hora de Guyana',
    },
  },
  {
    value: 'America/Asuncion',
    label: '(GMT-04:00) Paraguay Time',
    i18n: {
      label_pt: '(GMT-04:00) Hora do Paraguai',
      label_pt_br: '(GMT-04:00) Horário do Paraguai',
      label_es: '(GMT-04:00) Hora de Paraguay',
    },
  },
  {
    value: 'America/Caracas',
    label: '(GMT-04:00) Venezuela Time',
    i18n: {
      label_pt: '(GMT-04:00) Hora da Venezuela',
      label_pt_br: '(GMT-04:00) Horário da Venezuela',
      label_es: '(GMT-04:00) Hora de Venezuela',
    },
  },
  {
    value: 'America/Argentina/Buenos_Aires',
    label: '(GMT-03:00) Argentina Standard Time - Buenos Aires',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão da Argentina - Buenos Aires',
      label_pt_br: '(GMT-03:00) Horário Padrão da Argentina - Buenos Aires',
      label_es: '(GMT-03:00) Hora estándar de Argentina - Buenos Aires',
    },
  },
  {
    value: 'America/Argentina/Catamarca',
    label: '(GMT-03:00) Argentina Standard Time - Catamarca',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão da Argentina - Catamarca',
      label_pt_br: '(GMT-03:00) Horário Padrão da Argentina - Catamarca',
      label_es: '(GMT-03:00) Hora estándar de Argentina - Catamarca',
    },
  },
  {
    value: 'America/Argentina/Cordoba',
    label: '(GMT-03:00) Argentina Standard Time - Cordoba',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão da Argentina - Córdoba',
      label_pt_br: '(GMT-03:00) Horário Padrão da Argentina - Córdoba',
      label_es: '(GMT-03:00) Hora estándar de Argentina - Córdoba',
    },
  },
  {
    value: 'America/Argentina/Jujuy',
    label: '(GMT-03:00) Argentina Standard Time - Jujuy',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão da Argentina - Jujuy',
      label_pt_br: '(GMT-03:00) Horário Padrão da Argentina - Jujuy',
      label_es: '(GMT-03:00) Hora estándar de Argentina - Jujuy',
    },
  },
  {
    value: 'America/Argentina/La_Rioja',
    label: '(GMT-03:00) Argentina Standard Time - La Rioja',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão da Argentina - La Rioja',
      label_pt_br: '(GMT-03:00) Horário Padrão da Argentina - La Rioja',
      label_es: '(GMT-03:00) Hora estándar de Argentina - La Rioja',
    },
  },
  {
    value: 'America/Argentina/Mendoza',
    label: '(GMT-03:00) Argentina Standard Time - Mendoza',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão da Argentina - Mendoza',
      label_pt_br: '(GMT-03:00) Horário Padrão da Argentina - Mendoza',
      label_es: '(GMT-03:00) Hora estándar de Argentina - Mendoza',
    },
  },
  {
    value: 'America/Argentina/Rio_Gallegos',
    label: '(GMT-03:00) Argentina Standard Time - Rio Gallegos',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão da Argentina - Rio Gallegos',
      label_pt_br: '(GMT-03:00) Horário Padrão da Argentina - Rio Gallegos',
      label_es: '(GMT-03:00) Hora estándar de Argentina - Río Gallegos',
    },
  },
  {
    value: 'America/Argentina/Salta',
    label: '(GMT-03:00) Argentina Standard Time - Salta',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão da Argentina - Salta',
      label_pt_br: '(GMT-03:00) Horário Padrão da Argentina - Salta',
      label_es: '(GMT-03:00) Hora estándar de Argentina - Salta',
    },
  },
  {
    value: 'America/Argentina/San_Juan',
    label: '(GMT-03:00) Argentina Standard Time - San Juan',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão da Argentina - San Juan',
      label_pt_br: '(GMT-03:00) Horário Padrão da Argentina - San Juan',
      label_es: '(GMT-03:00) Hora estándar de Argentina - San Juan',
    },
  },
  {
    value: 'America/Argentina/Tucuman',
    label: '(GMT-03:00) Argentina Standard Time - Tucuman',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão da Argentina - Tucumán',
      label_pt_br: '(GMT-03:00) Horário Padrão da Argentina - Tucumã',
      label_es: '(GMT-03:00) Hora estándar de Argentina - Tucumán',
    },
  },
  {
    value: 'America/Argentina/Ushuaia',
    label: '(GMT-03:00) Argentina Standard Time - Ushuaia',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão da Argentina - Ushuaia',
      label_pt_br: '(GMT-03:00) Horário Padrão da Argentina - Ushuaia',
      label_es: '(GMT-03:00) Hora estándar de Argentina - Ushuaia',
    },
  },
  {
    value: 'Atlantic/Bermuda',
    label: '(GMT-03:00) Atlantic Time - Bermuda',
    i18n: {
      label_pt: '(GMT-03:00) Hora do Atlântico - Bermudas',
      label_pt_br: '(GMT-03:00) Horário do Atlântico - Bermudas',
      label_es: '(GMT-03:00) Hora del Atlántico - Bermudas',
    },
  },
  {
    value: 'America/Glace_Bay',
    label: '(GMT-03:00) Atlantic Time - Glace Bay',
    i18n: {
      label_pt: '(GMT-03:00) Hora do Atlântico - Glace Bay',
      label_pt_br: '(GMT-03:00) Horário do Atlântico - Glace Bay',
      label_es: '(GMT-03:00) Hora del Atlántico - Glace Bay',
    },
  },
  {
    value: 'America/Goose_Bay',
    label: '(GMT-03:00) Atlantic Time - Goose Bay',
    i18n: {
      label_pt: '(GMT-03:00) Hora do Atlântico - Goose Bay',
      label_pt_br: '(GMT-03:00) Horário do Atlântico - Goose Bay',
      label_es: '(GMT-03:00) Hora del Atlántico - Goose Bay',
    },
  },
  {
    value: 'America/Halifax',
    label: '(GMT-03:00) Atlantic Time - Halifax',
    i18n: {
      label_pt: '(GMT-03:00) Hora do Atlântico - Halifax',
      label_pt_br: '(GMT-03:00) Horário do Atlântico - Halifax',
      label_es: '(GMT-03:00) Hora del Atlántico - Halifax',
    },
  },
  {
    value: 'America/Moncton',
    label: '(GMT-03:00) Atlantic Time - Moncton',
    i18n: {
      label_pt: '(GMT-03:00) Hora do Atlântico - Moncton',
      label_pt_br: '(GMT-03:00) Horário do Atlântico - Moncton',
      label_es: '(GMT-03:00) Hora del Atlántico - Moncton',
    },
  },
  {
    value: 'America/Thule',
    label: '(GMT-03:00) Atlantic Time - Thule',
    i18n: {
      label_pt: '(GMT-03:00) Hora do Atlântico - Thule',
      label_pt_br: '(GMT-03:00) Horário do Atlântico - Thule',
      label_es: '(GMT-03:00) Hora del Atlántico - Thule',
    },
  },
  {
    value: 'America/Araguaina',
    label: '(GMT-03:00) Brasilia Standard Time - Araguaina',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão de Brasília - Araguaina',
      label_pt_br: '(GMT-03:00) Horário Padrão de Brasília - Araguaína',
      label_es: '(GMT-03:00) Hora estándar de Brasilia - Araguaína',
    },
  },
  {
    value: 'America/Bahia',
    label: '(GMT-03:00) Brasilia Standard Time - Bahia',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão de Brasília - Baía',
      label_pt_br: '(GMT-03:00) Horário Padrão de Brasília - Bahia',
      label_es: '(GMT-03:00) Hora estándar de Brasilia - Bahía',
    },
  },
  {
    value: 'America/Belem',
    label: '(GMT-03:00) Brasilia Standard Time - Belem',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão de Brasília - Belém',
      label_pt_br: '(GMT-03:00) Horário Padrão de Brasília - Belém',
      label_es: '(GMT-03:00) Hora estándar de Brasilia - Belén',
    },
  },
  {
    value: 'America/Fortaleza',
    label: '(GMT-03:00) Brasilia Standard Time - Fortaleza',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão de Brasília - Fortaleza',
      label_pt_br: '(GMT-03:00) Horário Padrão de Brasília - Fortaleza',
      label_es: '(GMT-03:00) Hora estándar de Brasilia - Fortaleza',
    },
  },
  {
    value: 'America/Maceio',
    label: '(GMT-03:00) Brasilia Standard Time - Maceio',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão de Brasília - Maceió',
      label_pt_br: '(GMT-03:00) Horário Padrão de Brasília - Maceió',
      label_es: '(GMT-03:00) Hora estándar de Brasilia - Maceió',
    },
  },
  {
    value: 'America/Recife',
    label: '(GMT-03:00) Brasilia Standard Time - Recife',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão de Brasília - Recife',
      label_pt_br: '(GMT-03:00) Horário Padrão de Brasília - Recife',
      label_es: '(GMT-03:00) Hora estándar de Brasilia - Recife',
    },
  },
  {
    value: 'America/Santarem',
    label: '(GMT-03:00) Brasilia Standard Time - Santarem',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão de Brasília - Santarém',
      label_pt_br: '(GMT-03:00) Horário Padrão de Brasília - Santarém',
      label_es: '(GMT-03:00) Hora estándar de Brasilia - Santarém',
    },
  },
  {
    value: 'America/Sao_Paulo',
    label: '(GMT-03:00) Brasilia Time',
    i18n: {
      label_pt: '(GMT-03:00) Hora de Brasília',
      label_pt_br: '(GMT-03:00) Horário de Brasília',
      label_es: '(GMT-03:00) Hora de Brasilia',
    },
  },
  {
    value: 'Atlantic/Stanley',
    label: '(GMT-03:00) Falkland Islands Standard Time',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão das Ilhas Falkland',
      label_pt_br: '(GMT-03:00) Horário Padrão das Ilhas Malvinas',
      label_es: '(GMT-03:00) Hora estándar de las islas Malvinas',
    },
  },
  {
    value: 'America/Cayenne',
    label: '(GMT-03:00) French Guiana Time',
    i18n: {
      label_pt: '(GMT-03:00) Hora da Guiana Francesa',
      label_pt_br: '(GMT-03:00) Horário da Guiana Francesa',
      label_es: '(GMT-03:00) Hora de la Guayana Francesa',
    },
  },
  {
    value: 'Antarctica/Palmer',
    label: '(GMT-03:00) Palmer Time',
    i18n: {
      label_pt: '(GMT-03:00) Hora de Palmer',
      label_pt_br: '(GMT-03:00) Horário Palmer',
      label_es: '(GMT-03:00) Hora de Palmer',
    },
  },
  {
    value: 'America/Punta_Arenas',
    label: '(GMT-03:00) Punta Arenas Time',
    i18n: {
      label_pt: '(GMT-03:00) Hora de Punta Arenas',
      label_pt_br: '(GMT-03:00) Horário Punta Arenas',
      label_es: '(GMT-03:00) Hora de Punta Arenas',
    },
  },
  {
    value: 'Antarctica/Rothera',
    label: '(GMT-03:00) Rothera Time',
    i18n: {
      label_pt: '(GMT-03:00) Hora de Rothera',
      label_pt_br: '(GMT-03:00) Horário de Rothera',
      label_es: '(GMT-03:00) Hora de Rothera',
    },
  },
  {
    value: 'America/Paramaribo',
    label: '(GMT-03:00) Suriname Time',
    i18n: {
      label_pt: '(GMT-03:00) Hora do Suriname',
      label_pt_br: '(GMT-03:00) Horário do Suriname',
      label_es: '(GMT-03:00) Hora de Surinam',
    },
  },
  {
    value: 'America/Montevideo',
    label: '(GMT-03:00) Uruguay Standard Time',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão do Uruguai',
      label_pt_br: '(GMT-03:00) Horário Padrão do Uruguai',
      label_es: '(GMT-03:00) Hora estándar de Uruguay',
    },
  },
  {
    value: 'America/Argentina/San_Luis',
    label: '(GMT-03:00) Western Argentina Standard Time',
    i18n: {
      label_pt: '(GMT-03:00) Hora padrão da Argentina Ocidental',
      label_pt_br: '(GMT-03:00) Horário Padrão da Argentina Ocidental',
      label_es: '(GMT-03:00) Hora estándar de Argentina occidental',
    },
  },
  {
    value: 'America/St_Johns',
    label: '(GMT-02:30) Newfoundland Time',
    i18n: {
      label_pt: '(GMT-02:30) Hora da Terra Nova',
      label_pt_br: '(GMT-02:30) Horário da Terra Nova',
      label_es: '(GMT-02:30) Hora de Terranova',
    },
  },
  {
    value: 'America/Noronha',
    label: '(GMT-02:00) Fernando de Noronha Standard Time',
    i18n: {
      label_pt: '(GMT-02:00) Hora padrão de Fernando de Noronha',
      label_pt_br: '(GMT-02:00) Horário Padrão de Fernando de Noronha',
      label_es: '(GMT-02:00) Hora estándar de Fernando de Noronha',
    },
  },
  {
    value: 'Atlantic/South_Georgia',
    label: '(GMT-02:00) South Georgia Time',
    i18n: {
      label_pt: '(GMT-02:00) Hora da Geórgia do Sul',
      label_pt_br: '(GMT-02:00) Horário da Geórgia do Sul',
      label_es: '(GMT-02:00) Hora de Georgia del Sur',
    },
  },
  {
    value: 'America/Miquelon',
    label: '(GMT-02:00) St. Pierre & Miquelon Time',
    i18n: {
      label_pt: '(GMT-02:00) Hora de São Pedro e Miquelão',
      label_pt_br: '(GMT-02:00) Horário de Saint Pierre e Miquelon',
      label_es: '(GMT-02:00) Hora de San Pedro y Miquelón',
    },
  },
  {
    value: 'America/Godthab',
    label: '(GMT-02:00) West Greenland Time',
    i18n: {
      label_pt: '(GMT-02:00) Hora da Gronelândia Ocidental',
      label_pt_br: '(GMT-02:00) Horário da Groenlândia Ocidental',
      label_es: '(GMT-02:00) Hora de Groenlandia occidental',
    },
  },
  {
    value: 'Atlantic/Cape_Verde',
    label: '(GMT-01:00) Cape Verde Standard Time',
    i18n: {
      label_pt: '(GMT-01:00) Hora padrão de Cabo Verde',
      label_pt_br: '(GMT-01:00) Horário Padrão de Cabo Verde',
      label_es: '(GMT-01:00) Hora estándar de Cabo Verde',
    },
  },
  {
    value: 'Atlantic/Azores',
    label: '(GMT+00:00) Azores Time',
    i18n: {
      label_pt: '(GMT+00:00) Hora dos Açores',
      label_pt_br: '(GMT+00:00) Horário dos Açores',
      label_es: '(GMT+00:00) Hora de las Azores',
    },
  },
  {
    value: 'UTC',
    label: '(GMT+00:00) Coordinated Universal Time',
    i18n: {
      label_pt: '(GMT+00:00) Hora Coordenada Universal',
      label_pt_br: '(GMT+00:00) Horário Universal Coordenado',
      label_es: '(GMT+00:00) Tiempo universal coordinado',
    },
  },
  {
    value: 'America/Scoresbysund',
    label: '(GMT+00:00) East Greenland Time',
    i18n: {
      label_pt: '(GMT+00:00) Hora da Gronelândia Oriental',
      label_pt_br: '(GMT+00:00) Horário da Groelândia Oriental',
      label_es: '(GMT+00:00) Hora de Groenlandia oriental',
    },
  },
  {
    value: 'Etc/GMT',
    label: '(GMT+00:00) Greenwich Mean Time',
    i18n: {
      label_pt: '(GMT+00:00) Hora de Greenwich',
      label_pt_br: '(GMT+00:00) Horário do Meridiano de Greenwich',
      label_es: '(GMT+00:00) Hora del meridiano de Greenwich',
    },
  },
  {
    value: 'Africa/Abidjan',
    label: '(GMT+00:00) Greenwich Mean Time - Abidjan',
    i18n: {
      label_pt: '(GMT+00:00) Hora de Greenwich - Abidjan',
      label_pt_br: '(GMT+00:00) Horário do Meridiano de Greenwich - Abidjan',
      label_es: '(GMT+00:00) Hora del meridiano de Greenwich - Abiyán',
    },
  },
  {
    value: 'Africa/Accra',
    label: '(GMT+00:00) Greenwich Mean Time - Accra',
    i18n: {
      label_pt: '(GMT+00:00) Hora de Greenwich - Acra',
      label_pt_br: '(GMT+00:00) Horário do Meridiano de Greenwich - Acra',
      label_es: '(GMT+00:00) Hora del meridiano de Greenwich - Acra',
    },
  },
  {
    value: 'Africa/Bissau',
    label: '(GMT+00:00) Greenwich Mean Time - Bissau',
    i18n: {
      label_pt: '(GMT+00:00) Hora de Greenwich - Bissau',
      label_pt_br: '(GMT+00:00) Horário do Meridiano de Greenwich - Bissau',
      label_es: '(GMT+00:00) Hora del meridiano de Greenwich - Bisáu',
    },
  },
  {
    value: 'America/Danmarkshavn',
    label: '(GMT+00:00) Greenwich Mean Time - Danmarkshavn',
    i18n: {
      label_pt: '(GMT+00:00) Hora de Greenwich - Danmarkshavn',
      label_pt_br:
        '(GMT+00:00) Horário do Meridiano de Greenwich - Danmarkshavn',
      label_es: '(GMT+00:00) Hora del meridiano de Greenwich - Danmarkshavn',
    },
  },
  {
    value: 'Africa/Monrovia',
    label: '(GMT+00:00) Greenwich Mean Time - Monrovia',
    i18n: {
      label_pt: '(GMT+00:00) Hora de Greenwich - Monróvia',
      label_pt_br: '(GMT+00:00) Horário do Meridiano de Greenwich - Monróvia',
      label_es: '(GMT+00:00) Hora del meridiano de Greenwich - Monrovia',
    },
  },
  {
    value: 'Atlantic/Reykjavik',
    label: '(GMT+00:00) Greenwich Mean Time - Reykjavik',
    i18n: {
      label_pt: '(GMT+00:00) Hora de Greenwich - Reiquiavique',
      label_pt_br: '(GMT+00:00) Horário do Meridiano de Greenwich - Reykjavík',
      label_es: '(GMT+00:00) Hora del meridiano de Greenwich - Reikiavik',
    },
  },
  {
    value: 'Africa/Sao_Tome',
    label: '(GMT+00:00) Greenwich Mean Time - São Tomé',
    i18n: {
      label_pt: '(GMT+00:00) Hora de Greenwich - São Tomé',
      label_pt_br: '(GMT+00:00) Horário do Meridiano de Greenwich - São Tomé',
      label_es: '(GMT+00:00) Hora del meridiano de Greenwich - Santo Tomé',
    },
  },
  {
    value: 'Africa/Algiers',
    label: '(GMT+01:00) Central European Standard Time - Algiers',
    i18n: {
      label_pt: '(GMT+01:00) Hora padrão da Europa Central - Argel',
      label_pt_br: '(GMT+01:00) Horário Padrão da Europa Central - Argel',
      label_es: '(GMT+01:00) Hora estándar de Europa central - Argel',
    },
  },
  {
    value: 'Africa/Tunis',
    label: '(GMT+01:00) Central European Standard Time - Tunis',
    i18n: {
      label_pt: '(GMT+01:00) Hora padrão da Europa Central - Tunes',
      label_pt_br: '(GMT+01:00) Horário Padrão da Europa Central - Túnis',
      label_es: '(GMT+01:00) Hora estándar de Europa central - Túnez',
    },
  },
  {
    value: 'Europe/Dublin',
    label: '(GMT+01:00) Ireland Time',
    i18n: {
      label_pt: '(GMT+01:00) Hora de Irlanda',
      label_pt_br: '(GMT+01:00) Horário Irlanda',
      label_es: '(GMT+01:00) Hora de Irlanda',
    },
  },
  {
    value: 'Africa/Casablanca',
    label: '(GMT+01:00) Morocco Time',
    i18n: {
      label_pt: '(GMT+01:00) Hora de Marrocos',
      label_pt_br: '(GMT+01:00) Horário Marrocos',
      label_es: '(GMT+01:00) Hora de Marruecos',
    },
  },
  {
    value: 'Europe/London',
    label: '(GMT+01:00) United Kingdom Time',
    i18n: {
      label_pt: '(GMT+01:00) Hora de Reino Unido',
      label_pt_br: '(GMT+01:00) Horário Reino Unido',
      label_es: '(GMT+01:00) Hora de Reino Unido',
    },
  },
  {
    value: 'Africa/Lagos',
    label: '(GMT+01:00) West Africa Standard Time - Lagos',
    i18n: {
      label_pt: '(GMT+01:00) Hora padrão da África Ocidental - Lagos',
      label_pt_br: '(GMT+01:00) Horário Padrão da África Ocidental - Lagos',
      label_es: '(GMT+01:00) Hora estándar de África occidental - Lagos',
    },
  },
  {
    value: 'Africa/Ndjamena',
    label: '(GMT+01:00) West Africa Standard Time - Ndjamena',
    i18n: {
      label_pt: '(GMT+01:00) Hora padrão da África Ocidental - Ndjamena',
      label_pt_br: '(GMT+01:00) Horário Padrão da África Ocidental - N’Djamena',
      label_es: '(GMT+01:00) Hora estándar de África occidental - Yamena',
    },
  },
  {
    value: 'Atlantic/Canary',
    label: '(GMT+01:00) Western European Time - Canary',
    i18n: {
      label_pt: '(GMT+01:00) Hora da Europa Ocidental - Canárias',
      label_pt_br: '(GMT+01:00) Horário da Europa Ocidental - Canárias',
      label_es: '(GMT+01:00) Hora de Europa occidental - Islas Canarias',
    },
  },
  {
    value: 'Atlantic/Faroe',
    label: '(GMT+01:00) Western European Time - Faroe',
    i18n: {
      label_pt: '(GMT+01:00) Hora da Europa Ocidental - Faroé',
      label_pt_br: '(GMT+01:00) Horário da Europa Ocidental - Ilhas Faroe',
      label_es: '(GMT+01:00) Hora de Europa occidental - Islas Feroe',
    },
  },
  {
    value: 'Europe/Lisbon',
    label: '(GMT+01:00) Western European Time - Lisbon',
    i18n: {
      label_pt: '(GMT+01:00) Hora da Europa Ocidental - Lisboa',
      label_pt_br: '(GMT+01:00) Horário da Europa Ocidental - Lisboa',
      label_es: '(GMT+01:00) Hora de Europa occidental - Lisboa',
    },
  },
  {
    value: 'Atlantic/Madeira',
    label: '(GMT+01:00) Western European Time - Madeira',
    i18n: {
      label_pt: '(GMT+01:00) Hora da Europa Ocidental - Madeira',
      label_pt_br: '(GMT+01:00) Horário da Europa Ocidental - Madeira',
      label_es: '(GMT+01:00) Hora de Europa occidental - Madeira',
    },
  },
  {
    value: 'Africa/El_Aaiun',
    label: '(GMT+01:00) Western Sahara Time',
    i18n: {
      label_pt: '(GMT+01:00) Hora de Sara Ocidental',
      label_pt_br: '(GMT+01:00) Horário Saara Ocidental',
      label_es: '(GMT+01:00) Hora de Sáhara Occidental',
    },
  },
  {
    value: 'Africa/Khartoum',
    label: '(GMT+02:00) Central Africa Time - Khartoum',
    i18n: {
      label_pt: '(GMT+02:00) Hora da África Central - Cartum',
      label_pt_br: '(GMT+02:00) Horário da África Central - Cartum',
      label_es: '(GMT+02:00) Hora de África central - Jartún',
    },
  },
  {
    value: 'Africa/Maputo',
    label: '(GMT+02:00) Central Africa Time - Maputo',
    i18n: {
      label_pt: '(GMT+02:00) Hora da África Central - Maputo',
      label_pt_br: '(GMT+02:00) Horário da África Central - Maputo',
      label_es: '(GMT+02:00) Hora de África central - Maputo',
    },
  },
  {
    value: 'Africa/Windhoek',
    label: '(GMT+02:00) Central Africa Time - Windhoek',
    i18n: {
      label_pt: '(GMT+02:00) Hora da África Central - Windhoek',
      label_pt_br: '(GMT+02:00) Horário da África Central - Windhoek',
      label_es: '(GMT+02:00) Hora de África central - Windhoek',
    },
  },
  {
    value: 'Europe/Amsterdam',
    label: '(GMT+02:00) Central European Time - Amsterdam',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Amesterdão',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Amsterdã',
      label_es: '(GMT+02:00) Hora de Europa central - Ámsterdam',
    },
  },
  {
    value: 'Europe/Andorra',
    label: '(GMT+02:00) Central European Time - Andorra',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Andorra',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Andorra',
      label_es: '(GMT+02:00) Hora de Europa central - Andorra',
    },
  },
  {
    value: 'Europe/Belgrade',
    label: '(GMT+02:00) Central European Time - Belgrade',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Belgrado',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Belgrado',
      label_es: '(GMT+02:00) Hora de Europa central - Belgrado',
    },
  },
  {
    value: 'Europe/Berlin',
    label: '(GMT+02:00) Central European Time - Berlin',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Berlim',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Berlim',
      label_es: '(GMT+02:00) Hora de Europa central - Berlín',
    },
  },
  {
    value: 'Europe/Brussels',
    label: '(GMT+02:00) Central European Time - Brussels',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Bruxelas',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Bruxelas',
      label_es: '(GMT+02:00) Hora de Europa central - Bruselas',
    },
  },
  {
    value: 'Europe/Budapest',
    label: '(GMT+02:00) Central European Time - Budapest',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Budapeste',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Budapeste',
      label_es: '(GMT+02:00) Hora de Europa central - Budapest',
    },
  },
  {
    value: 'Africa/Ceuta',
    label: '(GMT+02:00) Central European Time - Ceuta',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Ceuta',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Ceuta',
      label_es: '(GMT+02:00) Hora de Europa central - Ceuta',
    },
  },
  {
    value: 'Europe/Copenhagen',
    label: '(GMT+02:00) Central European Time - Copenhagen',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Copenhaga',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Copenhague',
      label_es: '(GMT+02:00) Hora de Europa central - Copenhague',
    },
  },
  {
    value: 'Europe/Gibraltar',
    label: '(GMT+02:00) Central European Time - Gibraltar',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Gibraltar',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Gibraltar',
      label_es: '(GMT+02:00) Hora de Europa central - Gibraltar',
    },
  },
  {
    value: 'Europe/Luxembourg',
    label: '(GMT+02:00) Central European Time - Luxembourg',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Luxemburgo',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Luxemburgo',
      label_es: '(GMT+02:00) Hora de Europa central - Luxemburgo',
    },
  },
  {
    value: 'Europe/Madrid',
    label: '(GMT+02:00) Central European Time - Madrid',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Madrid',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Madri',
      label_es: '(GMT+02:00) Hora de Europa central - Madrid',
    },
  },
  {
    value: 'Europe/Malta',
    label: '(GMT+02:00) Central European Time - Malta',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Malta',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Malta',
      label_es: '(GMT+02:00) Hora de Europa central - Malta',
    },
  },
  {
    value: 'Europe/Monaco',
    label: '(GMT+02:00) Central European Time - Monaco',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Mónaco',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Mônaco',
      label_es: '(GMT+02:00) Hora de Europa central - Mónaco',
    },
  },
  {
    value: 'Europe/Oslo',
    label: '(GMT+02:00) Central European Time - Oslo',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Oslo',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Oslo',
      label_es: '(GMT+02:00) Hora de Europa central - Oslo',
    },
  },
  {
    value: 'Europe/Paris',
    label: '(GMT+02:00) Central European Time - Paris',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Paris',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Paris',
      label_es: '(GMT+02:00) Hora de Europa central - París',
    },
  },
  {
    value: 'Europe/Prague',
    label: '(GMT+02:00) Central European Time - Prague',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Praga',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Praga',
      label_es: '(GMT+02:00) Hora de Europa central - Praga',
    },
  },
  {
    value: 'Europe/Rome',
    label: '(GMT+02:00) Central European Time - Rome',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Roma',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Roma',
      label_es: '(GMT+02:00) Hora de Europa central - Roma',
    },
  },
  {
    value: 'Europe/Stockholm',
    label: '(GMT+02:00) Central European Time - Stockholm',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Estocolmo',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Estocolmo',
      label_es: '(GMT+02:00) Hora de Europa central - Estocolmo',
    },
  },
  {
    value: 'Europe/Tirane',
    label: '(GMT+02:00) Central European Time - Tirane',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Tirana',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Tirana',
      label_es: '(GMT+02:00) Hora de Europa central - Tirana',
    },
  },
  {
    value: 'Europe/Vienna',
    label: '(GMT+02:00) Central European Time - Vienna',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Viena',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Viena',
      label_es: '(GMT+02:00) Hora de Europa central - Viena',
    },
  },
  {
    value: 'Europe/Warsaw',
    label: '(GMT+02:00) Central European Time - Warsaw',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Varsóvia',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Varsóvia',
      label_es: '(GMT+02:00) Hora de Europa central - Varsovia',
    },
  },
  {
    value: 'Europe/Zurich',
    label: '(GMT+02:00) Central European Time - Zurich',
    i18n: {
      label_pt: '(GMT+02:00) Hora da Europa Central - Zurique',
      label_pt_br: '(GMT+02:00) Horário da Europa Central - Zurique',
      label_es: '(GMT+02:00) Hora de Europa central - Zúrich',
    },
  },
  {
    value: 'Africa/Cairo',
    label: '(GMT+02:00) Eastern European Standard Time - Cairo',
    i18n: {
      label_pt: '(GMT+02:00) Hora padrão da Europa Oriental - Cairo',
      label_pt_br: '(GMT+02:00) Horário Padrão da Europa Oriental - Cairo',
      label_es: '(GMT+02:00) Hora estándar de Europa oriental - El Cairo',
    },
  },
  {
    value: 'Europe/Kaliningrad',
    label: '(GMT+02:00) Eastern European Standard Time - Kaliningrad',
    i18n: {
      label_pt: '(GMT+02:00) Hora padrão da Europa Oriental - Caliningrado',
      label_pt_br:
        '(GMT+02:00) Horário Padrão da Europa Oriental - Kaliningrado',
      label_es: '(GMT+02:00) Hora estándar de Europa oriental - Kaliningrado',
    },
  },
  {
    value: 'Africa/Tripoli',
    label: '(GMT+02:00) Eastern European Standard Time - Tripoli',
    i18n: {
      label_pt: '(GMT+02:00) Hora padrão da Europa Oriental - Tripoli',
      label_pt_br: '(GMT+02:00) Horário Padrão da Europa Oriental - Trípoli',
      label_es: '(GMT+02:00) Hora estándar de Europa oriental - Trípoli',
    },
  },
  {
    value: 'Africa/Johannesburg',
    label: '(GMT+02:00) South Africa Standard Time',
    i18n: {
      label_pt: '(GMT+02:00) Hora da África do Sul',
      label_pt_br: '(GMT+02:00) Horário da África do Sul',
      label_es: '(GMT+02:00) Hora de Sudáfrica',
    },
  },
  {
    value: 'Antarctica/Troll',
    label: '(GMT+02:00) Troll Time',
    i18n: {
      label_pt: '(GMT+02:00) Hora de Troll',
      label_pt_br: '(GMT+02:00) Horário Troll',
      label_es: '(GMT+02:00) Hora de Troll',
    },
  },
  {
    value: 'Asia/Baghdad',
    label: '(GMT+03:00) Arabian Standard Time - Baghdad',
    i18n: {
      label_pt: '(GMT+03:00) Hora padrão da Arábia - Bagdade',
      label_pt_br: '(GMT+03:00) Horário Padrão da Arábia - Bagdá',
      label_es: '(GMT+03:00) Hora estándar de Arabia - Bagdad',
    },
  },
  {
    value: 'Asia/Qatar',
    label: '(GMT+03:00) Arabian Standard Time - Qatar',
    i18n: {
      label_pt: '(GMT+03:00) Hora padrão da Arábia - Catar',
      label_pt_br: '(GMT+03:00) Horário Padrão da Arábia - Qatar',
      label_es: '(GMT+03:00) Hora estándar de Arabia - Catar',
    },
  },
  {
    value: 'Asia/Riyadh',
    label: '(GMT+03:00) Arabian Standard Time - Riyadh',
    i18n: {
      label_pt: '(GMT+03:00) Hora padrão da Arábia - Riade',
      label_pt_br: '(GMT+03:00) Horário Padrão da Arábia - Riade',
      label_es: '(GMT+03:00) Hora estándar de Arabia - Riad',
    },
  },
  {
    value: 'Africa/Juba',
    label: '(GMT+03:00) East Africa Time - Juba',
    i18n: {
      label_pt: '(GMT+03:00) Hora da África Oriental - Juba',
      label_pt_br: '(GMT+03:00) Horário da África Oriental - Juba',
      label_es: '(GMT+03:00) Hora de África oriental - Juba',
    },
  },
  {
    value: 'Africa/Nairobi',
    label: '(GMT+03:00) East Africa Time - Nairobi',
    i18n: {
      label_pt: '(GMT+03:00) Hora da África Oriental - Nairobi',
      label_pt_br: '(GMT+03:00) Horário da África Oriental - Nairóbi',
      label_es: '(GMT+03:00) Hora de África oriental - Nairobi',
    },
  },
  {
    value: 'Asia/Amman',
    label: '(GMT+03:00) Eastern European Time - Amman',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Amã',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Amã',
      label_es: '(GMT+03:00) Hora de Europa oriental - Ammán',
    },
  },
  {
    value: 'Europe/Athens',
    label: '(GMT+03:00) Eastern European Time - Athens',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Atenas',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Atenas',
      label_es: '(GMT+03:00) Hora de Europa oriental - Atenas',
    },
  },
  {
    value: 'Asia/Beirut',
    label: '(GMT+03:00) Eastern European Time - Beirut',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Beirute',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Beirute',
      label_es: '(GMT+03:00) Hora de Europa oriental - Beirut',
    },
  },
  {
    value: 'Europe/Bucharest',
    label: '(GMT+03:00) Eastern European Time - Bucharest',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Bucareste',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Bucareste',
      label_es: '(GMT+03:00) Hora de Europa oriental - Bucarest',
    },
  },
  {
    value: 'Europe/Chisinau',
    label: '(GMT+03:00) Eastern European Time - Chisinau',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Chisinau',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Chisinau',
      label_es: '(GMT+03:00) Hora de Europa oriental - Chisináu',
    },
  },
  {
    value: 'Asia/Damascus',
    label: '(GMT+03:00) Eastern European Time - Damascus',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Damasco',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Damasco',
      label_es: '(GMT+03:00) Hora de Europa oriental - Damasco',
    },
  },
  {
    value: 'Asia/Gaza',
    label: '(GMT+03:00) Eastern European Time - Gaza',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Gaza',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Gaza',
      label_es: '(GMT+03:00) Hora de Europa oriental - Gaza',
    },
  },
  {
    value: 'Asia/Hebron',
    label: '(GMT+03:00) Eastern European Time - Hebron',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Hebron',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Hebrom',
      label_es: '(GMT+03:00) Hora de Europa oriental - Hebrón',
    },
  },
  {
    value: 'Europe/Helsinki',
    label: '(GMT+03:00) Eastern European Time - Helsinki',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Helsínquia',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Helsinque',
      label_es: '(GMT+03:00) Hora de Europa oriental - Helsinki',
    },
  },
  {
    value: 'Europe/Kiev',
    label: '(GMT+03:00) Eastern European Time - Kiev',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Kiev',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Kiev',
      label_es: '(GMT+03:00) Hora de Europa oriental - Kiev',
    },
  },
  {
    value: 'Asia/Nicosia',
    label: '(GMT+03:00) Eastern European Time - Nicosia',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Nicósia',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Nicósia',
      label_es: '(GMT+03:00) Hora de Europa oriental - Nicosia',
    },
  },
  {
    value: 'Europe/Riga',
    label: '(GMT+03:00) Eastern European Time - Riga',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Riga',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Riga',
      label_es: '(GMT+03:00) Hora de Europa oriental - Riga',
    },
  },
  {
    value: 'Europe/Sofia',
    label: '(GMT+03:00) Eastern European Time - Sofia',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Sófia',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Sófia',
      label_es: '(GMT+03:00) Hora de Europa oriental - Sofía',
    },
  },
  {
    value: 'Europe/Tallinn',
    label: '(GMT+03:00) Eastern European Time - Tallinn',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Tallinn',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Tallinn',
      label_es: '(GMT+03:00) Hora de Europa oriental - Tallin',
    },
  },
  {
    value: 'Europe/Uzhgorod',
    label: '(GMT+03:00) Eastern European Time - Uzhhorod',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Uzhgorod',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Uzhgorod',
      label_es: '(GMT+03:00) Hora de Europa oriental - Úzhgorod',
    },
  },
  {
    value: 'Europe/Vilnius',
    label: '(GMT+03:00) Eastern European Time - Vilnius',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Vilnius',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Vilnius',
      label_es: '(GMT+03:00) Hora de Europa oriental - Vilna',
    },
  },
  {
    value: 'Europe/Zaporozhye',
    label: '(GMT+03:00) Eastern European Time - Zaporozhye',
    i18n: {
      label_pt: '(GMT+03:00) Hora da Europa Oriental - Zaporizhia',
      label_pt_br: '(GMT+03:00) Horário da Europa Oriental - Zaporizhia',
      label_es: '(GMT+03:00) Hora de Europa oriental - Zaporiyia',
    },
  },
  {
    value: 'Asia/Famagusta',
    label: '(GMT+03:00) Famagusta Time',
    i18n: {
      label_pt: '(GMT+03:00) Hora de Famagusta',
      label_pt_br: '(GMT+03:00) Horário Famagusta',
      label_es: '(GMT+03:00) Hora de Famagusta',
    },
  },
  {
    value: 'Asia/Jerusalem',
    label: '(GMT+03:00) Israel Time',
    i18n: {
      label_pt: '(GMT+03:00) Hora de Israel',
      label_pt_br: '(GMT+03:00) Horário de Israel',
      label_es: '(GMT+03:00) Hora de Israel',
    },
  },
  {
    value: 'Europe/Kirov',
    label: '(GMT+03:00) Kirov Time',
    i18n: {
      label_pt: '(GMT+03:00) Hora de Kirov',
      label_pt_br: '(GMT+03:00) Horário Kirov',
      label_es: '(GMT+03:00) Hora de Kírov',
    },
  },
  {
    value: 'Europe/Minsk',
    label: '(GMT+03:00) Moscow Standard Time - Minsk',
    i18n: {
      label_pt: '(GMT+03:00) Hora padrão de Moscovo - Minsk',
      label_pt_br: '(GMT+03:00) Horário Padrão de Moscou - Minsk',
      label_es: '(GMT+03:00) Hora estándar de Moscú - Minsk',
    },
  },
  {
    value: 'Europe/Moscow',
    label: '(GMT+03:00) Moscow Standard Time - Moscow',
    i18n: {
      label_pt: '(GMT+03:00) Hora padrão de Moscovo - Moscovo',
      label_pt_br: '(GMT+03:00) Horário Padrão de Moscou - Moscou',
      label_es: '(GMT+03:00) Hora estándar de Moscú - Moscú',
    },
  },
  {
    value: 'Europe/Simferopol',
    label: '(GMT+03:00) Moscow Standard Time - Simferopol',
    i18n: {
      label_pt: '(GMT+03:00) Hora padrão de Moscovo - Simferopol',
      label_pt_br: '(GMT+03:00) Horário Padrão de Moscou - Simferopol',
      label_es: '(GMT+03:00) Hora estándar de Moscú - Simferópol',
    },
  },
  {
    value: 'Antarctica/Syowa',
    label: '(GMT+03:00) Syowa Time',
    i18n: {
      label_pt: '(GMT+03:00) Hora de Syowa',
      label_pt_br: '(GMT+03:00) Horário de Syowa',
      label_es: '(GMT+03:00) Hora de Syowa',
    },
  },
  {
    value: 'Europe/Istanbul',
    label: '(GMT+03:00) Turkey Time',
    i18n: {
      label_pt: '(GMT+03:00) Hora de Turquia',
      label_pt_br: '(GMT+03:00) Horário Turquia',
      label_es: '(GMT+03:00) Hora de Turquía',
    },
  },
  {
    value: 'Asia/Yerevan',
    label: '(GMT+04:00) Armenia Standard Time',
    i18n: {
      label_pt: '(GMT+04:00) Hora padrão da Arménia',
      label_pt_br: '(GMT+04:00) Horário Padrão da Armênia',
      label_es: '(GMT+04:00) Hora estándar de Armenia',
    },
  },
  {
    value: 'Europe/Astrakhan',
    label: '(GMT+04:00) Astrakhan Time',
    i18n: {
      label_pt: '(GMT+04:00) Hora de Astracã',
      label_pt_br: '(GMT+04:00) Horário Astracã',
      label_es: '(GMT+04:00) Hora de Astracán',
    },
  },
  {
    value: 'Asia/Baku',
    label: '(GMT+04:00) Azerbaijan Standard Time',
    i18n: {
      label_pt: '(GMT+04:00) Hora padrão do Azerbaijão',
      label_pt_br: '(GMT+04:00) Horário Padrão do Arzeibaijão',
      label_es: '(GMT+04:00) Hora estándar de Azerbaiyán',
    },
  },
  {
    value: 'Asia/Tbilisi',
    label: '(GMT+04:00) Georgia Standard Time',
    i18n: {
      label_pt: '(GMT+04:00) Hora padrão da Geórgia',
      label_pt_br: '(GMT+04:00) Horário Padrão da Geórgia',
      label_es: '(GMT+04:00) Hora estándar de Georgia',
    },
  },
  {
    value: 'Asia/Dubai',
    label: '(GMT+04:00) Gulf Standard Time',
    i18n: {
      label_pt: '(GMT+04:00) Hora padrão do Golfo',
      label_pt_br: '(GMT+04:00) Horário do Golfo',
      label_es: '(GMT+04:00) Hora estándar del Golfo',
    },
  },
  {
    value: 'Indian/Mauritius',
    label: '(GMT+04:00) Mauritius Standard Time',
    i18n: {
      label_pt: '(GMT+04:00) Hora padrão da Maurícia',
      label_pt_br: '(GMT+04:00) Horário Padrão de Maurício',
      label_es: '(GMT+04:00) Hora estándar de Mauricio',
    },
  },
  {
    value: 'Indian/Reunion',
    label: '(GMT+04:00) Réunion Time',
    i18n: {
      label_pt: '(GMT+04:00) Hora de Reunião',
      label_pt_br: '(GMT+04:00) Horário de Reunião',
      label_es: '(GMT+04:00) Hora de Reunión',
    },
  },
  {
    value: 'Europe/Samara',
    label: '(GMT+04:00) Samara Standard Time',
    i18n: {
      label_pt: '(GMT+04:00) Hora padrão de Samara',
      label_pt_br: '(GMT+04:00) Horário Padrão de Samara',
      label_es: '(GMT+04:00) Hora estándar de Samara',
    },
  },
  {
    value: 'Europe/Saratov',
    label: '(GMT+04:00) Saratov Time',
    i18n: {
      label_pt: '(GMT+04:00) Hora de Saratov',
      label_pt_br: '(GMT+04:00) Horário Saratov',
      label_es: '(GMT+04:00) Hora de Sarátov',
    },
  },
  {
    value: 'Indian/Mahe',
    label: '(GMT+04:00) Seychelles Time',
    i18n: {
      label_pt: '(GMT+04:00) Hora das Seicheles',
      label_pt_br: '(GMT+04:00) Horário de Seicheles',
      label_es: '(GMT+04:00) Hora de Seychelles',
    },
  },
  {
    value: 'Europe/Ulyanovsk',
    label: '(GMT+04:00) Ulyanovsk Time',
    i18n: {
      label_pt: '(GMT+04:00) Hora de Ulianovsk',
      label_pt_br: '(GMT+04:00) Horário Ulianovsk',
      label_es: '(GMT+04:00) Hora de Uliánovsk',
    },
  },
  {
    value: 'Europe/Volgograd',
    label: '(GMT+04:00) Volgograd Standard Time',
    i18n: {
      label_pt: '(GMT+04:00) Hora padrão de Volgogrado',
      label_pt_br: '(GMT+04:00) Horário Padrão de Volgogrado',
      label_es: '(GMT+04:00) Hora estándar de Volgogrado',
    },
  },
  {
    value: 'Asia/Kabul',
    label: '(GMT+04:30) Afghanistan Time',
    i18n: {
      label_pt: '(GMT+04:30) Hora do Afeganistão',
      label_pt_br: '(GMT+04:30) Horário do Afeganistão',
      label_es: '(GMT+04:30) Hora de Afganistán',
    },
  },
  {
    value: 'Asia/Tehran',
    label: '(GMT+04:30) Iran Time',
    i18n: {
      label_pt: '(GMT+04:30) Hora do Irão',
      label_pt_br: '(GMT+04:30) Horário do Irã',
      label_es: '(GMT+04:30) Hora de Irán',
    },
  },
  {
    value: 'Indian/Kerguelen',
    label: '(GMT+05:00) French Southern & Antarctic Time',
    i18n: {
      label_pt: '(GMT+05:00) Hora das Terras Austrais e Antárcticas Francesas',
      label_pt_br: '(GMT+05:00) Horário da Antártida e do Sul da França',
      label_es:
        '(GMT+05:00) Hora de las Tierras Australes y Antárticas Francesas',
    },
  },
  {
    value: 'Indian/Maldives',
    label: '(GMT+05:00) Maldives Time',
    i18n: {
      label_pt: '(GMT+05:00) Hora das Maldivas',
      label_pt_br: '(GMT+05:00) Horário das Ilhas Maldivas',
      label_es: '(GMT+05:00) Hora de Maldivas',
    },
  },
  {
    value: 'Antarctica/Mawson',
    label: '(GMT+05:00) Mawson Time',
    i18n: {
      label_pt: '(GMT+05:00) Hora de Mawson',
      label_pt_br: '(GMT+05:00) Horário de Mawson',
      label_es: '(GMT+05:00) Hora de Mawson',
    },
  },
  {
    value: 'Asia/Karachi',
    label: '(GMT+05:00) Pakistan Standard Time',
    i18n: {
      label_pt: '(GMT+05:00) Hora padrão do Paquistão',
      label_pt_br: '(GMT+05:00) Horário Padrão do Paquistão',
      label_es: '(GMT+05:00) Hora estándar de Pakistán',
    },
  },
  {
    value: 'Asia/Dushanbe',
    label: '(GMT+05:00) Tajikistan Time',
    i18n: {
      label_pt: '(GMT+05:00) Hora do Tajiquistão',
      label_pt_br: '(GMT+05:00) Horário do Tajiquistão',
      label_es: '(GMT+05:00) Hora de Tayikistán',
    },
  },
  {
    value: 'Asia/Ashgabat',
    label: '(GMT+05:00) Turkmenistan Standard Time',
    i18n: {
      label_pt: '(GMT+05:00) Hora padrão do Turquemenistão',
      label_pt_br: '(GMT+05:00) Horário Padrão do Turcomenistão',
      label_es: '(GMT+05:00) Hora estándar de Turkmenistán',
    },
  },
  {
    value: 'Asia/Samarkand',
    label: '(GMT+05:00) Uzbekistan Standard Time - Samarkand',
    i18n: {
      label_pt: '(GMT+05:00) Hora padrão do Uzbequistão - Samarcanda',
      label_pt_br: '(GMT+05:00) Horário Padrão do Uzbequistão - Samarcanda',
      label_es: '(GMT+05:00) Hora estándar de Uzbekistán - Samarcanda',
    },
  },
  {
    value: 'Asia/Tashkent',
    label: '(GMT+05:00) Uzbekistan Standard Time - Tashkent',
    i18n: {
      label_pt: '(GMT+05:00) Hora padrão do Uzbequistão - Tashkent',
      label_pt_br: '(GMT+05:00) Horário Padrão do Uzbequistão - Tashkent',
      label_es: '(GMT+05:00) Hora estándar de Uzbekistán - Taskent',
    },
  },
  {
    value: 'Asia/Aqtau',
    label: '(GMT+05:00) West Kazakhstan Time - Aqtau',
    i18n: {
      label_pt: '(GMT+05:00) Hora do Cazaquistão Ocidental - Aqtau',
      label_pt_br: '(GMT+05:00) Horário do Casaquistão Ocidental - Aqtau',
      label_es: '(GMT+05:00) Hora de Kazajistán occidental - Aktau',
    },
  },
  {
    value: 'Asia/Aqtobe',
    label: '(GMT+05:00) West Kazakhstan Time - Aqtobe',
    i18n: {
      label_pt: '(GMT+05:00) Hora do Cazaquistão Ocidental - Aqtobe',
      label_pt_br: '(GMT+05:00) Horário do Casaquistão Ocidental - Aqtöbe',
      label_es: '(GMT+05:00) Hora de Kazajistán occidental - Aktobe',
    },
  },
  {
    value: 'Asia/Atyrau',
    label: '(GMT+05:00) West Kazakhstan Time - Atyrau',
    i18n: {
      label_pt: '(GMT+05:00) Hora do Cazaquistão Ocidental - Atyrau',
      label_pt_br: '(GMT+05:00) Horário do Casaquistão Ocidental - Atyrau',
      label_es: '(GMT+05:00) Hora de Kazajistán occidental - Atyrau',
    },
  },
  {
    value: 'Asia/Oral',
    label: '(GMT+05:00) West Kazakhstan Time - Oral',
    i18n: {
      label_pt: '(GMT+05:00) Hora do Cazaquistão Ocidental - Oral',
      label_pt_br: '(GMT+05:00) Horário do Casaquistão Ocidental - Oral',
      label_es: '(GMT+05:00) Hora de Kazajistán occidental - Oral',
    },
  },
  {
    value: 'Asia/Qyzylorda',
    label: '(GMT+05:00) West Kazakhstan Time - Qyzylorda',
    i18n: {
      label_pt: '(GMT+05:00) Hora do Cazaquistão Ocidental - Qyzylorda',
      label_pt_br: '(GMT+05:00) Horário do Casaquistão Ocidental - Qyzylorda',
      label_es: '(GMT+05:00) Hora de Kazajistán occidental - Kyzylorda',
    },
  },
  {
    value: 'Asia/Yekaterinburg',
    label: '(GMT+05:00) Yekaterinburg Standard Time',
    i18n: {
      label_pt: '(GMT+05:00) Hora padrão de Ecaterimburgo',
      label_pt_br: '(GMT+05:00) Horário Padrão de Ecaterimburgo',
      label_es: '(GMT+05:00) Hora estándar de Ekaterimburgo',
    },
  },
  {
    value: 'Asia/Colombo',
    label: '(GMT+05:30) India Standard Time - Colombo',
    i18n: {
      label_pt: '(GMT+05:30) Hora padrão da Índia - Colombo',
      label_pt_br: '(GMT+05:30) Horário Padrão da Índia - Colombo',
      label_es: '(GMT+05:30) Hora estándar de la India - Colombo',
    },
  },
  {
    value: 'Asia/Kolkata',
    label: '(GMT+05:30) India Standard Time - Kolkata',
    i18n: {
      label_pt: '(GMT+05:30) Hora padrão da Índia - Calcutá',
      label_pt_br: '(GMT+05:30) Horário Padrão da Índia - Kolkata',
      label_es: '(GMT+05:30) Hora estándar de la India - Calcuta',
    },
  },
  {
    value: 'Asia/Kathmandu',
    label: '(GMT+05:45) Nepal Time',
    i18n: {
      label_pt: '(GMT+05:45) Hora do Nepal',
      label_pt_br: '(GMT+05:45) Horário do Nepal',
      label_es: '(GMT+05:45) Hora de Nepal',
    },
  },
  {
    value: 'Asia/Dhaka',
    label: '(GMT+06:00) Bangladesh Standard Time',
    i18n: {
      label_pt: '(GMT+06:00) Hora padrão do Bangladeche',
      label_pt_br: '(GMT+06:00) Horário Padrão de Bangladesh',
      label_es: '(GMT+06:00) Hora estándar de Bangladés',
    },
  },
  {
    value: 'Asia/Thimphu',
    label: '(GMT+06:00) Bhutan Time',
    i18n: {
      label_pt: '(GMT+06:00) Hora do Butão',
      label_pt_br: '(GMT+06:00) Horário do Butão',
      label_es: '(GMT+06:00) Hora de Bután',
    },
  },
  {
    value: 'Asia/Almaty',
    label: '(GMT+06:00) East Kazakhstan Time - Almaty',
    i18n: {
      label_pt: '(GMT+06:00) Hora do Cazaquistão Oriental - Almaty',
      label_pt_br: '(GMT+06:00) Horário do Casaquistão Oriental - Almaty',
      label_es: '(GMT+06:00) Hora de Kazajistán oriental - Almaty',
    },
  },
  {
    value: 'Asia/Qostanay',
    label: '(GMT+06:00) East Kazakhstan Time - Kostanay',
    i18n: {
      label_pt: '(GMT+06:00) Hora do Cazaquistão Oriental - Qostanay',
      label_pt_br: '(GMT+06:00) Horário do Casaquistão Oriental - Qostanay',
      label_es: '(GMT+06:00) Hora de Kazajistán oriental - Kostanái',
    },
  },
  {
    value: 'Indian/Chagos',
    label: '(GMT+06:00) Indian Ocean Time',
    i18n: {
      label_pt: '(GMT+06:00) Hora do Oceano Índico',
      label_pt_br: '(GMT+06:00) Horário do Oceano Índico',
      label_es: '(GMT+06:00) Hora del océano Índico',
    },
  },
  {
    value: 'Asia/Bishkek',
    label: '(GMT+06:00) Kyrgyzstan Time',
    i18n: {
      label_pt: '(GMT+06:00) Hora do Quirguistão',
      label_pt_br: '(GMT+06:00) Horário do Quirguistão',
      label_es: '(GMT+06:00) Hora de Kirguistán',
    },
  },
  {
    value: 'Asia/Omsk',
    label: '(GMT+06:00) Omsk Standard Time',
    i18n: {
      label_pt: '(GMT+06:00) Hora padrão de Omsk',
      label_pt_br: '(GMT+06:00) Horário Padrão de Omsk',
      label_es: '(GMT+06:00) Hora estándar de Omsk',
    },
  },
  {
    value: 'Asia/Urumqi',
    label: '(GMT+06:00) Urumqi Time',
    i18n: {
      label_pt: '(GMT+06:00) Hora de Urumqi',
      label_pt_br: '(GMT+06:00) Horário Urumqi',
      label_es: '(GMT+06:00) Hora de Ürümqi',
    },
  },
  {
    value: 'Antarctica/Vostok',
    label: '(GMT+06:00) Vostok Time',
    i18n: {
      label_pt: '(GMT+06:00) Hora de Vostok',
      label_pt_br: '(GMT+06:00) Horário de Vostok',
      label_es: '(GMT+06:00) Hora de Vostok',
    },
  },
  {
    value: 'Indian/Cocos',
    label: '(GMT+06:30) Cocos Islands Time',
    i18n: {
      label_pt: '(GMT+06:30) Hora das Ilhas Cocos',
      label_pt_br: '(GMT+06:30) Horário das Ilhas Coco',
      label_es: '(GMT+06:30) Hora de las Islas Cocos',
    },
  },
  {
    value: 'Asia/Yangon',
    label: '(GMT+06:30) Myanmar Time',
    i18n: {
      label_pt: '(GMT+06:30) Hora de Mianmar',
      label_pt_br: '(GMT+06:30) Horário de Mianmar',
      label_es: '(GMT+06:30) Hora de Myanmar (Birmania)',
    },
  },
  {
    value: 'Asia/Barnaul',
    label: '(GMT+07:00) Barnaul Time',
    i18n: {
      label_pt: '(GMT+07:00) Hora de Barnaul',
      label_pt_br: '(GMT+07:00) Horário Barnaul',
      label_es: '(GMT+07:00) Hora de Barnaúl',
    },
  },
  {
    value: 'Indian/Christmas',
    label: '(GMT+07:00) Christmas Island Time',
    i18n: {
      label_pt: '(GMT+07:00) Hora da Ilha do Natal',
      label_pt_br: '(GMT+07:00) Horário da Ilha Christmas',
      label_es: '(GMT+07:00) Hora de la Isla de Navidad',
    },
  },
  {
    value: 'Antarctica/Davis',
    label: '(GMT+07:00) Davis Time',
    i18n: {
      label_pt: '(GMT+07:00) Hora de Davis',
      label_pt_br: '(GMT+07:00) Horário de Davis',
      label_es: '(GMT+07:00) Hora de Davis',
    },
  },
  {
    value: 'Asia/Hovd',
    label: '(GMT+07:00) Hovd Standard Time',
    i18n: {
      label_pt: '(GMT+07:00) Hora padrão de Hovd',
      label_pt_br: '(GMT+07:00) Horário Padrão de Hovd',
      label_es: '(GMT+07:00) Hora estándar de Hovd',
    },
  },
  {
    value: 'Asia/Bangkok',
    label: '(GMT+07:00) Indochina Time - Bangkok',
    i18n: {
      label_pt: '(GMT+07:00) Hora da Indochina - Banguecoque',
      label_pt_br: '(GMT+07:00) Horário da Indochina - Bangkok',
      label_es: '(GMT+07:00) Hora de Indochina - Bangkok',
    },
  },
  {
    value: 'Asia/Ho_Chi_Minh',
    label: '(GMT+07:00) Indochina Time - Ho Chi Minh City',
    i18n: {
      label_pt: '(GMT+07:00) Hora da Indochina - Cidade de Ho Chi Minh',
      label_pt_br: '(GMT+07:00) Horário da Indochina - Ho Chi Minh',
      label_es: '(GMT+07:00) Hora de Indochina - Ciudad Ho Chi Minh',
    },
  },
  {
    value: 'Asia/Krasnoyarsk',
    label: '(GMT+07:00) Krasnoyarsk Standard Time - Krasnoyarsk',
    i18n: {
      label_pt: '(GMT+07:00) Hora padrão de Krasnoyarsk - Krasnoyarsk',
      label_pt_br: '(GMT+07:00) Horário Padrão de Krasnoyarsk - Krasnoyarsk',
      label_es: '(GMT+07:00) Hora estándar de Krasnoyarsk - Krasnoyarsk',
    },
  },
  {
    value: 'Asia/Novokuznetsk',
    label: '(GMT+07:00) Krasnoyarsk Standard Time - Novokuznetsk',
    i18n: {
      label_pt: '(GMT+07:00) Hora padrão de Krasnoyarsk - Novokuznetsk',
      label_pt_br: '(GMT+07:00) Horário Padrão de Krasnoyarsk - Novokuznetsk',
      label_es: '(GMT+07:00) Hora estándar de Krasnoyarsk - Novokuznetsk',
    },
  },
  {
    value: 'Asia/Novosibirsk',
    label: '(GMT+07:00) Novosibirsk Standard Time',
    i18n: {
      label_pt: '(GMT+07:00) Hora padrão de Novosibirsk',
      label_pt_br: '(GMT+07:00) Horário Padrão de Novosibirsk',
      label_es: '(GMT+07:00) Hora estándar de Novosibirsk',
    },
  },
  {
    value: 'Asia/Tomsk',
    label: '(GMT+07:00) Tomsk Time',
    i18n: {
      label_pt: '(GMT+07:00) Hora de Tomsk',
      label_pt_br: '(GMT+07:00) Horário Tomsk',
      label_es: '(GMT+07:00) Hora de Tomsk',
    },
  },
  {
    value: 'Asia/Jakarta',
    label: '(GMT+07:00) Western Indonesia Time - Jakarta',
    i18n: {
      label_pt: '(GMT+07:00) Hora da Indonésia Ocidental - Jacarta',
      label_pt_br: '(GMT+07:00) Horário da Indonésia Ocidental - Jacarta',
      label_es: '(GMT+07:00) Hora de Indonesia occidental - Yakarta',
    },
  },
  {
    value: 'Asia/Pontianak',
    label: '(GMT+07:00) Western Indonesia Time - Pontianak',
    i18n: {
      label_pt: '(GMT+07:00) Hora da Indonésia Ocidental - Pontianak',
      label_pt_br: '(GMT+07:00) Horário da Indonésia Ocidental - Pontianak',
      label_es: '(GMT+07:00) Hora de Indonesia occidental - Pontianak',
    },
  },
  {
    value: 'Antarctica/Casey',
    label: '(GMT+08:00) Australian Western Standard Time - Casey',
    i18n: {
      label_pt: '(GMT+08:00) Hora padrão da Austrália Ocidental - Casey',
      label_pt_br: '(GMT+08:00) Horário Padrão da Austrália Ocidental - Casey',
      label_es: '(GMT+08:00) Hora estándar de Australia occidental - Casey',
    },
  },
  {
    value: 'Australia/Perth',
    label: '(GMT+08:00) Australian Western Standard Time - Perth',
    i18n: {
      label_pt: '(GMT+08:00) Hora padrão da Austrália Ocidental - Perth',
      label_pt_br: '(GMT+08:00) Horário Padrão da Austrália Ocidental - Perth',
      label_es: '(GMT+08:00) Hora estándar de Australia occidental - Perth',
    },
  },
  {
    value: 'Asia/Brunei',
    label: '(GMT+08:00) Brunei Darussalam Time',
    i18n: {
      label_pt: '(GMT+08:00) Hora do Brunei Darussalam',
      label_pt_br: '(GMT+08:00) Horário de Brunei Darussalam',
      label_es: '(GMT+08:00) Hora de Brunéi',
    },
  },
  {
    value: 'Asia/Makassar',
    label: '(GMT+08:00) Central Indonesia Time',
    i18n: {
      label_pt: '(GMT+08:00) Hora da Indonésia Central',
      label_pt_br: '(GMT+08:00) Horário da Indonésia Central',
      label_es: '(GMT+08:00) Hora de Indonesia central',
    },
  },
  {
    value: 'Asia/Macau',
    label: '(GMT+08:00) China Standard Time - Macao',
    i18n: {
      label_pt: '(GMT+08:00) Hora padrão da China - Macau',
      label_pt_br: '(GMT+08:00) Horário Padrão da China - Macau',
      label_es: '(GMT+08:00) Hora estándar de China - Macao',
    },
  },
  {
    value: 'Asia/Shanghai',
    label: '(GMT+08:00) China Standard Time - Shanghai',
    i18n: {
      label_pt: '(GMT+08:00) Hora padrão da China - Xangai',
      label_pt_br: '(GMT+08:00) Horário Padrão da China - Xangai',
      label_es: '(GMT+08:00) Hora estándar de China - Shanghái',
    },
  },
  {
    value: 'Asia/Choibalsan',
    label: '(GMT+08:00) Choibalsan Standard Time',
    i18n: {
      label_pt: '(GMT+08:00) Hora padrão de Choibalsan',
      label_pt_br: '(GMT+08:00) Horário Padrão de Choibalsan',
      label_es: '(GMT+08:00) Hora estándar de Choibalsan',
    },
  },
  {
    value: 'Asia/Hong_Kong',
    label: '(GMT+08:00) Hong Kong Standard Time',
    i18n: {
      label_pt: '(GMT+08:00) Hora padrão de Hong Kong',
      label_pt_br: '(GMT+08:00) Horário Padrão de Hong Kong',
      label_es: '(GMT+08:00) Hora estándar de Hong Kong',
    },
  },
  {
    value: 'Asia/Irkutsk',
    label: '(GMT+08:00) Irkutsk Standard Time',
    i18n: {
      label_pt: '(GMT+08:00) Hora padrão de Irkutsk',
      label_pt_br: '(GMT+08:00) Horário Padrão de Irkutsk',
      label_es: '(GMT+08:00) Hora estándar de Irkutsk',
    },
  },
  {
    value: 'Asia/Kuala_Lumpur',
    label: '(GMT+08:00) Malaysia Time - Kuala Lumpur',
    i18n: {
      label_pt: '(GMT+08:00) Hora da Malásia - Kuala Lumpur',
      label_pt_br: '(GMT+08:00) Horário da Malásia - Kuala Lampur',
      label_es: '(GMT+08:00) Hora de Malasia - Kuala Lumpur',
    },
  },
  {
    value: 'Asia/Kuching',
    label: '(GMT+08:00) Malaysia Time - Kuching',
    i18n: {
      label_pt: '(GMT+08:00) Hora da Malásia - Kuching',
      label_pt_br: '(GMT+08:00) Horário da Malásia - Kuching',
      label_es: '(GMT+08:00) Hora de Malasia - Kuching',
    },
  },
  {
    value: 'Asia/Manila',
    label: '(GMT+08:00) Philippine Standard Time',
    i18n: {
      label_pt: '(GMT+08:00) Hora padrão das Filipinas',
      label_pt_br: '(GMT+08:00) Horário Padrão das Filipinas',
      label_es: '(GMT+08:00) Hora estándar de Filipinas',
    },
  },
  {
    value: 'Asia/Singapore',
    label: '(GMT+08:00) Singapore Standard Time',
    i18n: {
      label_pt: '(GMT+08:00) Hora padrão de Singapura',
      label_pt_br: '(GMT+08:00) Horário Padrão de Cingapura',
      label_es: '(GMT+08:00) Hora de Singapur',
    },
  },
  {
    value: 'Asia/Taipei',
    label: '(GMT+08:00) Taipei Standard Time',
    i18n: {
      label_pt: '(GMT+08:00) Hora padrão de Taipé',
      label_pt_br: '(GMT+08:00) Horário Padrão de Taipei',
      label_es: '(GMT+08:00) Hora estándar de Taipéi',
    },
  },
  {
    value: 'Asia/Ulaanbaatar',
    label: '(GMT+08:00) Ulaanbaatar Standard Time',
    i18n: {
      label_pt: '(GMT+08:00) Hora padrão de Ulan Bator',
      label_pt_br: '(GMT+08:00) Horário Padrão de Ulan Bator',
      label_es: '(GMT+08:00) Hora estándar de Ulán Bator',
    },
  },
  {
    value: 'Australia/Eucla',
    label: '(GMT+08:45) Australian Central Western Standard Time',
    i18n: {
      label_pt: '(GMT+08:45) Hora padrão da Austrália Central Ocidental',
      label_pt_br: '(GMT+08:45) Horário Padrão da Austrália Centro-Ocidental',
      label_es: '(GMT+08:45) Hora estándar de Australia centroccidental',
    },
  },
  {
    value: 'Asia/Dili',
    label: '(GMT+09:00) East Timor Time',
    i18n: {
      label_pt: '(GMT+09:00) Hora de Timor Leste',
      label_pt_br: '(GMT+09:00) Horário do Timor-Leste',
      label_es: '(GMT+09:00) Hora de Timor Oriental',
    },
  },
  {
    value: 'Asia/Jayapura',
    label: '(GMT+09:00) Eastern Indonesia Time',
    i18n: {
      label_pt: '(GMT+09:00) Hora da Indonésia Oriental',
      label_pt_br: '(GMT+09:00) Horário da Indonésia Oriental',
      label_es: '(GMT+09:00) Hora de Indonesia oriental',
    },
  },
  {
    value: 'Asia/Tokyo',
    label: '(GMT+09:00) Japan Standard Time',
    i18n: {
      label_pt: '(GMT+09:00) Hora padrão do Japão',
      label_pt_br: '(GMT+09:00) Horário Padrão do Japão',
      label_es: '(GMT+09:00) Hora estándar de Japón',
    },
  },
  {
    value: 'Asia/Pyongyang',
    label: '(GMT+09:00) Korean Standard Time - Pyongyang',
    i18n: {
      label_pt: '(GMT+09:00) Hora padrão da Coreia - Pyongyang',
      label_pt_br: '(GMT+09:00) Horário Padrão da Coreia - Pyongyang',
      label_es: '(GMT+09:00) Hora estándar de Corea - Pyongyang',
    },
  },
  {
    value: 'Asia/Seoul',
    label: '(GMT+09:00) Korean Standard Time - Seoul',
    i18n: {
      label_pt: '(GMT+09:00) Hora padrão da Coreia - Seul',
      label_pt_br: '(GMT+09:00) Horário Padrão da Coreia - Seul',
      label_es: '(GMT+09:00) Hora estándar de Corea - Seúl',
    },
  },
  {
    value: 'Pacific/Palau',
    label: '(GMT+09:00) Palau Time',
    i18n: {
      label_pt: '(GMT+09:00) Hora de Palau',
      label_pt_br: '(GMT+09:00) Horário de Palau',
      label_es: '(GMT+09:00) Hora de Palaos',
    },
  },
  {
    value: 'Asia/Chita',
    label: '(GMT+09:00) Yakutsk Standard Time - Chita',
    i18n: {
      label_pt: '(GMT+09:00) Hora padrão de Yakutsk - Chita',
      label_pt_br: '(GMT+09:00) Horário Padrão de Yakutsk - Chita',
      label_es: '(GMT+09:00) Hora estándar de Yakutsk - Chitá',
    },
  },
  {
    value: 'Asia/Khandyga',
    label: '(GMT+09:00) Yakutsk Standard Time - Khandyga',
    i18n: {
      label_pt: '(GMT+09:00) Hora padrão de Yakutsk - Khandyga',
      label_pt_br: '(GMT+09:00) Horário Padrão de Yakutsk - Khandyga',
      label_es: '(GMT+09:00) Hora estándar de Yakutsk - Khandyga',
    },
  },
  {
    value: 'Asia/Yakutsk',
    label: '(GMT+09:00) Yakutsk Standard Time - Yakutsk',
    i18n: {
      label_pt: '(GMT+09:00) Hora padrão de Yakutsk - Yakutsk',
      label_pt_br: '(GMT+09:00) Horário Padrão de Yakutsk - Yakutsk',
      label_es: '(GMT+09:00) Hora estándar de Yakutsk - Yakutsk',
    },
  },
  {
    value: 'Australia/Darwin',
    label: '(GMT+09:30) Australian Central Standard Time',
    i18n: {
      label_pt: '(GMT+09:30) Hora padrão da Austrália Central',
      label_pt_br: '(GMT+09:30) Horário Padrão da Austrália Central',
      label_es: '(GMT+09:30) Hora estándar de Australia central',
    },
  },
  {
    value: 'Australia/Adelaide',
    label: '(GMT+09:30) Central Australia Time - Adelaide',
    i18n: {
      label_pt: '(GMT+09:30) Hora da Austrália Central - Adelaide',
      label_pt_br: '(GMT+09:30) Horário da Austrália Central - Adelaide',
      label_es: '(GMT+09:30) Hora de Australia central - Adelaida',
    },
  },
  {
    value: 'Australia/Broken_Hill',
    label: '(GMT+09:30) Central Australia Time - Broken Hill',
    i18n: {
      label_pt: '(GMT+09:30) Hora da Austrália Central - Broken Hill',
      label_pt_br: '(GMT+09:30) Horário da Austrália Central - Broken Hill',
      label_es: '(GMT+09:30) Hora de Australia central - Broken Hill',
    },
  },
  {
    value: 'Australia/Brisbane',
    label: '(GMT+10:00) Australian Eastern Standard Time - Brisbane',
    i18n: {
      label_pt: '(GMT+10:00) Hora padrão da Austrália Oriental - Brisbane',
      label_pt_br:
        '(GMT+10:00) Horário Padrão da Austrália Oriental - Brisbane',
      label_es: '(GMT+10:00) Hora estándar de Australia oriental - Brisbane',
    },
  },
  {
    value: 'Australia/Lindeman',
    label: '(GMT+10:00) Australian Eastern Standard Time - Lindeman',
    i18n: {
      label_pt: '(GMT+10:00) Hora padrão da Austrália Oriental - Lindeman',
      label_pt_br:
        '(GMT+10:00) Horário Padrão da Austrália Oriental - Lindeman',
      label_es: '(GMT+10:00) Hora estándar de Australia oriental - Lindeman',
    },
  },
  {
    value: 'Pacific/Guam',
    label: '(GMT+10:00) Chamorro Standard Time',
    i18n: {
      label_pt: '(GMT+10:00) Hora padrão de Chamorro',
      label_pt_br: '(GMT+10:00) Horário de Chamorro',
      label_es: '(GMT+10:00) Hora estándar de Chamorro',
    },
  },
  {
    value: 'Pacific/Chuuk',
    label: '(GMT+10:00) Chuuk Time',
    i18n: {
      label_pt: '(GMT+10:00) Hora de Chuuk',
      label_pt_br: '(GMT+10:00) Horário de Chuuk',
      label_es: '(GMT+10:00) Hora de Chuuk',
    },
  },
  {
    value: 'Antarctica/DumontDUrville',
    label: '(GMT+10:00) Dumont-d’Urville Time',
    i18n: {
      label_pt: '(GMT+10:00) Hora de Dumont-d’Urville',
      label_pt_br: '(GMT+10:00) Horário de Dumont-d’Urville',
      label_es: '(GMT+10:00) Hora de Dumont-d’Urville',
    },
  },
  {
    value: 'Australia/Currie',
    label: '(GMT+10:00) Eastern Australia Time - Currie',
    i18n: {
      label_pt: '(GMT+10:00) Hora da Austrália Oriental - Currie',
      label_pt_br: '(GMT+10:00) Horário da Austrália Oriental - Currie',
      label_es: '(GMT+10:00) Hora de Australia oriental - Currie',
    },
  },
  {
    value: 'Australia/Hobart',
    label: '(GMT+10:00) Eastern Australia Time - Hobart',
    i18n: {
      label_pt: '(GMT+10:00) Hora da Austrália Oriental - Hobart',
      label_pt_br: '(GMT+10:00) Horário da Austrália Oriental - Hobart',
      label_es: '(GMT+10:00) Hora de Australia oriental - Hobart',
    },
  },
  {
    value: 'Australia/Melbourne',
    label: '(GMT+10:00) Eastern Australia Time - Melbourne',
    i18n: {
      label_pt: '(GMT+10:00) Hora da Austrália Oriental - Melbourne',
      label_pt_br: '(GMT+10:00) Horário da Austrália Oriental - Melbourne',
      label_es: '(GMT+10:00) Hora de Australia oriental - Melbourne',
    },
  },
  {
    value: 'Australia/Sydney',
    label: '(GMT+10:00) Eastern Australia Time - Sydney',
    i18n: {
      label_pt: '(GMT+10:00) Hora da Austrália Oriental - Sydney',
      label_pt_br: '(GMT+10:00) Horário da Austrália Oriental - Sydney',
      label_es: '(GMT+10:00) Hora de Australia oriental - Sídney',
    },
  },
  {
    value: 'Pacific/Port_Moresby',
    label: '(GMT+10:00) Papua New Guinea Time',
    i18n: {
      label_pt: '(GMT+10:00) Hora de Papua Nova Guiné',
      label_pt_br: '(GMT+10:00) Horário de Papua Nova Guiné',
      label_es: '(GMT+10:00) Hora de Papúa Nueva Guinea',
    },
  },
  {
    value: 'Asia/Ust-Nera',
    label: '(GMT+10:00) Vladivostok Standard Time - Ust-Nera',
    i18n: {
      label_pt: '(GMT+10:00) Hora padrão de Vladivostok - Ust-Nera',
      label_pt_br: '(GMT+10:00) Horário Padrão de Vladivostok - Ust-Nera',
      label_es: '(GMT+10:00) Hora estándar de Vladivostok - Ust-Nera',
    },
  },
  {
    value: 'Asia/Vladivostok',
    label: '(GMT+10:00) Vladivostok Standard Time - Vladivostok',
    i18n: {
      label_pt: '(GMT+10:00) Hora padrão de Vladivostok - Vladivostok',
      label_pt_br: '(GMT+10:00) Horário Padrão de Vladivostok - Vladivostok',
      label_es: '(GMT+10:00) Hora estándar de Vladivostok - Vladivostok',
    },
  },
  {
    value: 'Australia/Lord_Howe',
    label: '(GMT+10:30) Lord Howe Time',
    i18n: {
      label_pt: '(GMT+10:30) Hora de Lord Howe',
      label_pt_br: '(GMT+10:30) Horário de Lord Howe',
      label_es: '(GMT+10:30) Hora de Lord Howe',
    },
  },
  {
    value: 'Pacific/Bougainville',
    label: '(GMT+11:00) Bougainville Time',
    i18n: {
      label_pt: '(GMT+11:00) Hora de Bougainville',
      label_pt_br: '(GMT+11:00) Horário Bougainville',
      label_es: '(GMT+11:00) Hora de Bougainville',
    },
  },
  {
    value: 'Pacific/Kosrae',
    label: '(GMT+11:00) Kosrae Time',
    i18n: {
      label_pt: '(GMT+11:00) Hora de Kosrae',
      label_pt_br: '(GMT+11:00) Horário de Kosrae',
      label_es: '(GMT+11:00) Hora de Kosrae',
    },
  },
  {
    value: 'Antarctica/Macquarie',
    label: '(GMT+11:00) Macquarie Island Time',
    i18n: {
      label_pt: '(GMT+11:00) Hora da Ilha Macquarie',
      label_pt_br: '(GMT+11:00) Horário da Ilha Macquarie',
      label_es: '(GMT+11:00) Hora de la isla Macquarie',
    },
  },
  {
    value: 'Asia/Magadan',
    label: '(GMT+11:00) Magadan Standard Time',
    i18n: {
      label_pt: '(GMT+11:00) Hora padrão de Magadan',
      label_pt_br: '(GMT+11:00) Horário Padrão de Magadan',
      label_es: '(GMT+11:00) Hora estándar de Magadán',
    },
  },
  {
    value: 'Pacific/Noumea',
    label: '(GMT+11:00) New Caledonia Standard Time',
    i18n: {
      label_pt: '(GMT+11:00) Hora padrão da Nova Caledónia',
      label_pt_br: '(GMT+11:00) Horário Padrão da Nova Caledônia',
      label_es: '(GMT+11:00) Hora estándar de Nueva Caledonia',
    },
  },
  {
    value: 'Pacific/Norfolk',
    label: '(GMT+11:00) Norfolk Island Time',
    i18n: {
      label_pt: '(GMT+11:00) Hora da Ilha Norfolk',
      label_pt_br: '(GMT+11:00) Horário da Ilha Norfolk',
      label_es: '(GMT+11:00) Hora de la isla Norfolk',
    },
  },
  {
    value: 'Pacific/Pohnpei',
    label: '(GMT+11:00) Ponape Time',
    i18n: {
      label_pt: '(GMT+11:00) Hora de Ponape',
      label_pt_br: '(GMT+11:00) Horário de Ponape',
      label_es: '(GMT+11:00) Hora de Pohnpei',
    },
  },
  {
    value: 'Asia/Sakhalin',
    label: '(GMT+11:00) Sakhalin Standard Time',
    i18n: {
      label_pt: '(GMT+11:00) Hora padrão de Sacalina',
      label_pt_br: '(GMT+11:00) Horário Padrão de Sacalina',
      label_es: '(GMT+11:00) Hora estándar de Sajalín',
    },
  },
  {
    value: 'Pacific/Guadalcanal',
    label: '(GMT+11:00) Solomon Islands Time',
    i18n: {
      label_pt: '(GMT+11:00) Hora das Ilhas Salomão',
      label_pt_br: '(GMT+11:00) Horário das Ilhas Salomão',
      label_es: '(GMT+11:00) Hora de las Islas Salomón',
    },
  },
  {
    value: 'Asia/Srednekolymsk',
    label: '(GMT+11:00) Srednekolymsk Time',
    i18n: {
      label_pt: '(GMT+11:00) Hora de Srednekolymsk',
      label_pt_br: '(GMT+11:00) Horário Srednekolymsk',
      label_es: '(GMT+11:00) Hora de Srednekolimsk',
    },
  },
  {
    value: 'Pacific/Efate',
    label: '(GMT+11:00) Vanuatu Standard Time',
    i18n: {
      label_pt: '(GMT+11:00) Hora padrão do Vanuatu',
      label_pt_br: '(GMT+11:00) Horário Padrão de Vanuatu',
      label_es: '(GMT+11:00) Hora estándar de Vanuatu',
    },
  },
  {
    value: 'Asia/Anadyr',
    label: '(GMT+12:00) Anadyr Standard Time',
    i18n: {
      label_pt: '(GMT+12:00) Hora padrão de Anadyr',
      label_pt_br: '(GMT+12:00) Horário Padrão do Anadyr',
      label_es: '(GMT+12:00) Hora estándar de Anadyr',
    },
  },
  {
    value: 'Pacific/Fiji',
    label: '(GMT+12:00) Fiji Time',
    i18n: {
      label_pt: '(GMT+12:00) Hora de Fiji',
      label_pt_br: '(GMT+12:00) Horário de Fiji',
      label_es: '(GMT+12:00) Hora de Fiyi',
    },
  },
  {
    value: 'Pacific/Tarawa',
    label: '(GMT+12:00) Gilbert Islands Time',
    i18n: {
      label_pt: '(GMT+12:00) Hora das Ilhas Gilbert',
      label_pt_br: '(GMT+12:00) Horário das Ilhas Gilberto',
      label_es: '(GMT+12:00) Hora de las islas Gilbert',
    },
  },
  {
    value: 'Pacific/Kwajalein',
    label: '(GMT+12:00) Marshall Islands Time - Kwajalein',
    i18n: {
      label_pt: '(GMT+12:00) Hora das Ilhas Marshall - Kwajalein',
      label_pt_br: '(GMT+12:00) Horário das Ilhas Marshall - Kwajalein',
      label_es: '(GMT+12:00) Hora de las Islas Marshall - Kwajalein',
    },
  },
  {
    value: 'Pacific/Majuro',
    label: '(GMT+12:00) Marshall Islands Time - Majuro',
    i18n: {
      label_pt: '(GMT+12:00) Hora das Ilhas Marshall - Majuro',
      label_pt_br: '(GMT+12:00) Horário das Ilhas Marshall - Majuro',
      label_es: '(GMT+12:00) Hora de las Islas Marshall - Majuro',
    },
  },
  {
    value: 'Pacific/Nauru',
    label: '(GMT+12:00) Nauru Time',
    i18n: {
      label_pt: '(GMT+12:00) Hora de Nauru',
      label_pt_br: '(GMT+12:00) Horário de Nauru',
      label_es: '(GMT+12:00) Hora de Nauru',
    },
  },
  {
    value: 'Pacific/Auckland',
    label: '(GMT+12:00) New Zealand Time',
    i18n: {
      label_pt: '(GMT+12:00) Hora da Nova Zelândia',
      label_pt_br: '(GMT+12:00) Horário da Nova Zelândia',
      label_es: '(GMT+12:00) Hora de Nueva Zelanda',
    },
  },
  {
    value: 'Asia/Kamchatka',
    label: '(GMT+12:00) Petropavlovsk-Kamchatski Standard Time',
    i18n: {
      label_pt: '(GMT+12:00) Hora padrão de Petropavlovsk-Kamchatski',
      label_pt_br: '(GMT+12:00) Horário Padrão de Petropavlovsk-Kamchatski',
      label_es: '(GMT+12:00) Hora estándar de Kamchatka',
    },
  },
  {
    value: 'Pacific/Funafuti',
    label: '(GMT+12:00) Tuvalu Time',
    i18n: {
      label_pt: '(GMT+12:00) Hora de Tuvalu',
      label_pt_br: '(GMT+12:00) Horário de Tuvalu',
      label_es: '(GMT+12:00) Hora de Tuvalu',
    },
  },
  {
    value: 'Pacific/Wake',
    label: '(GMT+12:00) Wake Island Time',
    i18n: {
      label_pt: '(GMT+12:00) Hora da Ilha Wake',
      label_pt_br: '(GMT+12:00) Horário das Ilhas Wake',
      label_es: '(GMT+12:00) Hora de la isla Wake',
    },
  },
  {
    value: 'Pacific/Wallis',
    label: '(GMT+12:00) Wallis & Futuna Time',
    i18n: {
      label_pt: '(GMT+12:00) Hora de Wallis e Futuna',
      label_pt_br: '(GMT+12:00) Horário de Wallis e Futuna',
      label_es: '(GMT+12:00) Hora de Wallis y Futuna',
    },
  },
  {
    value: 'Pacific/Chatham',
    label: '(GMT+12:45) Chatham Time',
    i18n: {
      label_pt: '(GMT+12:45) Hora de Chatham',
      label_pt_br: '(GMT+12:45) Horário de Chatham',
      label_es: '(GMT+12:45) Hora de Chatham',
    },
  },
  {
    value: 'Pacific/Apia',
    label: '(GMT+13:00) Apia Time',
    i18n: {
      label_pt: '(GMT+13:00) Hora de Apia',
      label_pt_br: '(GMT+13:00) Horário de Apia',
      label_es: '(GMT+13:00) Hora de Apia',
    },
  },
  {
    value: 'Pacific/Enderbury',
    label: '(GMT+13:00) Phoenix Islands Time',
    i18n: {
      label_pt: '(GMT+13:00) Hora das Ilhas Fénix',
      label_pt_br: '(GMT+13:00) Horário das Ilhas Fênix',
      label_es: '(GMT+13:00) Hora de las Islas Fénix',
    },
  },
  {
    value: 'Pacific/Fakaofo',
    label: '(GMT+13:00) Tokelau Time',
    i18n: {
      label_pt: '(GMT+13:00) Hora de Tokelau',
      label_pt_br: '(GMT+13:00) Horário de Tokelau',
      label_es: '(GMT+13:00) Hora de Tokelau',
    },
  },
  {
    value: 'Pacific/Tongatapu',
    label: '(GMT+13:00) Tonga Standard Time',
    i18n: {
      label_pt: '(GMT+13:00) Hora padrão de Tonga',
      label_pt_br: '(GMT+13:00) Horário Padrão de Tonga',
      label_es: '(GMT+13:00) Hora estándar de Tonga',
    },
  },
  {
    value: 'Pacific/Kiritimati',
    label: '(GMT+14:00) Line Islands Time',
    i18n: {
      label_pt: '(GMT+14:00) Hora das Ilhas Line',
      label_pt_br: '(GMT+14:00) Horário das Ilhas Line',
      label_es: '(GMT+14:00) Hora de las Espóradas Ecuatoriales',
    },
  },
];

export const GENDER_OPTIONS = [
  {value: 'M', label: makeTrans('Male')},
  {value: 'F', label: makeTrans('Female')},
];
