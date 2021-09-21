import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home-page" exact component={Home} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
