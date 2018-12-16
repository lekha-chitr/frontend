import { createMuiTheme } from '@material-ui/core/styles';
import bluegray from '@material-ui/core/colors/blueGrey';
export const theme = createMuiTheme({
  palette: {
    primary: bluegray
  },
  typography: {
    useNextVariants: true
  }
});
