import ArticleDetail from "@components/ArticleDetail";
import ArticleDelete from "@components/ArticleDelete";
import CommentDropdown from "@components/CommentDropdown";

/**
 * 상세 게시글 페이지
 * @params {blog_name} 블로그 이름
 * @params {article_id} 게시글 아이디
 */
export default function articleDetail({ params }) {
  return (
    <div className="ml-2.5 w-[875px]">
      <ArticleDetail
        blog_name={params.blog_name}
        article_id={params.article_id}
      />
      <ArticleDelete
        blog_name={params.blog_name}
        article_id={params.article_id}
      />
      <div className="shadow-xl rounded-lg p-6">
        <CommentDropdown article_id={params.article_id} />
      </div>
    </div>
  );
}
