import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../redux/auth/authSlice';

const Login: FC = () => {
  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  return (
    <div>
      <input
        onChange={(e) => setIdentifier(e.target.value)}
        value={identifier}
        type='text'
        placeholder='Email'
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type='text'
        placeholder='password'
      />
      <button
        onClick={() => dispatch(authActions.login({ identifier, password }))}
      >
        LOGIN
      </button>
    </div>
  );
};

export default Login;
