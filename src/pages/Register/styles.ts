import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
background-color: var(--Metal-white-5-rgba-color);
height: calc(100vh - 50px);

 form {
   
   > div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
   }
}
`;

export const FieldInput = styled(Field)`
   width: 250px;
   height: 30px;
   border-radius: 5px;
   border-color: var(--Metal-white-2-rgba-color);
   outline: none;
   background-color: white;
   &:focus {
     border-color: var(--Global-Citizen-1-hex-color);
   }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const WrapperField = styled.div`
 display: flex;
 flex-direction: column;
 > p {
  font-size: 12px;
  margin-top: 2px;
 }
`;

export const Button = styled.button`
   width: 256px;
   height: 30px;
   margin-top: 15px;
`;
