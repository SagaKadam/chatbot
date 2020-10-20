import React, { Component } from "react";
import socketIOClient from "socket.io-client";
class TestSocket extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      response: false,
      endpoint: "http://localhost:4000/"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.emit("Test", {message: 'Hey, Hi Server!'});
  }

   sendMessage = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { response, message } = this.state;
    return (
        <div style={{ textAlign: "center" }}>
              <input type="text" name="message" value={message} onChange={this.sendMessage}></input>
              <p>{message}</p>
        </div>
    );
  }
}
export default TestSocket;