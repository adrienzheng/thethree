import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import styleSheet from './style';

const useStyles = makeStyles(styleSheet);
const Nav = () => {
  const classes = useStyles();
  return (
    <Box
      display='flex'
      alignItems='center'
    >
      <Box>
        <Typography>The Three Tones</Typography>
      </Box>
      <Box ml='auto'>
        <Typography>About</Typography>
      </Box>
      <Box ml={2}>
        <Typography>Create</Typography>
      </Box>
      <Box ml={2}>
        <Typography>Archives</Typography>
      </Box>
      <Box ml={2}>
        <Typography>Explore</Typography>
      </Box>
    </Box>
  )
};

export default Nav;