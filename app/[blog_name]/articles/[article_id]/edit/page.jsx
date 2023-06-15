import Edits from "@/components/Edits";
import React from "react";

export default function edit({ params }) {
  return (
    <>
      <div>
        <Edits blog_name={params.blog_name} article_id={params.article_id} />
      </div>
    </>
  );
}
