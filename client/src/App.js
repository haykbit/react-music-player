import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home-page" exact component={Navbar} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
