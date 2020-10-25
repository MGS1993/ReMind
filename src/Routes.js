import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Reminder from './Containers/Reminder';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/reminder" component={Reminder} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;