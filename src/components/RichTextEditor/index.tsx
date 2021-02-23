import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './styles.css';

function RichTextEditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
  const { blocks } = convertToRaw(editorState.getCurrentContent());
  const value = blocks.map((block) => (!block.text.trim() && '\n') || block.text).join('\n');
  console.log(value);
  console.log(blocks);

  return (
    <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={setEditorState}
    />
  );
}

export default RichTextEditor;
