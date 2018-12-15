import * as React from 'react';
import Loader from '../common/Loading';
import { setTimeout } from 'timers';
import Main from './Home';

interface IState {
  isLoading: boolean;
}
class Home extends React.Component<{}, IState> {
  state: IState = {
    isLoading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 3000);
  }

  render() {
    return !this.state.isLoading ? <Main /> : <Loader />;
  }
}
export default Home;
