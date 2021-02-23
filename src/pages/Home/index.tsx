import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import RichTextEditor from '../../components/RichTextEditor';
import { getPosts } from '../../store/middlewares/Auth/Posts/posts.actions';
import { Store } from '../../store';
import {
  Container,
  Avatar,
  Content,
  Post,
  SectionPosts,
  Username,
  WrapperPost,
  WrapperUserInfo,
  Title,
  MainSection,
} from './styles';

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
        <MainSection>

          <h1>Home</h1>
          <RichTextEditor />
          <SectionPosts>

            {posts.data.map((post: any) => (
              <WrapperPost key={`${post.id}`}>
                <WrapperUserInfo>

                  {post.user.profile ? (
                    <Avatar src={`${post.user.profile}`} width="200" height="250" alt="profile" />
                  ) : (
                    <Avatar alt="profile" width="200" height="250" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                  )}
                  <Username>{post.user.username}</Username>
                </WrapperUserInfo>
                <Post>
                  <Title>{post.title}</Title>
                  <Content>{post.content}</Content>
                </Post>

              </WrapperPost>
            ))}
          </SectionPosts>
        </MainSection>
      </Container>
    </>

  );
};

const mapState = (state: Store) => ({
  posts: state.posts,
  token: state.signin.session.token,
});

export default connect(mapState)(Home);
