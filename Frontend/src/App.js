import React, { Fragment } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import EventRegister from "./Pages/EventRegister";
import UserRegister from "./Pages/UserRegister";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Container className="mx-3 my-3 text-center">
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/newevent">
              <EventRegister />
            </Route>
            <Route path="/newuser">
              <UserRegister />
            </Route>
          </Switch>
        </Container>
      </Fragment>
    </Router>
  );
};

export default App;
