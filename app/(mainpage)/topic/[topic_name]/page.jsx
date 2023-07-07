import Link from "next/link";
import React from "react";

import TopicFeed from '@components/TopicFeed';

export default function TopicFeedPage({ params }) {
  return (
    <>
      <div className="text-2xl text-black tracking-tighter">
        <ul className="flex flex-row justify-center mt-20 mb-20">
          <li className="hover:border-b-2 border-gray-400">
            <Link href={`/topic/LIFE`}>
              <span className="relative">일상</span>
            </Link>
          </li>
          <li className="hover:border-b-2 border-gray-400 ml-5">
            <Link href={`/topic/TRAVEL`}>
              <span className="relative">여행</span>
            </Link>
          </li>
          <li className="hover:border-b-2 border-gray-400 ml-5">
            <Link href={`/topic/CULTURE`}>
              <span className="relative">문화</span>
            </Link>
          </li>
          <li className="hover:border-b-2 border-gray-400 ml-5">
            <Link href={`/topic/IT`}>
              <span className="relative">IT</span>
            </Link>
          </li>
          <li className="hover:border-b-2 border-gray-400 ml-5">
            <Link href={`/topic/SPORTS`}>
              <span className="relative">스포츠</span>
            </Link>
          </li>
        </ul>
      </div>
      <TopicFeed topic_name={params.topic_name} />
    </>
  );
}