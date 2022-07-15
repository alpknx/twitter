import { Button, Grid, Paper, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../redux/auth/authSlice';

const Login: FC = () => {
  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label='Username'
              type={'text'}
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Password'
              type={'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              size='medium'
              variant='contained'
              onClick={() =>
                dispatch(authActions.login({ identifier, password }))
              }
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
