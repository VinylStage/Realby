import React from "react";
import dynamic from "next/dynamic";

const KakaoLoginCallback = dynamic(
  () => import("@components/KakaoLoginCallback"),
  {
    ssr: false,
  }
);

export default function KakaoCallback() {
  return <KakaoLoginCallback />;
}
