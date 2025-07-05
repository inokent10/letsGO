import { Country } from './country.interface';

export interface User {
  id: string;
  name: string;
  countries: Country[];
  transport: string[];
  music: string[];
  meal: string;
  hobby: string[];
  level: number;
  tags: string[];
  likes: number;
  isLiked: boolean;
  isOnline: boolean;
  avatar: string;
}
