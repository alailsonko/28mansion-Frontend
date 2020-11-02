import styled from 'styled-components';

// Forms, inputs, buttons
export const Container = styled.div`
      display: flex;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
  > form{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 80vw;
      > input {
          margin-bottom: 10px;
          width: 98%;
          height: 30px;
          border-radius: 10px;
          background-color: var(--Metal-white-2-rgba-color);
          &:focus {
              background-color: var(--Metal-white-5-rgba-color);
            border-color: var(--Metal-white-1-rgba-color);
            outline-color: var(--Metal-white-1-rgba-color);
          }
      }
     > button {
        width: 100%;
        height: 35px;
        border-radius: 10px;
        background-color: var(--Metal-white-5-rgba-color);
        &:hover {
        background-color: var(--Metal-white-5-rgba-color);
        }

       
     }
  } 
`;
export const Input = styled.div`

`;
