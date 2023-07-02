import BlogCreate from "@/components/BlogCreate";
import MyBlogList from "@components/MyBlogList";

/** 블로그 생성페이지 */
export default function myBlogs() {
  return (
    <div className="myBlogs">
      <p className="text-2xl">내 블로그</p>
      <MyBlogList />
      <p className="text-2xl mt-10">블로그 개설하기</p>
      <p className="text-sm mt-1 pl-2">아직은 1개만!</p>
      <BlogCreate />
    </div>
  );
}
