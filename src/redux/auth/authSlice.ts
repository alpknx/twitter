import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginRequest } from '../../models/login/LoginRequest';
import { User } from '../../models/User';
import { RootState } from '../store';

export interface AuthError {
  message: string;
}

export interface AuthState {
  isAuth: boolean;
  currentUser?: User;
  isLoading: boolean;
  error: AuthError;
}

export const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  currentUser: undefined,
  error: { message: 'An Error occurred' },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginRequest>) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isAuth = true;
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    loginFailed: (state, action: PayloadAction<AuthError>) => {
      state.error = action.payload;
      state.isAuth = false;
    },
    logout: (state) => {
      state.isAuth = false;
      state.currentUser = undefined;
    },
  },
});

export const authActions = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;
export const authReducer = authSlice.reducer;
