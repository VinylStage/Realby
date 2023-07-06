"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UserProfileEdit() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await axios.get(`http://localhost:8000/users/profile/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  const email = data.email;
  const username = data.username;
  const image = data.profile_img;
  return (
    <div className="userProfile w-56 h-[300px] mb-5 shadow-md">
      <div className="w-full h-3/4 pt-10 flex-center">
        <img
          src={`http://localhost:8000${image}`}
          className="w-28 h-28 mt-0 m-auto"
        />
      </div>
      <div className="h-1/4 text-center mb-5">
        <p className="text-2xl">{username}</p>
        <p className="text-sm mb-1.5 text-[#a2a2a2]">{email}</p>
      </div>
    </div>
  );
}
