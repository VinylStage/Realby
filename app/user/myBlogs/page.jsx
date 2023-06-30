import BlogCreate from "@/components/BlogCreate";
import MyBlogList from "@components/MyBlogList";

/** 블로그 생성페이지 */
export default function myBlogs() {
  return (
    <div className="bg-red-900">
      <BlogCreate />
      <MyBlogList />
    </div>
  );
}
