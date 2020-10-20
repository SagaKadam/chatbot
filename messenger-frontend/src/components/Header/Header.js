import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WelcomePage from "../WelcomePage";
import Home from "../Home/Home";
import Messenger from "../Messenger/Messenger";

class Header extends React.Component {
  render() {
    return (
      <Router>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand as={Link} to="/">TalkDaily</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/messenger">
                Messenger
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/messenger">
            <Messenger />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Header;
