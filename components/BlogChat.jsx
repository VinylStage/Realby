"use client";

import React, { useEffect, useRef, useState } from "react";
import jwt from "jsonwebtoken";

const websocket_url = "http://localhost:8000"


export default function BlogChat({ blog_name }) {
  const chatSocket = useRef(null);
  const messageInputRef = useRef(null);
  const [chatLog, setChatLog] = useState('');

  useEffect(() => {
    chatSocket.current = new WebSocket(`ws://${websocket_url}/ws/livechat/${blog_name}/`);
    chatSocket.current.onmessage = function (e) {
      const data = JSON.parse(e.data);
      const new_message = data['message'];

      // Update the chat log
      setChatLog((prevChatLog) => prevChatLog + new_message.user + ': ' + new_message.chat + '\n');
      console.log(e, data);
    };

    chatSocket.current.onclose = function (e) {
      console.error('Chat socket closed unexpectedly');
    };

    // Set focus on the message input field
    messageInputRef.current.focus();

    return () => {
      // Clean up WebSocket on unmount
      chatSocket.current.close();
    };
  }, [blog_name]);

  const sendMessage = () => {
    const payload = localStorage.getItem('payload');
    const payload_parse = JSON.parse(payload);
    const messageInput = messageInputRef.current;
    const message = messageInput.value;

    // Send the message
    chatSocket.current.send(
      JSON.stringify({
        message: message,
        command: 'blog_new_message',
        username: payload_parse.username,
      })
    );

    // Clear the input field
    messageInput.value = '';
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div>
      <textarea
        id="chat-log"
        cols="101"
        rows="10"
        style={{ border: '1px solid', minHeight: '200px', resize: 'none' }}
        value={chatLog}
        readOnly
      ></textarea>
      <br />
      <input
        id="chat-message-input"
        type="text"
        size="100"
        style={{ border: '1px solid' }}
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