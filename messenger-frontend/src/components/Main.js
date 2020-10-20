import React from "react";
import { registerOnMessageCallback, send } from "./WebSocket/WebSocket";
import Messenger from "../components/Messenger/Messenger";
import SendMessage from "../components/SendMessage/SendMessage";

class Main extends React.Component {
  state = {
    messages: [],
    user: null
  };

  constructor(props) {
    super(props);

    registerOnMessageCallback(this.onMessageReceived.bind(this));
  }

  onMessageReceived(msg) {
    msg = JSON.parse(msg);
    this.setState({
      messages: this.state.messages.concat(msg)
    });
  }

  setUserName(name) {
    this.setState({
      user: name
    });
  }

  sendMessage(text) {
    const message = {
      user: this.state.user,
      text: text
    };
    console.log(JSON.stringify(message));
    send(JSON.stringify(message));
  }

  render() {
    const setUserName = this.setUserName.bind(this);
    const sendMessage = this.sendMessage.bind(this);

    if (this.state.username === null) {
      return (
        <div className="container">
          <div className="container-title">Enter username</div>
          <SendMessage onSend={setUserName} />
        </div>
      );
    }

    return (
      <>
        <div className="container">
          <Messenger
            messages={this.state.messages}
            username={this.state.user}
          />
          <SendMessage onSend={sendMessage} />
        </div>
      </>
    );
  }
}

export default Main;
