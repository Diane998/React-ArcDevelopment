import React from 'react';

import Header from './ui/Header';
import theme from './ui/Theme';

import { ThemeProvider } from '@material-ui/styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <Header />
    Hello
  </ThemeProvider>
);

export default App;
