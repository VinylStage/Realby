import React from "react";

import EmailVerifyView from "@components/EmailVerifyView";

/** 유저 인증용 이메일 링크페이지 */
export default function EmailVerifyPage({ params }) {
  return (
    <>
      <EmailVerifyView uidb64={params.uidb64} token={params.token}/>
    </>
  );
}
