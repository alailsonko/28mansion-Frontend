import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Content,
  PostContent,
  Title,
  Username,
  WrapperPost,
  WrapperUserInfo,
} from './styles';

interface StateProps {
  posts: any
}

type Props = StateProps

const Post: React.FC<Props> = (props: Props) => {
  console.log('hello');
  const { posts } = props;

  return (
    <WrapperPost>
      <WrapperUserInfo>

        {posts.user.profile ? (
          <Avatar src={`${posts.user.profile}`} width="200" height="250" alt="profile" />
        ) : (
          <Avatar alt="profile" width="200" height="250" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
        )}
        <Username>{posts.user.username}</Username>
      </WrapperUserInfo>
      <Link to={`/article/${posts.id}`}>
        <PostContent>
          <Title>{posts.title}</Title>
          <Content>{posts.content}</Content>
        </PostContent>
      </Link>

    </WrapperPost>
  );
};

export default Post;
