import React from 'react';
import Palette from "./containers/Palette"

const routes = [
  {
    name: 'home',
    props: {
      path: '/',
      element: <Palette />,
    }
  },
  {
    name: 'palette',
    props: {
      path: '/palette/:id',
      element: <Palette />,
    }
  }
];

export default routes;