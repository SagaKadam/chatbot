import React from "react";
import SendMessage from "../SendMessage/SendMessage";
import "../Messenger/Messenger.css";

const Message = ({ text, user, self }) => {
  return (
    <div className={"message" + (self ? "message-self" : "")}>
      <div className="message-user">{user}</div>
      <div className="message-text">{text}</div>
    </div>
  );
};

class Messenger extends React.Component {
  constructor(props) {
    super(props);

    this.messageWindow = React.createRef();
  }

  componentDidUpdate() {
    const messageWindow = this.messageWindow.current;
    messageWindow.scrollTop =
      messageWindow.scrollHeight - messageWindow.clientHeight;
  }

  render() {
    const { messages = [], user } = this.props;
    return (
      <>
          <div className="message-window" ref={this.messageWindow}>
            {messages.map((msg, i) => {
              return (
                <Message
                  key={i}
                  text={msg.text}
                  username={msg.user}
                  self={user === msg.user}
                />
              );
            })}
          <SendMessage />
        </div>
      </>
    );
  }
}

export default Messenger;
