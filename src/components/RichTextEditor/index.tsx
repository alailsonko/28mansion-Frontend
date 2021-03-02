import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useDispatch } from 'react-redux';
import './styles.css';
import { savePost } from '../../store/middlewares/Posts/posts.post.actions';
import { AddPost } from '../../usecases/post.interfaces';
import {
  Container,
  ButtonsWrapper,
  Button,
  TitleInput,
  PublishAnArticle,
} from './styles';

function RichTextEditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
  const [hidRichText, setHidRichText] = React.useState<boolean>(true);
  const [titleState, setTitleState] = React.useState<string>('');
  const { blocks } = convertToRaw(editorState.getCurrentContent());
  const value = blocks.map((block) => (!block.text.trim() && '\n') || block.text).join('\n');
  console.log(value);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    // const buffer = msgpack.encode((editorState));
    // console.log(buffer);

    const postPublish: AddPost = {
      title: titleState,
      content: value,
      tags: [],
      status: 'public',
    };
    dispatch(savePost(postPublish));
    setTitleState('');
    setEditorState(() => EditorState.createEmpty());
    console.log(postPublish);
  };
  return (
    <Container>
      {hidRichText ? (

        <PublishAnArticle onClick={() => { setHidRichText(false); }}>
          Publish An Article
        </PublishAnArticle>
      ) : (
        <>
          <TitleInput value={titleState} onChange={(e) => { setTitleState(e.target.value); }} placeholder="Enter a title..." />
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
