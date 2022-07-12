import { AxiosResponse } from 'axios';
import { $api } from '../api/api';
import { User } from '../models/User';

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<User[]>> {
    return $api.get<User[]>('/api/users');
  }
}
