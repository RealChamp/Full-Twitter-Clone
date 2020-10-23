import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider,CssBaseline } from '@material-ui/core';
import theme from './theme';
import App from './App';
import './index.scss';

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);
