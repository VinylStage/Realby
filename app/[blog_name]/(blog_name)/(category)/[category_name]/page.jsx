import CategoryArticle from "@components/CategoryArticle";

/**
 * 카테고리별 게시글 목록
 * @params {category_name} 카테고리 이름
 */
export default function categoryArticles({ params }) {
  console.log(params.cateogry_name);
  return (
    <>
      <CategoryArticle
        blog_name={params.blog_name}
        cateogry_name={params.cateogry_name}
      />
      <div>카테고리별 게시글</div>
    </>
  );
}
