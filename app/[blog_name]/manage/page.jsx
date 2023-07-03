"use client";


import Link from "next/link";
import axios from "axios";
import '../../../styles/boyoung.css'
import React, { useEffect, useState } from "react";



export default function manage({ params }) {
  const [dataFetched, setDataFetched] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [params]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/blogs/${params.blog_name}/`
      );
      const data = response.data;
      

      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handlehit = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/backoffice/${params.blog_name}/hits/`
      );
      const data = response.data;

      setData(data);
      setDataFetched(true);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleempathy = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/backoffice/${params.blog_name}/empathys/`,
      );
      const data = response.data;

      setData(data);
      setDataFetched(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <main className="main_by">
        <div className="box_hit">
          <div className="box_title">
            <strong>방문자 통계</strong>
          </div>       
          <div className="hit">
            <dl className="hit_count">
              <dt>오늘</dt>
              <dd>{data.hits}</dd>
            </dl>
            <dl className="hit_count">
              <dt>어제</dt>
              <dd>{data.hits}</dd>
            </dl>
            <dl className="hit_count">
              <dt>이번주</dt>
              <dd>{data.hits}</dd>
            </dl>
            <dl className="hit_count">
              <dt>누적</dt>
              <dd>{data.hits}</dd>
            </dl>
          </div>
        </div>

        <div className="box_popular">
          <div className="box_title">
            <strong>인기글</strong>
            <button onClick={handlehit}>조회수</button>
            <button onClick={handleempathy}>공감</button>
          </div>
          {dataFetched && (
            <div className="back">
              {data &&
            data.map((e) => {
            const id = e.id;
            const title = e.title;
            const hits = e.hits
            const empathys = e.empathys
            const content = e.content ? (
                <p className="text-gray-400 break-all">
                {e.content.substr(0, 100)}...
                </p>
            ) : null;
            const created = e.created_at.substr(0, 10);
            const category = e.category ? (
                <Link
                href={`/${params.blog_name}/${params.category}`}
                className="no-underline text-black hover:underline"
                >
                {category}
                </Link>
            ) : (
                "카테고리 없음"
            );
            return (
              
                <article
                key={id}
                className="w-1/4 mb-4 mt-4 p-2.5 text-xl font-medium leading-relaxed shadow-lg rounded-lg"
                > 
                <div>
                    <Link
                    href={`/${params.blog_name}/articles/${params.id}`}
                    className="no-underline hover:underline"
                    >
                    <strong className="mb-5">{title}</strong>
                    {content}
                    </Link>
                    <div className="mt-11">
                    <span className="text-sm">{category} </span>
                    </div>
                    <div>
                        <span className="text-sm">조회수 {hits} </span>
                        <span className="text-sm">공감 {empathys} </span>
                        <p className="text-sm">{created}</p>
                    </div>
                </div>
                </article>
            );
            })}
            </div>
          )}
        </div>
      </main>
  )
}
