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

const Chat = () => {
  const [string, setString] = useState();

  useEffect(() => {
    setString(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${string}.svg`} />
        <div className="chat-headerInfo">
          <p>Sushant</p>
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
          <input type="text" placeholder="Type a message" />
          <button>Send</button>
        </form>
        <Mic className="icon" />
      </div>
    </div>
  );
};

export default Chat;
