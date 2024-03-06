const { faker } = require('@faker-js/faker');

export function getRandomUser() {
    return {
        email: faker.internet.email(),
        password: faker.internet.password(),
        firstName: faker.person.firstName,
        lastName: faker.person.lastName,
    };
}
