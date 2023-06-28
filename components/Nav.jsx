"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  // const isUserLoggedIn = true;
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

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

      {/* {alert(session?.user)} */}
      {/* {alert(providers)} */}

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            {/* 드롭다운(온클릭) 추가해서 마이프로필, 마이블로그들을 링크로 */}
            <Image
              src="/assets/images/default_pf_image.png"
              width={37}
              height={37}
              className=""
              alt=""
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href={`/user`}
                  className=""
                  onClick={() => setToggleDropdown(false)}
                >
                  계정 관리
                </Link>
                <>
                  <Link
                    href={`/${params.blog_name}`}
                    className=""
                    onClick={() => setToggleDropdown(false)}
                  >
                    내 블로그
                  </Link>
                  <Link
                    href={`/${params.blog_name}/manage/newpost`}
                    className=""
                    onClick={() => setToggleDropdown(false)}
                  >
                    글쓰기
                  </Link>
                  <Link
                    href={`/${params.blog_name}/manage`}
                    className=""
                    onClick={() => setToggleDropdown(false)}
                  >
                    블로그 관리홈
                  </Link>
                </>

                <button type="button" onClick={signOut} className="">
                  로그아웃
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href={`/login`}>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className=""
                  >
                    로그인
                  </button>
                ))}
            </Link>
            <Link href={`/login`}>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className=""
                  >
                    시작하기
                  </button>
                ))}
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
