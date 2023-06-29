"use client";

import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import Button from "@mui/material/Button";

export default function CreateArticleButton({ blog_name: blog_name }) {
  return (
    <>
      <Button
        variant="contained"
        endIcon={<CreateIcon />}
        size="large"
        className="hover:bg-rbo bg-orange-400 text-rbg"
      >
        글쓰기
      </Button>
    </>
  );
}
