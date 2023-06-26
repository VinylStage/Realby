import React from "react";
import BlogPage from "@components/BlogPage";
import Link from "next/link";
import ArticleList from "@components/ArticleList";
import BlogDeleteSubs from "@components/BlogDeleteSubs";

/**
 * 블로그 메인 페이지
 * @params {blog_name} 블로그 이름
 * */
export default function Blog({ params }) {
  
 function SideClickHandler() {
  const sideMenu = document.querySelector("aside");
  const menuBtn = document.querySelector("#menu-btn");
  const closeBtn = document.querySelector("#close-btn");
  const themeToggler = document.querySelector(".theme-toggler");
  
      menuBtn.addEventListener('click', () => {
          sideMenu.style.display = 'block';
      })
  
      closeBtn.addEventListener('click', () => {
          sideMenu.style.display = 'none'
      })
  
      themeToggler.addEventListener('click', () => {
          document.body.classList.toggle('dark-theme-variables');
      })
}
  return (
    <div className="container">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
      
      <aside>
        <div className="top">
          <div className="logo">
            <img src="/assets/images/default_pf_image.png"/>
            <h2 className="Logoname"><BlogPage blog_name={params.blog_name} /></h2>
          </div>
          <div className="close" id="close-btn">
            <span className="material-icons-sharp">close</span>
          </div>
        </div>

        <div class="sidebar">
          <a href="#">
            <span className="material-icons-sharp">grid_view</span>
            <h3>Dashboard</h3>
          </a>

          <a href="#" className="active">
            <span className="material-icons-sharp">person_outline</span>
            <h3>Customers</h3>
          </a>

          <a href={`/${params.blog_name}/manage/posts`}>
            <span className="material-icons-sharp">edit_note</span>
            <h3>Write</h3>
          </a>

          <a href={`/${params.blog_name}/manage/category`}>
            <span className="material-icons-sharp">category</span>
            <h3>Category Create</h3>
          </a>

          <a href="#">
            <span className="material-icons-sharp">mail_outline</span>
            <h3>Messages</h3>
            <span className="message-count">20</span>
          </a>
          
          <a href="#">
            <span className="material-icons-sharp">article</span>
            <h3>Article List</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">logout</span>
            <h3>Logout</h3>
          </a>
        </div>

          {/* <ArticleList blog_name={params.blog_name} /> */}
          <div>
            {/* <BlogDeleteSubs blog_name={params.blog_name} /> */}
          </div>
      </aside>

      <main>

      </main>

      <div className="right">
        <div className="top">
          <button id="menu-btn">
            <span className="material-icons-sharp">menu</span>
          </button>
          <div className="theme-toggler">
            <span className="material-icons-sharp active">light_mode</span>
            <span className="material-icons-sharp">dark_mode</span>
          </div>
          <div className="profile">
            <div className="info">
              <p>Hey, <b>보영</b></p>
              <small className="text-muted">Admin</small>
            </div>
            <div className="profile-photo">
              <img src="/assets/images/default_pf_image.png"/>

            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
