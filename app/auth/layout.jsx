import React from "react";

import "../../styles/elisa-login.css";


export default function AuthLayout ({ children }) {
  return (
    <html lang="kr">
      <body>
        <div className="auth-top"/>
          <main className="app">
          {children}
          </main>
      </body>
    </html> 

  );
}
