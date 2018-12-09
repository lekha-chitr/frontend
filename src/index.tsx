import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Root from './home/index';
import './styles/global.css';
ReactDOM.render(<Root _id="hello" />, document.getElementById('root'));

// ServiceWorker
process.env.NODE_ENV === 'production'
  ? serviceWorker.register()
  : serviceWorker.unregister();
