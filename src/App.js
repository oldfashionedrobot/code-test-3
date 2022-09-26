import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Reviews from "./Components/Reviews";
import WriteReview from "./Components/WriteReview";

export default function OliverTakeHome() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:productId">
            <Reviews />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
