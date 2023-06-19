"use client";

import React, { useEffect } from "react";
import axios from "axios";

export default function GetToken({ article_id: article_id }) {
  useEffect(() => {
    getToken();
  }, [article_id]);

  const getToken = async () => {
    try {
      const response = await axios.post("http://localhost:8000/users/login/", {
        email: "admin@admin.com",
        password: "admin",
      });
      const token = response.data.access;
      console.log(token);
      return token;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handlePostRequest = async () => {
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `http://localhost:8000/blogs/${article_id}/empathys/`,
      null,
      config
    );
    console.log(response.data);
  };

  return (
    <form>
      <button type="submit" onClick={handlePostRequest}>
        쭈압
      </button>
    </form>
  );
}
