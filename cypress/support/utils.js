import { faker } from '@faker-js/faker'

export const gerarUsuario = (base) => {

  const birthDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' })

  return {
    ...base,

    name: faker.person.fullName(),
    email: faker.internet.email(),

    birth_date: birthDate.getDate(),
    birth_month: birthDate.getMonth() + 1,
    birth_year: birthDate.getFullYear(),

    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),

    company: faker.company.name(),

    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),

    zipcode: faker.string.numeric(8),
    mobile_number: `859${faker.string.numeric(8)}`
  }
}