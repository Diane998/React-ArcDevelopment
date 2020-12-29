import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './ui/Header';
import theme from './ui/Theme';

import { ThemeProvider } from '@material-ui/styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={() => <div>Home</div>} />
        <Route path="/services" exact component={() => <div>Services</div>} />
        <Route
          path="/revolution"
          exact
          component={() => <div>Revolution</div>}
        />
        <Route path="/about" exact component={() => <div>About Us</div>} />
        <Route path="/contact" exact component={() => <div>Contact Us</div>} />
        <Route path="/estimate" exact component={() => <div>Estimate</div>} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
