"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

export default function BackOfficePoparticles({ blog_name: blog_name }) {
  const [data, setData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  const handleHit = async () => {
    try {
      const response = await axios.get(
        `https://www.realbyback.shop/backoffice/${blog_name}/hits/`
      );
      const data = response.data;

      setData(data);
      setDataFetched(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmpathy = async () => {
    try {
      const response = await axios.get(
        `https://www.realbyback.shop/backoffice/${blog_name}/empathys/`
      );
      const data = response.data;

      setData(data);
      setDataFetched(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="box_popular">
      <div className="box_title">
        <strong>인기글</strong>
        <button onClick={handleHit}>조회수</button>
        <button onClick={handleEmpathy}>공감</button>
      </div>
      {dataFetched && (
        <div className="back">
          {data &&
            data.map((e) => {
              const id = e.id;
              const title = e.title;
              const hits = e.hits;
              const empathys = e.empathys;
              const content = e.content ? (
                <p className="text-gray-400 break-all">
                  {e.content.substr(0, 100)}...
                </p>
              ) : null;
              const created = e.created_at.substr(0, 10);
              const category = e.category ? (
                <Link
                  href={`/${blog_name}/${e.category}`}
                  className="no-underline text-black hover:underline"
                >
                  {e.category}
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
                      href={`/${blog_name}/articles/${id}`}
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
  );
}
