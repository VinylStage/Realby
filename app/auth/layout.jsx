import React from "react";


export default function AuthLayout ({ children }) {
  return (
    <>
      <main className="app">
      {children}
      </main>
    </>
  );
};


