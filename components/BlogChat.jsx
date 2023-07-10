"use client";

import React, { useEffect, useRef, useState } from "react";
import jwt from "jsonwebtoken";

const websocket_url = "localhost:8000";

export default function BlogChat({ blog_name }) {
  const chatSocket = useRef(null);
  const messageInputRef = useRef(null);
  const [chatLog, setChatLog] = useState("");

  useEffect(() => {
    chatSocket.current = new WebSocket(
      `ws://${websocket_url}/ws/livechat/${blog_name}/`
    );
    chatSocket.current.onmessage = function (e) {
      const data = JSON.parse(e.data);
      const new_message = data["message"];

      // Update the chat log
      setChatLog(
        (prevChatLog) =>
          prevChatLog + new_message.user + ": " + new_message.chat + "\n"
      );
    };

    chatSocket.current.onclose = function (e) {
      console.error("Chat socket closed unexpectedly");
    };

    // Set focus on the message input field
    messageInputRef.current.focus();

    return () => {
      // Clean up WebSocket on unmount
      chatSocket.current.close();
    };
  }, [blog_name]);

  const sendMessage = () => {
    const token = localStorage.getItem("access");
    const userName = jwt.decode(token).username;
    const messageInput = messageInputRef.current;
    const message = messageInput.value;

    // Send the message
    chatSocket.current.send(
      JSON.stringify({
        message: message,
        command: "blog_new_message",
        username: userName,
      })
    );

    // Clear the input field
    messageInput.value = "";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div>
      <div
        id="chat-log"
        style={{
          border: "1px solid",
          minHeight: "200px",
          resize: "none",
          overflowWrap: "break-word",
          direction: "rtl", // Right-to-left direction for the container
          textAlign: "right", // Right-align the text
          padding: "5px",
        }}
      >
        {chatLog.map((message, index) => (
          <div key={index}>
            <span
              style={{
                fontWeight: "bold",
                color: message.isCurrentUser ? "blue" : "black",
              }}
            >
              {message.user}:{" "}
            </span>
            {message.chat}
          </div>
        ))}
      </div>
      <br />
      <input
        id="chat-message-input"
        type="text"
        size="100"
        style={{ border: "1px solid" }}
        ref={messageInputRef}
        onKeyPress={handleKeyPress}
      />
      <br />
      <button id="chat-message-submit" type="submit" onClick={sendMessage}>
        보내기
      </button>
    </div>

  );
}
