import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import { getPosts } from '../../store/middlewares/Auth/Posts/posts.actions';
import { Store } from '../../store';
import { Container } from './styles';

interface OwnProps {
  loading: boolean
}

interface StateProps {
  posts: any
  token: any
}

type Props = OwnProps & StateProps

const Home: React.FC<Props> = (props: Props) => {
  const { token, posts } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(token));
  }, [dispatch]);
  return (
    <>
      <Header />
      <Container>
        <h1>Home</h1>
        {posts.data.map((post: any) => (
          <div key={`${post.id}`}>
            <div>{post.user.username}</div>
            {post.user.profile ? (
              <img src={`${post.user.profile}`} width="200" height="250" alt="profile" />
            ) : (
              <img alt="profile" width="200" height="250" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
            )}
            <div>{post.title}</div>
            <div>{post.content}</div>
            <div>{post.tags}</div>
            <div>{post.status}</div>
          </div>
        ))}
      </Container>
    </>

  );
};

const mapState = (state: Store) => ({
  posts: state.posts,
  token: state.signin.session.token,
});

export default connect(mapState)(Home);
