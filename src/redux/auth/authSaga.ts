import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, put, take, takeEvery } from 'redux-saga/effects';
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

function* loginWatcher() {
  try {
    const action: PayloadAction<LoginRequest> = yield take(
      authActions.login.type
    );
    yield call(handleLogin, action.payload);
  } catch (error: any) {
    yield take(authActions.loginFailed.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield takeEvery(authActions.login.type, loginWatcher);
}
