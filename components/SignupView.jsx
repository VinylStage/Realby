"use client";

import Link from "next/link";
import Image from "next/image";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

/** 일반 회원가입 페이지 */
export default function SignupView() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  async function handleSignup() {
    try {
      await axios.post(
        "http://localhost:8000/users/signup/",
        {
          username: username,
          email: email,
          password: password,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setErrorMessage(""); // 이전 오류 메시지 초기화
        alert("유저 인증용 이메일을 전송했습니다. 링크를 클릭하여 회원가입을 완료해주세요.");
        router.push("/login");
      }

    } catch (error) {
      console.error(error);
    }
    
    if (password !== confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    // useEffect(() => {
    //   const urlParams = new URLSearchParams(window.location.search);
    //   const token = urlParams.get("token");
    //   const uidb64 = urlParams.get("uidb64");
  
    //   if (token && uidb64) {
    //     handleEmailVerification(uidb64, token);
    //   }
    // }, []);
  
    // async function handleEmailVerification(uidb64, token) {
    //   try {
    //     const response = await axios.get(
    //       `http://localhost:8000/users/email-verification/${uidb64}/${token}`
    //     );
  
    //     if (response.status === 200) {
    //       window.alert("이메일 인증이 완료되었습니다. 로그인 페이지로 이동합니다.");
    //       router.push("/login");
    //     } else {
    //       window.alert("이메일 인증에 실패하였습니다.");
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

  }

  return (
    <>
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/realby_logo/realby-color-R.png"
          alt="Realby Logo"
          width={200}
          height={50}
          className="object-contain"
        />
      </Link>
      <section className="col-6 col-12-narrower">
        <form method="post">
          <div className="row gtr-50">
            <div className="col-12 col-12-mobile">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="닉네임"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
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
                placeholder="비밀번호"
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="col-12 col-12-mobile">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호 확인"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              {errorMessage && <p>{errorMessage}</p>}
            </div>
            <div className="col-12 col-12-mobile">
              <button onClick={handleSignup}>가입하기</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
