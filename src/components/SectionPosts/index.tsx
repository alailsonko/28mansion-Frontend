import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Store } from '../../store';
import { getPosts } from '../../store/middlewares/Posts/posts.get.actions';
import Post from '../Post';

import { SectionPosts } from './styles';

interface OwnProps {
  loading: boolean
}

interface StateProps {
  posts: any
  token: any
}

type Props = OwnProps & StateProps

const SectionPost: React.FC<Props> = (props: Props) => {
  const { token, posts, loading } = props;
  // const { loading } = posts;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(token));
  }, [dispatch]);
  return loading ? (<div>loading...</div>) : (
    <SectionPosts>
      { posts.data.map((post: any) => (
        <Post key={post.id} posts={post} />
      )) }
    </SectionPosts>
  );
};
const mapState = (state: Store) => ({
  loading: state.posts.loading,
  posts: state.posts,
  token: state.signin.session.token,
});
export default connect(mapState)(SectionPost);
