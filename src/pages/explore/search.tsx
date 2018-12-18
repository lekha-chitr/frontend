import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  classes: {}
};

export interface IProps {
  classes: any;
}

class Search extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper
        className="flex"
        elevation={1}
        square={true}
        style={{ height: 64 * 3, width: '100%', backgroundColor: '#fafafa' }}
      >
        <div className="searchbar-container">
          <SearchIcon />
          <input type="text" />
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Search);
