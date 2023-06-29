import ArticleDetail from "@components/ArticleDetail";
import CommentView from "@components/CommentView";
import CommentWrite from "@components/CommentWrite";
import ArticleDelete from "@components/ArticleDelete";
import Link from "next/link";

/**
 * 상세 게시글 페이지
 * @params {blog_name} 블로그 이름
 * @params {article_id} 게시글 아이디
 */
export default function articleDetail({ params }) {
  return (
    <>
      <ArticleDetail
        blog_name={params.blog_name}
        article_id={params.article_id}
      />
      <Link href={`/${params.blog_name}/articles/${params.article_id}/edit`}>
        수정
      </Link>
      <ArticleDelete
        blog_name={params.blog_name}
        article_id={params.article_id}
      />
      <CommentView
        article_id={params.article_id}
        blog_name={params.blog_name}
      />
      <CommentWrite article_id={params.article_id} />
    </>
  );
}
