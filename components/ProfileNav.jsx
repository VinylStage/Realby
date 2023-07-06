"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";


const ProfileNav = () => {
  // const isUserLoggedIn = false;
  
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    async function checkUserLoggedIn() {
      try {
        const access = localStorage.getItem("access");

        if (access) {
          await axios.post("http://localhost:8000/users/api/token/verify/", {
            token: access,
          });

          setIsUserLoggedIn(true);
        }
      } catch (error) {
        setIsUserLoggedIn(false);
        console.error(error);
      }
    }

    checkUserLoggedIn();
  }, []);

  async function handleLogout() {
    try {
      const refresh = localStorage.getItem("refresh");

      await axios.post("http://localhost:8000/users/logout/", {
        token: refresh,
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
        <Image
          src="/assets/images/realby_logo/realby-color-R.png"
          alt="Realby Logo"
          width={120}
          height={25}
          className="object-contain"
        />
      </Link>


      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          // 로그인된 경우
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
          // 로그인 안된 경우
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

export default ProfileNav;
