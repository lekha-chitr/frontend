import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit">
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
              Lekha Chitra
            </Typography>
            <Button color="inherit">Explore</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
