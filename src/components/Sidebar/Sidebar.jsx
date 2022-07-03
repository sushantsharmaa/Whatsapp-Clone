import {
  Chat,
  DonutLarge,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import SidebarChat from "../SidebarChat/SidebarChat";
import "./sidebar.css";

const Sidebar = ({
  socket,
  room,
  setRoom,
  userName,
  showChat,
  setUserName,
  setShowChat,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar src="https://pps.whatsapp.net/v/t61.24694-24/291320721_1061821714771687_6157602428819755427_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=fe9a7e49535a1f2ad44750962db5ba39&oe=62CE47D8" />
        <div className="sidebar-header-right">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-search-container">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar-chats">
        <SidebarChat
          room={room}
          socket={socket}
          setRoom={setRoom}
          showChat={showChat}
          userName={userName}
          setUserName={setUserName}
          setShowChat={setShowChat}
        />
      </div>
    </div>
  );
};

export default Sidebar;
