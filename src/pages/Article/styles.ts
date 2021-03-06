import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';

export const WrapperPost = styled.div`
 
display: flex;
flex-direction: column;
background: green;
border-radius: 30px;
margin: 0 20px;
padding-bottom: 20px;
margin-bottom: 20px;
margin-top: 50px;
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

export const WrapperActions = styled.div`
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  top: auto;
`;

export const Delete = styled.button`
  background-color: red;
  border-radius: 15px;
  width: 60px;
  height: 25px;
`;

export const Edit = styled.button`
  background-color: orange;
  border-radius: 15px;
  width: 60px;
  height: 25px;
`;

export const Title = styled.h4``;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row;
  background-color: grey;
  border-radius: 10px;
  margin-top: 10vh;
`;

export const Info = styled.h4`
  margin: 15px 30px;
`;

export const WrapperRedirect = styled.div`
  background-color: #fff;
`;

export const BackTo = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const BackToIcon = styled(FiArrowLeft)`
   cursor: pointer;
   color: black;
`;

export const InputEditTitle = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 250px;
  height: 30px;
  font-size: 24px;
  font-weight: bold;
`;

export const InputEditContent = styled.textarea`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 250px;
  height: 300px;
  font-size: 18px;
  font-weight: 500;
`;

export const Confirm = styled.button`
  background-color: yellow;
  border-radius: 15px;
  width: 60px;
  height: 25px;
`;

export const Cancel = styled.button`
  background-color: red;
  border-radius: 15px;
  width: 60px;
  height: 25px;

`;
