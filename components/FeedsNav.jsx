"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const FeedsNav = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function checkUserLoggedIn() {
      try {
        const access = localStorage.getItem("access");

        if (access) {
          await axios.post(
            "https://www.realbyback.shop/users/api/token/verify/",
            {
              token: access,
            }
          );

          setIsUserLoggedIn(true);
        } else {
          setIsUserLoggedIn(false);
        }
      } catch (error) {
        setIsUserLoggedIn(false);
        console.error(error);
      }
    }

    checkUserLoggedIn();
  }, []);

  const handleMyFeedBtn = () => {
    if (isUserLoggedIn) {
      router.push("/feed"); // 로그인된 경우 마이피드 페이지로 이동
    } else {
      router.push("/login"); // 로그인되지 않은 경우 로그인 페이지로 이동
    }
  };

  return (
    <nav className="flex-between w-full md-16 pt-3">
      <a className="flex gap-2 flex-center" onClick={handleMyFeedBtn}>
        피드
      </a>
      <Link href="/topic/LIFE" className="flex gap-2 flex-center">
        토픽
      </Link>

      {/* 추후 개발 예정
      Mobile Navigation
      <div></div> */}
    </nav>
  );
};

export default FeedsNav;
