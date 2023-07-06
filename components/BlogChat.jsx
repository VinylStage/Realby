"use client";

import React, { useEffect, useState } from "react";

export default function BlogChat() {
  const [token, setToken] = useState("");
  const [payload, setPayload] = useState([]);

  useEffect(() => {
    tokenObtain();
  }, []);
  const tokenObtain = async function () {
    const token = localStorage.getItem("access");
    const payload = localStorage.getItem("payload");
    setToken(token);
    setPayload(payload);
  };
  const payload_parse = JSON.parse(payload);
  return (
    <div>
      <textarea id="chat-log" cols="102" rows="20" />
      <br />
      <input id="chat-message-input" type="text" size="100" />
      <br />
      <input id="chat-message-submit" type="button" value="보내기"></input>
    </div>
  );
}
