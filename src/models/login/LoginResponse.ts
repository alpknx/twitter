import { User } from '../User';

export interface LoginResponse {
  jwt: string;
  user: User;
}
