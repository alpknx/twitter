import { PayloadAction } from '@reduxjs/toolkit';
import { call, cancel, fork, put, take } from 'redux-saga/effects';
import { LoginRequest } from '../../models/login/LoginRequest';
import { LoginResponse } from '../../models/login/LoginResponse';
import AuthServiece from '../../services/AuthService';
import { authActions } from './authSlice';

function* handleLogin(payload: LoginRequest) {
  try {
    const { jwt, user }: LoginResponse = yield call(
      AuthServiece.login,
      payload
    );
    localStorage.setItem('jwt', jwt);
    yield put(authActions.loginSuccess(user));
  } catch (error: any) {
    yield put(authActions.loginFailed(error));
  }
}

function* handleLogout() {
  yield put(authActions.logout());
  localStorage.removeItem('jwt');
}

function* loginFlow() {
  while (true) {
    const action: PayloadAction<LoginRequest> = yield take(
      authActions.login.type
    );
    yield fork(handleLogin, action.payload);
    yield take(authActions.loginFailed.type);
    if (action.type === authActions.loginFailed.type) {
      yield cancel(yield fork(handleLogin, action.payload));
    }
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(loginFlow);
}
