import React, { useEffect, useState } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";

export default function UpdateEditorApp({ article_id, onChange }) {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, [article_id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.realbyback.shop/blogs/detail/${article_id}/`
      );
      const data = response.data;

      setData(data.content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pt-5 pb-5 w-full">
      <CKEditor
        editor={Editor}
        config={Editor.defaultConfig}
        data={data}
        onChange={(event, editor) => {
          const newContent = editor.getData();
          onChange(newContent);
        }}
      />
    </div>
  );
}
