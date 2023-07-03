import CategoryArticle from "@components/CategoryArticle";

/**
 * 카테고리별 게시글 목록
 * @params {category_name} 카테고리 이름
 */
export default function categoryArticles({ params }) {
  return (
    <>
      <CategoryArticle
        blog_name={params.blog_name}
        category_name={params.category_name}
      />
    </>
  );
}
