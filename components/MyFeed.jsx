'use client';

import axios from "axios";
import { useEffect, useState } from "react";


/** 구독한 블로그 피드 */
export default function MyFeed() {
  const [subscribedBlogs, setSubscribedBlogs] = useState([]);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetchSubscribedBlogs();
  }, []);

  useEffect(() => {
    generateFeed();
  }, [subscribedBlogs]);

  const fetchSubscribedBlogs = async () => {
    try {
      const response = await axios.get('https://your-drf-api-endpoint/blogs/subscribed');
      const data = response.data;
      setSubscribedBlogs(data);

      // 구독한 블로그 목록을 가져온 후, 각 블로그의 게시글을 가져오는 작업 수행
      for (const blog of data) {
        await fetchBlogPosts(blog.id); // 각 블로그의 ID를 사용하여 게시글을 가져옴
      }
    } catch (error) {
      console.error('Error fetching subscribed blogs:', error);
    }
  };
  
  const fetchBlogPosts = async (blogId) => {
    try {
      const response = await axios.get(`https://your-drf-api-endpoint/blogs/${blogId}/posts`);
      const posts = response.data;
      // 게시글 데이터를 활용하여 필요한 처리를 수행하거나, 상태에 저장하는 등의 작업을 수행할 수 있음
    } catch (error) {
      console.error(`Error fetching posts for blog ${blogId}:`, error);
    }
  };

  const generateFeed = () => {
    const allPosts = subscribedBlogs.reduce((acc, blog) => [...acc, ...blog.posts], []);
    setFeed(allPosts);
  };

  return (
    <div>
      {feed.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
