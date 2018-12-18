import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import HomeIll from './ill_1.svg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '../../common/Menu';

class Main extends React.Component {
  render() {
    const ExploreLink = (props: any) => <Link to="/explore" {...props} />;
    return (
      <React.Fragment>
        <Menu />
        <Grid container style={{ padding: 50, paddingTop: 64 }}>
          <Grid className="flex h-1" item xs={12} sm={6}>
            <div className="flex flex-column">
              <Typography
                variant="h2"
                style={{
                  fontSize: '4.2rem',
                  fontWeight: 'bold',
                  color: '#211b1bde'
                }}
                noWrap={false}
                gutterBottom={true}
              >
                Lorem, ipsum dolor
              </Typography>
              <Typography
                variant="h5"
                color="default"
                noWrap={false}
                gutterBottom={true}
                paragraph={true}
                style={{ color: '#2b2b2bde', width: '90%' }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                totam doloremque veritatis, facere animi sapiente. Beatae,
                aperiam. Aperiam aliquid qui repudiandae ducimus blanditiis
                voluptas id alias earum, unde error impedit?
              </Typography>
              <Button
                variant="contained"
                size="large"
                component={ExploreLink}
                color="primary"
              >
                Explore
              </Button>
            </div>
          </Grid>
          <Grid className="flex" item xs={12} sm={6}>
            <img className="img-res" src={HomeIll} alt="illustration" />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default Main;
