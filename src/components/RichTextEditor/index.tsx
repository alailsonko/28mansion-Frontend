import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './styles.css';
import {
  Container,
  ButtonsWrapper,
  Button,
  TitleInput,
  PublishAnArticle,
} from './styles';

// Import and add to your Editor's plugins

function RichTextEditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
  const [hidRichText, setHidRichText] = React.useState<boolean>(true);
  const [title, setTitle] = React.useState<string>('');
  const { blocks } = convertToRaw(editorState.getCurrentContent());
  const value = blocks.map((block) => (!block.text.trim() && '\n') || block.text).join('\n');
  console.log(value);
  console.log(blocks);
  console.log(title);
  const handleSubmit = () => {
    console.log({ title, content: editorState });
  };
  return (
    <Container>
      {hidRichText ? (

        <PublishAnArticle onClick={() => { setHidRichText(false); }}>
          Publish An Article
        </PublishAnArticle>
      ) : (
        <>
          <TitleInput value={title} onChange={(e) => { setTitle(e.target.value); }} placeholder="Enter a title..." />
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={setEditorState}
          />
          <ButtonsWrapper>
            <Button onClick={handleSubmit}>Publish</Button>
            <Button onClick={() => { setHidRichText(true); }}>Hid Publisher</Button>
          </ButtonsWrapper>
        </>
      )}
    </Container>
  );
}

export default RichTextEditor;
