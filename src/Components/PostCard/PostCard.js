import React from 'react';
import { Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  Button,
  CardActions,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 15,
    marginBottom: 15,
  },
  media: {
    height: 300,
    weight: 300,
  },
  title: {
    fontSize: 40,
  },
  button: { 
    textDecoration: 'none',
  },
});

export default function Comment({ post }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
              className={classes.media}
              image={`https://loremflickr.com/320/240/brazil,rio?random=${
                Math.random() * 10
              }`}
              title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {post.title}
        </Typography>
        <Typography variant="body2" component="p">
          {post.body}
        </Typography>
        <CardActions>
          <Button variant="contained" color="secondary">
            <Link className={classes.button} to={`posts/${post.id}`}>
              Post Details
            </Link>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
