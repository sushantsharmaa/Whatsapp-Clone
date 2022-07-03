import "./home.css";
import { io } from "socket.io-client";
import Chat from "../../components/Chat/Chat";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";

const socket = io.connect("http://localhost:5000");

const Home = () => {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="main">
      <Sidebar
        room={room}
        socket={socket}
        setRoom={setRoom}
        userName={userName}
        showChat={showChat}
        setUserName={setUserName}
        setShowChat={setShowChat}
      />
      {showChat ? (
        <Chat
          room={room}
          socket={socket}
          setRoom={setRoom}
          userName={userName}
          setUserName={setUserName}
        />
      ) : (
        <div className="chat"></div>
      )}
    </div>
  );
};

export default Home;
