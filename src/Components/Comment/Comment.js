import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginTop: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 15,
  },
  image: {
    borderRadius: '100%',
    height: 80,
    width: 80,
  },
});

export default function Comment({ comment, imgSrc }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <img className={classes.image} src={imgSrc} alt="" />
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {comment.name}
        </Typography>
        <Typography className={classes.pos} color="secondary">
          {comment.email}
        </Typography>
        <Typography variant="body2" component="p">
          {comment.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
