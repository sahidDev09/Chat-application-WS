import { useEffect } from "react";
import { io } from "socket.io-client";

const Chat = () => {
  const socket = io("http://localhost:9000/");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected", socket.id);
    });
  }, [socket]);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Chat;
