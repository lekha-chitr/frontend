import * as React from 'react';
import Loader from '../../common/Loading';
import { setTimeout } from 'timers';
import Main from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Explore from '../explore';

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
    return !this.state.isLoading ? (
      <React.Fragment>
        <Router>
          <div>
            <Route path="/" exact component={Main} />
            <Route path="/explore" component={Explore} />
          </div>
        </Router>
      </React.Fragment>
    ) : (
      <Loader />
    );
  }
}
export default Home;
