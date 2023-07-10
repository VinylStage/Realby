"use client";

import React, { useEffect, useRef, useState } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

const websocket_url = "www.realbyback.shop";

export default function BlogChat({ blog_name }) {
  const [data, setData] = useState([]);
  const chatSocket = useRef(null);
  const messageInputRef = useRef(null);
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    fetchData();

    chatSocket.current = new WebSocket(
      `wss://${websocket_url}/ws/livechat/${blog_name}/`
    );
    chatSocket.current.onmessage = function (e) {
      const data = JSON.parse(e.data);
      const new_message = data["message"];

      // Update the chat log
      setChatLog((prevChatLog) => [...prevChatLog, new_message]);
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

  const fetchData = async () => {
    try {
      // const token = localStorage.getItem("access");
      const response = await axios.get(
        `https://www.realbyback.shop/blogs/${blog_name}`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(data.user);

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
          padding: "5px",
        }}
      >
        {chatLog.map((message, index) => {
          // console.log(message, index)
          // console.log(message.user, jwt.decode(localStorage.getItem("access")).username)
          // console.log(message.user_id, jwt.decode(localStorage.getItem("access")).user_id)
          const isCurrentUser =
            message.user ===
            jwt.decode(localStorage.getItem("access")).username;
          const isCurrentUserOwner =
            data.user === jwt.decode(localStorage.getItem("access")).user_id;
          const isHighlighted = isCurrentUserOwner && isCurrentUser;
          const backgroundColor = isCurrentUser ? "#e1f5fe" : "#f5f5f5";
          const textColor = isHighlighted ? "red" : "black";

          return (
            <div
              key={index}
              style={{
                backgroundColor: backgroundColor,
                padding: "5px",
                marginBottom: "5px",
                borderRadius: "5px",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: textColor,
                }}
              >
                {message.user}:
              </span>
              <span
                style={{
                  fontWeight: "bold",
                  color: textColor,
                }}
              >
                {" "}
                {message.chat}
              </span>
            </div>
          );
        })}
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
