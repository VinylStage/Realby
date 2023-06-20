import React from "react";
import CommentEditPopup from "@components/CommentEditPopup";

export default function commentEditPage({ params }) {
  return (
    <>
      <div>hell</div>
      <CommentEditPopup comment_id={params.comment_id} />
    </>
  );
}
