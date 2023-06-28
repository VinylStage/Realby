import React, { Children } from "react";
import LoginView from "@components/LoginView";

/** 로그인페이지 */
export default function login({ Children }) {
  return (
    <>
      {Children}
      <LoginView />
    </>
  );
}
