import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import "./sidebarChat.css";

const SidebarChat = ({ addNewChat }) => {
  const [string, setString] = useState();

  useEffect(() => {
    setString(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      // logic
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${string}.svg`} />
      <div className="sidebarChat_Info">
        <p>Sushant</p>
        <span>Last Message...</span>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
