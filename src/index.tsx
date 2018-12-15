import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './home';
import './styles/global.css';
ReactDOM.render(<Home />, document.getElementById('root'));

// ServiceWorker
process.env.NODE_ENV === 'production'
  ? serviceWorker.register()
  : serviceWorker.unregister();
