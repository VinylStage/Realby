import React from "react";
import CommentEditPopup from "@components/CommentEditPopup";

/** 댓글 수정페이지 */
export default function commentEditPage({ params }) {
  return (
    <>
      <CommentEditPopup comment_id={params.comment_id} />
    </>
  );
}
