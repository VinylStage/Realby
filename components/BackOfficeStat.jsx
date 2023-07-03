"use client";

import Link from "next/link";
import "../styles/boyoung.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BackOfficeStat({ blog_name: blog_name }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [blog_name]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/blogs/${blog_name}/`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
  );
}
