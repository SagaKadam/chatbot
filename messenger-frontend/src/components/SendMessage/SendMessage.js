import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../SendMessage/SendMessage.css";

class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();

    // this.sendMessage.bind(this);
    // this.sendMessageIfEnter.bind(this);
  }

  sendMessage() {
    this.props.onSend && this.props.onSend(this.input.current.value);
    this.input.current.value = "";
  }

  sendMessageIfEnter(e) {
    if (e.keyCode === 13) {
      this.sendMessage();
    }
  }

  render() {
    const sendMessage = this.sendMessage.bind(this)
    const sendMessageIfEnter = this.sendMessageIfEnter.bind(this)
    return (
      <div className="input-text">
      <Form
      >
        <Form.Row>
          <Form.Group as={Col} md="10" controlId="handle">
            <Form.Control
              type="text"
              name="message"
              placeholder="Enter the message here.."
              onKeyDown={sendMessageIfEnter}
              ref={this.input}
            />
            <Form.Control.Feedback type="invalid">
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="handle">
            <Button
              type="submit"
              style={{ marginRight: "10px" }}
              onClick={sendMessage}
            >
              Send
            </Button>
          </Form.Group> 
        </Form.Row>
      </Form>
      </div>
    );
  }
}

export default SendMessage;
