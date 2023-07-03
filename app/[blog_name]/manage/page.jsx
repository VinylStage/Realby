import "../../../styles/boyoung.css";
import React from "react";
import BackOfficeStat from "@components/BackOfficeStat";
import BackOfficePoparticles from "@components/BackOfficePoparticles";

export default function manage({ params }) {
  return (
    <main className="main_by">
      <BackOfficeStat blog_name={params.blog_name} />
      <BackOfficePoparticles blog_name={params.blog_name} />
    </main>
  );
}
