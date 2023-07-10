"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

/** 엘리사가 나중에 다시 구현할거삼!! */
export default function EmailVerifyView({ uidb64: uidb64, token: token }) {
  const router = useRouter();
  // const { uidb64, token } = router.query || {};

  function handlePopupConfirm() {
    // 팝업 확인(엔터)을 누르면 로그인 페이지로 이동
    router.push("/login");
  }

  useEffect(() => {
    async function verify() {
      try {
        await axios.get(
          `https://www.realbyback.shop/users/verify/${uidb64}/${token}`
        );

        // 페이지 진입시 팝업 띄우기
        const script = document.createElement("script");
        script.innerHTML = `alert("인증이 완료되었습니다.\n로그인 페이지로 이동합니다.");`;
        document.head.appendChild(script);

        // 팝업 확인 이벤트 리스너 등록
        window.addEventListener("keydown", handlePopupConfirm);
        // 컴포넌트 언마운트 시 팝업 확인 이벤트 리스너 제거
        return () => {
          window.removeEventListener("keydown", handlePopupConfirm);
        };
      } catch (error) {
        console.error(error);
      }
    }

    verify();
  }, []);

  return null;
}
