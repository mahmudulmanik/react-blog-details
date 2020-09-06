import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

navBar: {fontSize: 20},

});

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
      <h4 className= { classes.navBar }>React Blog Details</h4>
      </Toolbar>
    </AppBar>
  );
}
