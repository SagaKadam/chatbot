import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../Home/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Join Chat</h1>
            <Form 
            >
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="handle">
                  <Form.Label>User :</Form.Label>
                  <Form.Control
                    type="text"
                    name="handle"
                  />
                  <Form.Control.Feedback type="invalid">
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Button type="submit" style={{ marginRight: "10px" }}>
                Join
              </Button>
            </Form>
      </div>
    );
  }
}

export default Home;
