"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function UserProfileEdit() {
  const [data, setData] = useState([]);
  const [birthdate, setBirthdate] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await axios.get(
        `https://www.realbyback.shop/users/profile/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleProfileEdit = async () => {
    try {
      const token = localStorage.getItem("access");
      const response = await axios.put(
        `https://www.realbyback.shop/users/profile/`,
        {
          birthday: birthdate,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  const email = data.email;
  const username = data.username;
  const birth = data.birthday ? (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker defaultValue={date.birth} />
    </LocalizationProvider>
  ) : (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={birthdate}
        onChange={(event) => setBirthdate(console.log(event))}
      />
    </LocalizationProvider>
  );
  return (
    <form>
      <div className="shadow-md">
        <TextField disabled id="outlined-disabled" defaultValue={email} />
        <TextField
          disabled
          id="outlined-basic"
          defaultValue={username}
          variant="outlined"
        />
        {birth}
        <Button onClick={handleProfileEdit} type="submit">
          수정
        </Button>
      </div>
    </form>
  );
}
