"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

export default function KakaoCallback() {
  const [access, setAccess] = useState("");
  const [refresh, setRefresh] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
    }
    handleKakaoLogin();
  }, []);

  async function handleKakaoLogin() {
    const currentURL = window.location.href;
    const codeIndex = currentURL.indexOf("?code=");
    const code = currentURL.substring(codeIndex + 6);
    try {
      const response = await axios.post(
        `http://localhost:8000/users/kakao/callback/`,
        {
          code: code,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = response.data;
      const access_token = await responseData.access_token;
      const refresh_token = await responseData.refresh_token;
      setAccess(access_token);
      setRefresh(refresh_token);
      localStorage.setItem("access", access_token);
      localStorage.setItem("refresh", refresh_token);
      // handleGetToken();
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  // async function handleGetToken() {
  //   try {
  //     // const accessExp = jwt.decode(access).exp;
  //     // const refreshExp = jwt.decode(refresh).exp;
  //     // const scope = jwt.decode(access).email;
  //     await axios.post(
  //       `http://localhost:8000/users/kakao/complete/`,
  //       {
  //         jsonData,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //       );
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  return null;
}
