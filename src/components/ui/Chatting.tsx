import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const socket = io("http://localhost:3001/"); // Connect to backend server

export default function Chatting() {
  const [message, setMessage] = useState<any>("");
  const [messages, setMessages] = useState<any[]>([]);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
    });
  }, []);

  useEffect(() => {
    socket.on("receive_message", (data, userId) => {
      console.log("receive_message event in frontend Message Received: ", data)
      setMessages((prev) => {return [...prev, {message:data, userId:userId}]});
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", message, socket.id);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center p-4 w-full max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <div className="h-64 w-full overflow-y-auto border p-2 bg-white rounded">
        {messages.map((msg, index) => (
          <>
            <p key={index} className="p-1 mt-5 bg-gray-200 rounded my-1">{msg.message}</p>
            <p key={index} className="text-[10px] text-red-500">{msg.userId}</p>
          </>
        ))}
      </div>
      <div className="flex w-full gap-2 mt-2">
        <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}