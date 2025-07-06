import { Country, User } from "interfaces/interfaces";
import { fakerRU as faker } from '@faker-js/faker';
import { Hobby, Meal, MusicStyle, Vehicle } from "backendSettings/settings";
import { getRandomInteger } from "helpers/helpers";
import { getRanndomElement } from "helpers/helpers/common";

export const userCardGenerator = (cardsCount: number, countries: Country[]) => {
  const cards: User[] = [];

  for (let i = 0; i < cardsCount; i++) {
    const newUser = genearteUser(countries);
    cards.push(newUser);
  }

  return cards;
};

const genearteUser = (countries: Country[]): User => {
  const sex = faker.person.sex() as 'female' | 'male';

  return {
    id: faker.string.uuid(),
    name: `${faker.person.firstName(sex)} ${faker.person.lastName(sex)}`,
    countries: faker.helpers.arrayElements(countries, {min: 1, max: 5}),
    hobby: faker.helpers.arrayElements(Object.values(Hobby), {min: 0, max: 3}),
    transport: faker.helpers.arrayElements(Object.values(Vehicle), {min: 1, max: 4}),
    music: faker.helpers.arrayElements(Object.values(MusicStyle), {min: 0, max: 3}),
    meal: getRanndomElement(Object.values(Meal)),
    level: getRandomInteger(1, 100),
    tags: Array.from({length: getRandomInteger(0, 3)}, () => faker.word.noun({length: { min: 3, max: 6 }, strategy: "fail"})),
    likes: getRandomInteger(1, 9999),
    isLiked: faker.datatype.boolean(),
    isOnline: faker.datatype.boolean(),
    avatar: faker.image.personPortrait({sex, size: 512}),
  };
};
