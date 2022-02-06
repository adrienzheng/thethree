import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import routes from '../routes';

import Nav from '../components/Nav';

const Home = () => {
  return (
    <Box display='flex' flexDirection='column' p={3}>
      <Nav />
      <Routes>
        {
          routes.map(({props}) => <Route {...props} />)
        }
      </Routes>
    </Box>
  );
};

export default Home;