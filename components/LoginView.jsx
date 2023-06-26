"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

/** 임시로그인(추후 네비게이터와 수정통합 에정) */
export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin() {
    try {
      const response = await axios.post(
        "http://54.180.120.169/users/login/",
        { email: email, password: password },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const responseJson = await response.data;

      localStorage.setItem("access", responseJson.access);
      localStorage.setItem("refresh", responseJson.refresh);

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <section className="col-6 col-12-narrower">
      <form method="post" action={"/"}>
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
                <a href="signup/">Sign Up</a>
              </li>
              <li>
                <button onClick={handleLogin} type="submit" value="Login">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </section>
  );
}
