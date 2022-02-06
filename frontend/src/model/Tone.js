import Color from 'color'

class Tone {
  constructor({r, g, b, hex}) {
    this.hex = hex;
    this.r = r;
    this.g = g;
    this.b = b;

    const color = Color.rgb(r, g, b);
    this.color = color;
    
    const [h, s, l] = color.hsl().array();
    this.h = h;
    this.s = s;
    this.l = l;
    this.grid = this.getColorGrid();
  }

  static DISTANCE_S = 10;
  static DISTANCE_L = 10;


  getColorGrid = () => {
    const grid = new Array(11).fill(0).map(() => new Array(11));
    console.log(grid);
    const { coordS, coordL, } = this.getOriginalCoord();
    console.log(coordS, coordL);
    grid[coordL][coordS] = this.hex;
    for (let row = 0; row < 11; row ++) {
      for (let col = 0; col < 11; col ++) {
        grid[row][col] = Color.hsl(this.h, this.s + (col - coordS) * Tone.DISTANCE_S, this.l + (row - coordL) * Tone.DISTANCE_L).hex();
      }
    }

    return grid;
  }

  getOriginalCoord = () => {
    const offsetS = this.s - 50;
    const offsetL = this.l - 50;
    
    const coordS = offsetS ? Math.floor(offsetS/Tone.DISTANCE_S) : Math.ceil(offsetS/Tone.DISTANCE_S);
    const coordL = offsetL ? Math.floor(offsetL/Tone.DISTANCE_L) : Math.ceil(offsetL/Tone.DISTANCE_L);
    return {coordS: coordS + 5, coordL: coordL + 5};
  }
}

export default Tone;