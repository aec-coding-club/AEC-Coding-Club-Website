import React, { Fragment } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import EventRegister from "./Pages/EventRegister";
import UserRegister from "./Pages/UserRegister";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Container className="mx-3 my-3 text-center">
          <Switch>
            <Route exact path="/">
              <h1 className="display-4 text-center">Home Page</h1>
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
