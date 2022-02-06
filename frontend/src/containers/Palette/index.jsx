import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Tone from '../../model/Tone'
import styleSheet from './style';
const useStyles = makeStyles(styleSheet);

const palette = [
  new Tone({ r: 147, g: 47, b: 109, hex: '#932f6d', }),
  new Tone({ r: 224, g: 123, b: 224, hex: '#e07be0', }),
  new Tone({ r: 220, g: 204, b: 255, hex: '#dcccff', }),
]

const Palette = () => {
  const classes = useStyles();
  console.log(palette);
  return (
    <div className={classes.paletteGrid}>
      {
        palette.map((tone, index) => (
          <div key={`tone-${index}`} className={classes.toneGrid}>
            {
              tone.grid.flatMap((row, rowIndex) => (
                row.map((hex, colIndex) => (
                  <div key={hex} style={{ backgroundColor: hex, }}></div>
                ))
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

export default Palette;