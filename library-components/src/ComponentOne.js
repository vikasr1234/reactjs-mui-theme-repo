import React from 'react';
import {Card, CardContent, makeStyles, Typography} from 'library-utils';

export default function ComponentOne() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Everything changes
        </Typography>
        <Typography variant="h5" component="h2">
          loaded{bull}from{bull}Library{bull}Components
        </Typography>
        <Typography variant="body2" component="p">
          The entire theme is RESET / overridden by default...
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
