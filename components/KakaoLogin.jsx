"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function KakaoLogin() {
  return (
    <div>
      <Link href="http://localhost:8000/users/kakao/login/">카카오로그인</Link>
    </div>
  );
}
