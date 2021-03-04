import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import RichTextEditor from '../../components/RichTextEditor';
import Post from '../../components/Post';
import { getPosts } from '../../store/middlewares/Posts/posts.get.actions';
import { Store } from '../../store';
import {
  Container,
  SectionPosts,
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
  const { loading } = posts;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(token));
  }, [dispatch]);
  // console.log(posts);

  return loading ? (
    <div>loading</div>
  ) : (
    <>
      <Header />
      <Container>
        <MainSection>
          <h1>Home</h1>
          <RichTextEditor />
          <SectionPosts>
            { posts.data.map((post: any) => (
              <Post key={post.id} posts={post} />
            )) }
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
