"use client";

import "../styles/elisa-main.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getProviders } from "next-auth/react";
import KakaoLogin from "@components/KakaoLogin";

// (JWT인증) 서버 요청/응답시 설정 관련 파일
// 한 곳에서 import하면 해당 설정은 프로젝트 전반에 적용되어 모든 API 요청에 자동으로 적용됨
import "./Interceptors.jsx";
import axios from "axios";

/** 일반 로그인 & 소셜 로그인(회원가입) 페이지 */
export default function LoginView() {
  // 일반 로그인
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [kakao, setKakao] = useState([]);
  // 소셜 로그인(회원가입)
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, []);
  // 일반 로그인
  async function handleLogin() {
    try {
      const response = await axios.post(
        "http://localhost:8000/users/login/",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const responseJson = await response.data;
      const access = responseJson.access;

      // refresh 토큰은 서버에서 설정한 http-only 쿠키로 자동 전달
      // access 토큰은 로컬 스토리지에 저장
      localStorage.setItem("access", access);

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSocialLogin() {
    try {
      await axios.post(`http://localhost:8000/users/${provider.name}/login/`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Link href="/" className="">
        <Image
          src="/assets/images/realby_logo/realby-color-R.png"
          alt="Realby Logo"
          width={200}
          height={50}
          className=""
        />
      </Link>
      <section className="col-6 col-12-narrower">
        <form method="post">
          <div className="row gtr-50">
            <div className="col-12 col-12-mobile">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-12 col-12-mobile">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="col-12">
              <ul className="actions">
                <li>
                  <button onClick={handleLogin} type="submit" value="Login">
                    로그인
                  </button>
                </li>
                <li>
                  <Link href="/auth/terms">회원가입</Link>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <p>소셜 계정으로 시작하기</p>
              <KakaoLogin />
              {/* {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    // onClick={() => signIn(provider.id)}
                    onClick={handleSocialLogin}
                    className=""
                  >
                    버튼
                  </button>
                ))} */}
              {/* <Link
                href={`http://localhost:8000/users/kakao/login/`}
                onClick={handleKakaoLogin}
              >
                소셜로그인
              </Link> */}
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
