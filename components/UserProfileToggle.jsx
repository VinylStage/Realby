"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UserProfileToggle() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await axios.get(`http://54.180.120.169/users/profile/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;
      setData(data);
    } catch (error) {
      console.error(error);
    }
    console.log(data);
  };

  return (
    <>
      <div>{data.username}</div>
    </>
  );
}
