export default (theme) => ({
  paletteGrid: {
    display: 'flex',
    gap: 16,
  },
  toneGrid: {
    display: 'grid',
    flexGrow: 1,
    gridTemplateRows: 'repeat(11, 1fr)',
    gridTemplateColumns: 'repeat(11, 1fr)',
    aspectRatio: '1 / 1'
  },
});