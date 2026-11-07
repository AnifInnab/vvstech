// Platshållare – byt ut mot riktiga uppgifter innan lansering
export const company = {
  name: 'VVS tech',
  legalName: 'VVS tech AB',
  tagline: 'Teknik för hållbara inomhusmiljöer',
  phone: '040-XXX XX XX',
  phoneHref: 'tel:+4640XXXXXXX',
  emergencyPhone: '070-XXX XX XX',
  emergencyPhoneHref: 'tel:+4670XXXXXXX',
  email: 'info@vvstech.se',
  quoteEmail: 'offert@vvstech.se',
  address: {
    street: 'Exempelgatan 12',
    postalCode: '211 00',
    city: 'Malmö',
  },
  orgNumber: 'XXXXXX-XXXX',
  serviceArea: 'Malmö, Lund och hela Skåne',
  hours: {
    weekdays: 'Mån–fre 07.00–16.00',
    emergency: 'Jour dygnet runt, alla dagar',
  },
  founded: 2012,
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
} as const

export const trustBadges = [
  { label: 'Säker Vatten', sub: 'Auktoriserat VVS-företag' },
  { label: 'ROT-avdrag', sub: 'Vi sköter ansökan' },
  { label: 'F-skatt & försäkring', sub: 'Trygg entreprenad' },
  { label: 'Jour 24/7', sub: 'Vid akuta problem' },
]
