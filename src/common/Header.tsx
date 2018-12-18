import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

export interface IProps {
  classes: any;
  toggle: any;
}

export interface IState {
  openMenu: boolean;
}
class Header extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { classes, toggle } = this.props;
    const Explorelink = (props: any) => <Link to="/explore" {...props} />;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              onClick={toggle(true)}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" color="inherit" className={classes.grow}>
              <Link to="/">Lekha Chitra</Link>
            </Typography>
            <Button color="primary" variant="contained" component={Explorelink}>
              Explore
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
