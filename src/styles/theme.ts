import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
export const theme = createMuiTheme({
  palette: {
    primary: teal
  },
  typography: {
    useNextVariants: true
  }
});
