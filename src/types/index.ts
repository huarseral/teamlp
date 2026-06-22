export interface Course {
  id: string
  tag: string
  emoji: string
  name: string
  description: string
  price: string
  bannerClass: string
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface Stat {
  num: string
  label: string
  icon: string
}

export interface LeadFormData {
  nombres: string
  apellidos: string
  pais: string
  celular: string
  curso: string
}

export interface Country {
  code: string
  flag: string
  name: string
  dialCode: string
}
