"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const isUserLoggedIn = false;

  const [toggleDropdown, setToggleDropdown] = useState(false);

  async function handleLogout() {
    try {
      const refresh_token = localStorage.getItem("refresh_token");

      await axios.post("http://localhost:8000/users/logout/", {
        refresh_token: refresh_token,
      });

      // 로그아웃 성공 처리
    } catch (error) {
      // 로그아웃 실패 처리
      console.error(error);
    }
  }

  return (
    <nav className="flex-between w-full md-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        {/* <Image
          src="/assets/images/realby_logo.png"
          alt="Realby Logo"
          width={60}
          height={20}
          className="object-contain"
        /> */}
      </Link>
      <Link href="/feed" className="flex gap-2 flex-center">
        피드
      </Link>
      <Link href="/topic" className="flex gap-2 flex-center">
        토픽
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            {/* 드롭다운(온클릭) 추가해서 마이프로필, 마이블로그들을 링크로 */}
            <Image
              src="/assets/images/default_pf_image.png"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/user/account"
                  className=""
                  onClick={() => setToggleDropdown(false)}
                >
                  계정 관리
                </Link>
                <>
                  <Link
                    href=""
                    className=""
                    onClick={() => setToggleDropdown(false)}
                  >
                    내 블로그
                  </Link>
                  <Link
                    href=""
                    className=""
                    onClick={() => setToggleDropdown(false)}
                  >
                    글쓰기
                  </Link>
                  <Link
                    href=""
                    className=""
                    onClick={() => setToggleDropdown(false)}
                  >
                    블로그 관리홈
                  </Link>
                </>

                <button
                  type="submit"
                  onClick={() => {
                    setToggleDropdown(false);
                    handleLogout();
                  }}
                  value="Logout"
                  className="mt-5 w-full black_btn"
                >
                  로그아웃
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href="/auth/login" className="black_btn">
              시작하기
            </Link>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div></div>
    </nav>
  );
};

export default Nav;
