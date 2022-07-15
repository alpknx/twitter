import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { authActions } from '../redux/auth/authSlice';

const Home = () => {
  const user = useTypedSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{user?.username}</div>
      <button onClick={() => dispatch(authActions.logout())}>Logout</button>
    </div>
  );
};

export default Home;
