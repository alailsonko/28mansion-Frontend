import styled from 'styled-components';

export const WrapperPost = styled.div`
 
display: flex;
flex-direction: column;
background: green;
border-radius: 30px;
margin: 0 20px;
padding-bottom: 20px;
margin-bottom: 20px;
`;

export const PostContent = styled.div`
  background: white;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

export const WrapperUserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const Username = styled.h3`
  align-self: flex-start;
  margin-left: 10px;
`;

export const Content = styled.div`
  margin-bottom: 5px;
`;

export const WrapperTags = styled.div``;

export const Tag = styled.div``;

export const Title = styled.h4``;
