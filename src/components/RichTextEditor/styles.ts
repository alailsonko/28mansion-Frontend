import styled from 'styled-components';

export const Container = styled.div`
   margin-bottom: 30px;
   width: 100%;
   position: relative;
`;

export const PublishAnArticle = styled.button`
 width: 100%;
 height: 40px;
 outline: none;
 border: 1px solid black;
 background-color: grey;
 margin-bottom: 2px;
 border-radius: 10px;
 display: flex;
 align-items: center;
 justify-content: center;
  &:active {
   border-color: red;
 }
 &:hover {
   background-color: white;
 }
`;
export const TitleInput = styled.input`
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  height: 50px;
  margin-bottom: 2px;
  font-size: 28px;
  text-justify: center;
  text-align: center;
  font-weight: 700;
  position: absolute;
  top: 201px;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: 2px solid grey;
`;
