import React from "react";

import "../../styles/elisa-terms.css";


export default function AuthLayout ({ children }) {
  return (
    <html lang="kr">
      <body>
        <main className="terms">
        {children}
        </main>
      </body>
    </html> 

  );
}
