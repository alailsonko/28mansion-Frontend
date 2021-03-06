/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import { Store } from '../../store';

import { getOnePost, getPosts } from '../../store/middlewares/Posts/posts.get.actions';
import { deletePost } from '../../store/middlewares/Posts/posts.delete.actions';
import { updatePost } from '../../store/middlewares/Posts/posts.put.actions';
import {
  Avatar,
  Content,
  PostContent,
  Title,
  Username,
  WrapperPost,
  WrapperUserInfo,
  WrapperActions,
  Delete,
  WrapperRedirect,
  BackTo,
  BackToIcon,
  WrapperInfo,
  Info,
  Edit,
  InputEditTitle,
  InputEditContent,
  Cancel,
  Confirm,
} from './styles';
import { AddPost } from '../../usecases/post.interfaces';

interface OwnProps {
  loading: boolean
}

interface StateProps {
  posts: any
  token: any
  match: any
}

type Props = OwnProps & StateProps

const Post: React.FC<Props> = (props: Props) => {
  console.log('hello');
  const {
    posts, match, loading, token,
  } = props;
  const [redirect, setRedirect] = useState<boolean>(false);
  const [deleted, setDeleted] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!deleted) {
      dispatch(getOnePost(match.params.id, token));
    }
  }, [dispatch, loading]);
  const updateStatePost = (e?: any) => {
    e.preventDefault();
    dispatch(getPosts(token));
    setRedirect(true);
  };
  const handleDeletePost = (e: any) => {
    e.preventDefault();
    dispatch(deletePost(posts.data.id, token));
    setDeleted(true);
  };
  const handleEditPost = (e: any) => {
    e.preventDefault();
    if (edit) {
      setTitle('');
      setContent('');
      setEdit(false);
      return;
    }
    setEdit(true);
    console.log('edit post');
  };
  const handleConfirmPost = (e: any) => {
    e.preventDefault();
    const updatePublish: AddPost = {
      title,
      content,
      tags: ['onetag', 'tagto', 'threetag'],
      status: 'public',
    };
    dispatch(updatePost(updatePublish, posts.data.id, token));
    setEdit(false);
  };
  const handleChangeTitle = (e: any) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const handleChangeContent = (e: any) => {
    setContent(e.target.value);
  };
  // eslint-disable-next-line no-nested-ternary
  return (typeof posts.data.user !== 'undefined' && loading ? (
    <div>loading</div>
  ) : redirect ? (<Redirect to="/" />) : deleted && !posts.loading ? (
    <>
      <Header />
      <WrapperRedirect>
        <Link to="/" onClick={updateStatePost}>
          <BackTo>
            <BackToIcon size="35" />
          </BackTo>
        </Link>
      </WrapperRedirect>
      <WrapperInfo>
        <Info>
          {posts.data}
        </Info>
      </WrapperInfo>
    </>
  ) : (
    <>
      <Header />
      <WrapperRedirect>
        <Link to="/" onClick={updateStatePost}>
          <BackTo>
            <BackToIcon size="35" />
          </BackTo>
        </Link>
      </WrapperRedirect>
      <WrapperPost>
        <WrapperUserInfo>
          {typeof posts.data.user !== 'undefined' && posts.data.user.profile ? (
            <Avatar src={`${posts.data.user.profile}`} width="200" height="250" alt="profile" />
          ) : (
            <Avatar alt="profile" width="200" height="250" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
          )}
          {typeof posts.data.user !== 'undefined' ? (
            <Username>{posts.data.user.username}</Username>
          ) : (<div>loading</div>) }
          <WrapperActions>
            {!edit ? (
              <>
                <Edit onClick={handleEditPost}>Edit</Edit>
                <Delete onClick={handleDeletePost}>Delete</Delete>
              </>
            ) : (
              <>
                <Confirm onClick={handleConfirmPost}>Confirm</Confirm>
                <Cancel onClick={handleEditPost}>Cancel</Cancel>
              </>

            )}
          </WrapperActions>
        </WrapperUserInfo>
        <PostContent>
          {!edit ? (
            <>
              { title === '' ? (
                <Title>{posts.data.title}</Title>
              ) : (
                <Title>{title}</Title>
              )}
            </>
          ) : (
            <InputEditTitle type="text" onChange={handleChangeTitle} placeholder="insert a new title..." name="edit-title" />
          )}
          {!edit ? (
            <>
              { content === '' ? (
                <Content>{posts.data.content}</Content>
              ) : (
                <Content>{content}</Content>
              )}
            </>
          ) : (
            <InputEditContent placeholder="insert a new content..." onChange={handleChangeContent} name="edit-content" />
          )}
        </PostContent>

      </WrapperPost>
    </>
  )
  );
};

const mapState = (state: Store) => ({
  posts: state.posts,
  token: state.signin.session.token,
});

export default connect(mapState)(Post);
