import * as React from 'react';
import './Loading.css';
import LoadingGif from './loading.gif';

const Loader = () => (
  <div className="container">
    <div className="inner-container">
      <div className="loading-qoutes">
        <div className="main-tag">
          <blockquote>
            “Information is not knowledge.”
            <footer>― Albert Einstein</footer>
          </blockquote>
          <img src={LoadingGif} height="40" width="40" />
        </div>
      </div>
    </div>
  </div>
);

export default Loader;
