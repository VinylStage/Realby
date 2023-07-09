import React from "react";

export default function AuthLayout({ children }) {
  return (
    <html>
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
