import React, { Component } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const editorConfiguration = {
  alignment: {
    options: ["left", "right"],
  },
  toolbar: [
    "heading",
    "|",
    "outdent",
    "indent",
    "bulletedList",
    "numberedList",
    "alignment",
    "undo",
    "redo",
    "insertImage",
    "link",
    "Base64UploadAdapter",
    "imageStyle:block",
    "imageStyle:side",
    "|",
    "toggleImageCaption",
    "imageTextAlternative",
    "|",
    "linkImage",
    "blockQuote",
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "code",
    "subscript",
    "superscript",
    "codeBlock",
    "mediaEmbed",
    "findAndReplace",
    "fontSize",
    "fontFamily",
    "fontColor",
    "fontBackgroundColor",
    "highlight",
    "horizontalLine",
    "pageBreak",
    "removeFormat",
    "selectAll",
    "sourceEditing",
    "specialCharacters",
    "restrictedEditing",
    "insertTable",
  ],
  insertImage: {
    plugins: ["ImageInsert", "AutoImage"],
  },
  link: {
    plugins: ["Link", "AutoLink"],
  },
  linkImage: {
    plugins: [
      "Image",
      "ImageToolbar",
      "ImageCaption",
      "ImageStyle",
      "ImageResize",
      "LinkImage",
    ],
  },
  specialCharacters: {
    plugins: [
      "SpecialCharacters",
      "SpecialCharactersEssentials",
      "SpecialCharactersExtended",
    ],
  },
  insertTable: {
    plugins: ["Table", "TableToolbar", "Bold", "TableCaption"],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "toggleTableCaption",
    ],
  },
};

/** CKEditor 커스텀 */
class EditorApp extends Component {
  render() {
    const { content, onChange } = this.props;
    return (
      <div className="App">
        <CKEditor
          editor={Editor}
          config={editorConfiguration}
          data="<p></p>"
          onChange={(event, editor) => {
            const newContent = editor.getData();
            onChange(newContent);
          }}
        />
      </div>
    );
  }
}

export default EditorApp;
