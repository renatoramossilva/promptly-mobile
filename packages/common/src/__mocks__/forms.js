export const VALID_PERSONAL_FORM_DATA = {
  avatar_url:
    'http://192.168.1.81:8000/media/avatar/f5944d0c-a8cb-47bb-8942-d3915383a7f4/7bbf6d53-44fd-43bf-9766-57c0416da6c9.jpg',
  birthdate: '1992-08-25',
  caregiver: {
    name: 'Caregiver',
    phone: '+351911222332',
    relationship: 'Close relative',
    phone_country: 'PT',
  },
  city: 'Braga',
  complementary_info: {marital_status: '1'},
  country: '',
  email: 'type-2-diabetes-cuf-descobertas@email.com',
  gender: 'M',
  name: 'Paciente Diabetes',
  national_id: 'nid123456789',
  nationality: 'pt',
  nhs_id: '123abc456def',
  phone: undefined,
  phone_country: 'PT',
  state: '',
  vat_number: '',
};

export const INVALID_PERSONAL_FORM_DATA = {
  avatar_url:
    'http://192.168.1.81:8000/media/avatar/f5944d0c-a8cb-47bb-8942-d3915383a7f4/7bbf6d53-44fd-43bf-9766-57c0416da6c9.jpg',
  birthdate: '',
  caregiver: {
    name: 'Caregiver',
    phone: '+351911222332',
    relationship: 'Close relative',
    phone_country: 'PT',
  },
  city: 'Braga',
  complementary_info: {marital_status: '1'},
  country: '',
  email: 'type-2-diabetes-cuf-descobertas@email.com',
  gender: '',
  name: 'Paciente Diabetes',
  national_id: 'nid123456789',
  nationality: 'pt',
  nhs_id: '123abc456def',
  phone: undefined,
  phone_country: 'PT',
  state: '',
  vat_number: '',
};
