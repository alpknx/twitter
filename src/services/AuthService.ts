import { AxiosResponse } from 'axios';
import { $api } from '../api/api';
import { LoginRequest } from '../models/login/LoginRequest';
import { LoginResponse } from '../models/login/LoginResponse';

export default class AuthServiece {
  static async login(
    payload: LoginRequest
  ): Promise<AxiosResponse<LoginResponse>> {
    return $api.post('auth/local', payload);
  }

  static async logout(): Promise<void> {
    return $api.post('auth/local');
  }
}
