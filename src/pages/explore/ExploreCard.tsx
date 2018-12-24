import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function SimpleCard(props: any) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          President of India
        </Typography>
        <Typography variant="h5" component="h2">
          Narendra Modi
        </Typography>
        <Typography component="p">
          Lorem, ipsum dolor sit amet consectetur
          <br />
          lorem, ipsum dolor sit amet consectetur
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Explore</Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(SimpleCard);
