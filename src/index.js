import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import theme from './theme';
import registerServiceWorker from './registerServiceWorker';

// Set an initial global state directly:
setGlobal({
  city: '',
});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector('#root'),
);
registerServiceWorker();  // Runs register() as default function
