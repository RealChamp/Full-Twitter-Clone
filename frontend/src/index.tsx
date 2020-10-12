import React, { StrictMode } from 'react'
import {render} from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import App from './App'
import './index.scss'

render(
  <StrictMode>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);