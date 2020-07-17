import React from "react";
import "./Scss/App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Hame";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/blog" component={Blog} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
