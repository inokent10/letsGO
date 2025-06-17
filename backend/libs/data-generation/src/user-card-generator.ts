import { User } from "interfaces/interfaces";
import { Faker, fakerRU as faker } from '@faker-js/faker';
import { Hobby, Meal, MusicStyle, Vehicle } from "backendSettings/settings";
import { getRandomInteger } from "helpers/helpers";
import { getRanndomElement } from "helpers/helpers/common";

export const userCardGenerator = (cardsCount: number) => {
  const cards: User[] = [];

  for (let i = 0; i < cardsCount; i++) {
    const newUser = genearteUser();
    cards.push(newUser);
  }

  return cards;
};

const genearteUser = (): User => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    countries: [],
    hobby: faker.helpers.arrayElements(Object.values(Hobby), {min: 0, max: 3}),
    transport: faker.helpers.arrayElements(Object.values(Vehicle), {min: 1, max: 4}),
    music: faker.helpers.arrayElements(Object.values(Vehicle), {min: 0, max: 3}),
    meal: getRanndomElement(Object.values(Meal)),
    level: getRandomInteger(1, 100),
    tags: faker.lorem.words({min: 0, max: 3}).split(' '),
    likes: getRandomInteger(1, 9999),
  };
};
