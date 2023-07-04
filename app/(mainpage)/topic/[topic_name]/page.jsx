import TopicFeed from "@components/TopicFeed";
import React from "react";

export default function topic({ params }) {
  return (
    <>
      <TopicFeed topic_name={params.topic_name} />
    </>
  );
}
