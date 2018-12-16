import * as React from 'react';
import './Loading.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme: any) => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

const Loader = () => (
  <div className="container">
    <div className="main-tag">
      <blockquote>
        “Information is not knowledge.”
        <footer>― Albert Einstein</footer>
      </blockquote>
      <CircularProgress color="inherit" />
    </div>
  </div>
);

export default withStyles(styles)(Loader);
