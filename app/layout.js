import "@styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <head>
        <title>Document</title>
      </head>
      <body>
        <header>
          <a href="/auth/login">login</a>
        </header>
        {children}
        <footer>ⓒ 2023 Blog Platform Company. All Rights Reserved.</footer>
      </body>
    </html>
  );
}
