import { User } from "interfaces/interfaces";
import { fakerRU as faker } from '@faker-js/faker';

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
    countries: Country[],
    transport: string[],
    music: string[],
    meal: string[],
    level: number,
    tags: string[],
    likes: number,
  };
};
