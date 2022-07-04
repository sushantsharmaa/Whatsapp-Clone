import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import "./chat.css";
import { v4 as uuidv4 } from "uuid";
import ScrollToBottom from "react-scroll-to-bottom";
import SendIcon from "@mui/icons-material/Send";

const Chat = ({ socket, room, userName }) => {
  const [string, setString] = useState();
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: userName,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  useEffect(() => {
    setString(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${string}.svg`} />
        <div className="chat-headerInfo">
          <p>Chat Room</p>
          <span>Last seen at ...</span>
        </div>
        <div className="chat-headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                key={uuidv4()}
                className="message"
                id={userName === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>
                      {messageContent.message}
                      <span className="chat-timestamp">
                        {messageContent.time}
                      </span>
                    </p>
                  </div>
                  <div className="message-meta">
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <InsertEmoticon className="icon" />
        <AttachFile className="icon rotate" />
        <div className="form">
          <input
            type="text"
            value={currentMessage}
            placeholder="Type a message"
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
        </div>
        <div className="btn">
          <IconButton onClick={sendMessage}>
            <SendIcon className="icon" />
          </IconButton>
        </div>
        <Mic className="icon" />
      </div>
    </div>
  );
};

export default Chat;
