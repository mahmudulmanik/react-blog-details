import React from 'react';
import Posts from './Components/Posts/Posts';
import { Route, Switch } from 'react-router-dom';
import PostDetails from './Components/PostDetails/PostDetails';
import { Grid } from '@material-ui/core';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xm={12} sm={8}>
          <Switch>
            <Route path="/posts/:id">
              <PostDetails />
            </Route>
            <Route path="/">
              <Posts />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
