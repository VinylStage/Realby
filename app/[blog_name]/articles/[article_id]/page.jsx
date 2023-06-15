import ArticleDetail from "@components/ArticleDetail";
import CommentView from "@components/CommentView";
import CommentWrite from "@components/CommentWrite";

import Link from "next/link";

export default function articleDetail({ params }) {
  return (
    <>
      <ArticleDetail
        blog_name={params.blog_name}
        article_id={params.article_id}
      />
      <div>======================</div>
      <Link href={`/${params.blog_name}/articles/${params.article_id}/edit`}>
        수정
      </Link>
      <div>======================</div>
      <CommentView article_id={params.article_id} />
      <div>======================</div>
      <CommentWrite article_id={params.article_id} />
      <Link href={`/${params.blog_name}`}>게시글 목록으로 돌아가자</Link>
    </>
  );
}
