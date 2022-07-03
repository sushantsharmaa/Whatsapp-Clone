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
import SendIcon from "@mui/icons-material/Send";

const Chat = ({ socket, room, userName }) => {
  const [string, setString] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    setString(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        room: room,
        author: userName,
        message: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
    });
  }, [socket]);

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
        <p className={`chat-message ${true && "chat-reciever"}`}>
          Hie... <span className="chat-timestamp">8:17 PM</span>
        </p>
        <p className="chat-message">
          Hello... <span className="chat-timestamp">8:18 PM</span>
        </p>
      </div>
      <div className="chat-footer">
        <InsertEmoticon className="icon" />
        <AttachFile className="icon rotate" />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="btn">
            <IconButton onClick={sendMessage}>
              <SendIcon className="icon" />
            </IconButton>
          </div>
        </form>
        <Mic className="icon" />
      </div>
    </div>
  );
};

export default Chat;
