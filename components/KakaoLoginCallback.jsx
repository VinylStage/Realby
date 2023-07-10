"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function KakaoCallback() {
  const [access, setAccess] = useState("");
  const [refresh, setRefresh] = useState("");
  const router = useRouter();

  useEffect(() => {
    handleKakaoLogin();
  }, []);

  async function handleKakaoLogin() {
    const currentURL = await window.location.href;
    const codeIndex = currentURL.indexOf("?code=");
    const code = currentURL.substring(codeIndex + 6);
    try {
      const response = await axios.post(
        `https://www.realbyback.shop/users/kakao/callback/`,
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
      const access_token = responseData.access_token;
      const refresh_token = responseData.refresh_token;
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
  //       `https://www.realbyback.shop/users/kakao/complete/`,
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
