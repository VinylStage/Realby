"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin() {
    const response = await axios.post("http://127.0.0.1:8000/users/login/", {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const responseJson = await response.json();

    localStorage.setItem("access", responseJson.access);
    localStorage.setItem("refresh", responseJson.refresh);

    const base64Url = responseJson.access.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    localStorage.setItem("payload", jsonPayload);
    router.push("/");
    router.refresh();
  }

  return (
    <section className="col-6 col-12-narrower">
      <form method="post" action="#">
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
