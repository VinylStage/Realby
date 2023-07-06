"use client";

import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EmailVerificationView() {
  const router = useRouter();

  useEffect(() => {
    // 페이지 진입 시 팝업창 띄우기
    alert("인증이 완료되었습니다.\n로그인 페이지로 이동합니다.");

    // 팝업창 확인 누르면 로그인 페이지로 이동
    router.push("/login");
  }, []);

  return null;
}
