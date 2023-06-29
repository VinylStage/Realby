import React, { Component } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

/** CKEditor 커스텀 */
class EditorApp extends Component {
  render() {
    const { content, onChange } = this.props;
    return (
      <div className="w-4/5">
        <CKEditor
          editor={Editor}
          config={Editor.defaultConfig}
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
