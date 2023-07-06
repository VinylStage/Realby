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
    handleKakaoLogin();
  }, []);

  async function handleKakaoLogin() {
    try {
      const currentURL = window.location.href;
      const codeIndex = currentURL.indexOf("?code=");
      const code = currentURL.substring(codeIndex + 6);
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
      const access_token = await response.data.access_token;
      const refresh_token = await response.data.refresh_token;
      setAccess(access_token);
      setRefresh(refresh_token);
      setKakaoJson(responseData);
      localStorage.setItem("access", access_token);
      localStorage.setItem("refresh", refresh_token);
      handleGetToken();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleGetToken() {
    try {
      const accessExp = jwt.decode(access).exp;
      const refreshExp = jwt.decode(refresh).exp;
      const scope = jwt.decode(access).email;
      await axios.post(
        `http://localhost:8000/users/kakao/complete/`,
        {
          token_type: "bearer",
          access_token: access,
          expires_in: accessExp,
          refresh_token: refresh,
          refresh_token_expires_in: refreshExp,
          scope: scope,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
  const script = document.createElement("script");
  script.innerHTML = `alert("카카오 로그인 성공"); window.location.href = "/";`;
  document.head.appendChild(script);
  router.push("/");
  return null;
}
