import Link from "next/link";
import React from "react";
import "../../../styles/boyoung.css";

/** 관리페이지 레이아웃 */
const ManageLayout = ({ children, params }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <div className="container_by">
        <aside className="aside_by">
          <div className="top">
            <div className="logo">
              <img src="/assets/images/default_pf_image.png" />
              <Link href={`/${params.blog_name}`}>
                <h2 className="home">
                  {params.blog_name}
                  <span className="material-symbols-outlined">open_in_new</span>
                </h2>
              </Link>
            </div>
          </div>

          <div className="sidebar">
            <Link href={`/${params.blog_name}/manage`}>
              <span className="material-symbols-outlined">home</span>
              <h3>Manage Home</h3>
            </Link>

            <Link href="#">
              <span className="material-symbols-outlined">person</span>
              <h3>유저</h3>
            </Link>

            <Link href={`/${params.blog_name}/manage/posts`}>
              <span className="material-symbols-outlined">article</span>
              <h3>글 관리</h3>
            </Link>

            <Link
              href={`/${params.blog_name}/manage/category`}
              className="active"
            >
              <span className="material-symbols-outlined">category</span>
              <h3>카테고리 관리</h3>
            </Link>

            <Link href={`/${params.blog_name}/manage/comments`}>
              <span className="material-symbols-outlined">forum</span>
              <h3>댓글 관리</h3>
            </Link>

            {/* <Link href="#">
              <span className="material-symbols-outlined">sms</span>
              <h3>메세지</h3>
              <span className="message-count">20</span>
            </Link> */}
          </div>
        </aside>
        {children}
      </div>
    </>
  );
};

export default ManageLayout;
