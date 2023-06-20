import React from "react";
import CommentEditPopup from "@components/CommentEditPopup";

/**
 * 댓글 수정페이지
 * @params {comment_id} 댓글 아이디
 */
export default function commentEditPage({ params }) {
  return (
    <>
      <CommentEditPopup comment_id={params.comment_id} />
    </>
  );
}
