import React from "react";
import "./Scss/App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import NotFound from "./Pages/NotFound";


const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/blog" component={Blog} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" component={NotFound} />
        </Switch>
      </Router>
      
    </>
  );
};

export default App;
