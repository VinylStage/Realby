"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import jwt from "jsonwebtoken";

const ProfileNav = () => {
  // const isUserLoggedIn = false;

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [isKakao, setIsKakao] = useState("");
  const [access, setAccess] = useState("");

  // const [currentPath, setCurrentPath] = useState("");

  // const isHomePage = currentPath === "http://localhost:3000";
  // currentPath === "http://localhost:3000/feed" ||
  // currentPath.startsWith("http://localhost:3000/topic/");
  // console.log(isHomePage);

  /** 현재 path가져오기
   *  비동기처리가 필요없기때문에 안정적임
   * 밑 세줄모두 Boolean으로 */
  const pathname = usePathname();

  /** {isMainPage} = 메인페이지 인지 */
  const isMainPage = pathname === "/";
  /** {isFeedPage} = 피드페이지인지 */
  const isFeedPage = pathname === "/feed";
  /** {isTopicPage} = 토픽페이지인지
   * 토픽페이지는 startWith()를 사용햐여 "/topic/"으로 시작하는지 검증 */
  const isTopicPage = pathname.startsWith("/topic/");

  // if (typeof window !== "undefined") {
  //   localStorage.getItem("access");
  //   setAccess(access);
  // }

  useEffect(() => {
    const access = localStorage.getItem("access");
    setAccess(access);
  }, []);

  // function useLocalStorage(key) {
  //   const storedValue = localStorage.getItem(key);
  //   useEffect(() => {
  //     localStorage.setItem(key, storedValue);
  //   }, [key, storedValue]);
  //   return storedValue;
  // }
  // const access = useLocalStorage("access");

  useEffect(() => {
    // setCurrentPath(window.location.href);

    async function checkUserLoggedIn() {
      try {
        if (access) {
          await axios.post("http://localhost:8000/users/api/token/verify/", {
            token: access,
          });
          setIsUserLoggedIn(true);
          const isKakao = jwt.decode(access).user_type === "kakao";
          setIsKakao(isKakao);
        } else {
          setIsUserLoggedIn(false);
        }
      } catch {}
    }

    checkUserLoggedIn();
  }, []);

  async function handleLogout() {
    if (isKakao) {
      try {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const refresh = localStorage.getItem("refresh");

        await axios.post("http://localhost:8000/users/logout/", {
          token: refresh,
        });
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        Router.refresh();
        // 로그아웃 성공 처리
      } catch (error) {
        // 로그아웃 실패 처리
        console.error(error);
      }
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
      {isMainPage || isFeedPage || isTopicPage ? (
        <>
          <Link href="/feed" className="flex gap-2 flex-center">
            피드
          </Link>
          <Link href="/topic/LIFE" className="flex gap-2 flex-center">
            토픽
          </Link>
        </>
      ) : null}

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
                {isKakao ? (
                  <Link href="http://localhost:8000/users/kakao/logout/">
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
                  </Link>
                ) : (
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
                )}
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
