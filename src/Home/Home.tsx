import { Avatar, Card, CardHeader } from '@mui/material';
import { red } from '@mui/material/colors';
import Header from '../Header/Header';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Home = () => {
  const user = useTypedSelector((state) => state.auth.currentUser);
  return (
    <>
      <Header />
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              R
            </Avatar>
          }
          title={`${user?.username}`}
        />
      </Card>
    </>
  );
};

export default Home;
