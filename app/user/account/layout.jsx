import Link from "next/link";
import React from "react";
import UserProfile from "@components/UserProfile";

/** 유저관련 레이아웃 */
export default function userlayout({ children }) {
  return (
    <div className="flex justify-center mt-[100px] fw-[920px]">
      <aside className="fw-68 flex flex-col justify-between p-2.5 m-0 block relative mr-10">
        <UserProfile />
        <div className="userSetting shadow-md w-56 h-40 ">
          <div className="w-full h-2/4 border-b-[0.5px] pl-2.5 pt-6">
            <Link
              href="/user/myBlogs"
              className="text-xl hover:bg-[#e6e6e6] rounded"
            >
              내 블로그
            </Link>
          </div>
          <div className="w-full h-2/4 pl-2.5 pt-6">
            <Link
              href="/user/account"
              className="text-xl hover:bg-[#e6e6e6] rounded"
            >
              내 계정
            </Link>
          </div>
        </div>
      </aside>
      <div className="w-[700px]">{children}</div>
    </div>
  );
}
