import * as React from 'react';
import { Grid } from '@material-ui/core';
import Search from './search';
import Topiclist from './topiclist';
class Explore extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Search />
        </Grid>
        <Grid item xs={12}>
          <Topiclist />
        </Grid>
      </Grid>
    );
  }
}

export default Explore;
