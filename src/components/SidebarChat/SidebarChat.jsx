import { Avatar } from "@mui/material";
import NewChat from "../NewChat/NewChat";
import { useEffect, useState } from "react";
import "./sidebarChat.css";

const SidebarChat = ({
  socket,
  room,
  setRoom,
  userName,
  showChat,
  setUserName,
  setShowChat,
}) => {
  const [string, setString] = useState();

  useEffect(() => {
    setString(Math.floor(Math.random() * 5000));
  }, []);

  return showChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${string}.svg`} />
      <div className="sidebarChat_Info">
        <p>Chat Room</p>
        <span>Last Message...</span>
      </div>
    </div>
  ) : (
    <div className="sidebarChat">
      <NewChat
        room={room}
        socket={socket}
        setRoom={setRoom}
        userName={userName}
        setUserName={setUserName}
        setShowChat={setShowChat}
      />
    </div>
  );
};

export default SidebarChat;
