import * as React from 'react';
import './explore.css';
import { Grid } from '@material-ui/core';
import ExporeCard from './ExploreCard';
interface IState {
  search: string;
}

class Explore extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      search: ''
    };
  }
  updateSearch(e: any) {
    this.setState({
      search: e.target.value
    });
  }
  render() {
    return (
      <Grid container>
        <Grid
          style={{
            background: '#fafafa',
            paddingTop: '50px',
            paddingBottom: '20px'
          }}
          xs={12}
          direction="row"
          justify="center"
          alignItems="center"
          container
        >
          <input
            type="search"
            name="search"
            placeholder="search.."
            id="search"
            value={this.state.search}
            onChange={event => this.updateSearch(event)}
          />
        </Grid>
        <Grid
          style={{ padding: '20px' }}
          xs={12}
          direction="row"
          justify="space-around"
          alignItems="flex-start"
          container
        >
          <ExporeCard />
        </Grid>
      </Grid>
    );
  }
}

export default Explore;
