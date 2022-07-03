import "./newChat.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  socket,
  room,
  setRoom,
  userName,
  setUserName,
  setShowChat,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room);
    }
    setShowChat(true);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Join Chat Room</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            className="joinChatContainer"
            sx={{
              mt: 2,
            }}
          >
            <h3>Create Chat Room</h3>
            <input
              type="text"
              placeholder="Name..."
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Room ID..."
              onChange={(e) => setRoom(e.target.value)}
            />
            <button onClick={joinRoom}>Join Room</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
