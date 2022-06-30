import "./home.css";
import Chat from "../../components/Chat/Chat";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="main">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
