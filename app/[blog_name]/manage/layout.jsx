import "../../page.module.css";

/** 블로그 레이아웃 */
export default function manageLayout({ children }) {
  return (
    <>
      <div>{children}</div>
      <div>lay2</div>
    </>
  );
}
