import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home page
      </Route>
      <Route exact path="/starred">
        this is starred
      </Route>
      {/* Manage unexisting Routes */}
      <Route>Not Found 404</Route>
    </Switch>
  );
}

export default App;
