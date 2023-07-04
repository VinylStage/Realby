"use client";

import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

const backendUrl = "http://localhost:8080";

export default function BlogChat({ blog_name: blog_name }) {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [chat, setChat] = useState("");

  useEffect(() => {
    tokenObtain();
  }, []);

  const chatSocket = new WebSocket(
    `ws://${websocket_url}/ws/livechat/${blog_name}/`
  );

  chatSocket.onmessage = function (e) {
    const data = JSON.parse(e.data);
    const new_message = data["message"];
  };

  const tokenObtain = async function () {
    const token = localStorage.getItem("access");
    const userId = jwt.decode(token).user_id;
    setToken(token);
    setUserId(userId);
  };
  return (
    <div>
      <textarea id="chat-log" cols="102" rows="20" value={chatLog} />
      <br />
      <input id="chat-message-input" type="text" size="100" />
      <br />
      <button id="chat-message-submit" type="submit">
        보내기
      </button>
    </div>
  );
}
