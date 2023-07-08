"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function KakaoLogout() {
  const router = useRouter();

  router.push("/");
  return null;
}
