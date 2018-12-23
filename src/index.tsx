import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './pages';
import { theme } from './styles/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './styles/global.css';

const Root = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Home />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// ServiceWorker
process.env.NODE_ENV === 'production'
  ? serviceWorker.register()
  : serviceWorker.unregister();
