import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
    /* Color Theme Swatches in Hex */
--Metal-white-1-hex-color: #D5DEE5; 
--Metal-white-2-hex-color: #8B9DAB; 
--Metal-white-3-hex-color: #C9D1DB; 
--Metal-white-4-hex-color: #FEFEFE; 
--Metal-white-5-hex-color: #E8F1FA; 

/* Color Theme Swatches in RGBA */
--Metal-white-1-rgba-color: rgba(212, 221, 228, 1); 
--Metal-white-2-rgba-color: rgba(138, 156, 170, 1); 
--Metal-white-3-rgba-color: rgba(200, 209, 219, 1); 
--Metal-white-4-rgba-color: rgba(253, 253, 253, 1); 
--Metal-white-5-rgba-color: rgba(232, 240, 249, 1); 

 
/* Color Theme Swatches in Hex */
--Impulse-1-hex-color: #3752A6; 
--Impulse-2-hex-color: #0554F2; 
--Impulse-3-hex-color: #044BD9; 
--Impulse-4-hex-color: #0460D9; 
--Impulse-5-hex-color: #262626; 

/* Color Theme Swatches in RGBA */
--Impulse-1-rgba-color: rgba(54, 82, 165, 1); 
--Impulse-2-rgba-color: rgba(4, 83, 242, 1); 
--Impulse-3-rgba-color: rgba(4, 75, 216, 1); 
--Impulse-4-rgba-color: rgba(4, 96, 216, 1); 
--Impulse-5-rgba-color: rgba(38, 38, 38, 1); 

 
/* Color Theme Swatches in Hex */
--Global-Citizen-1-hex-color: #F25CA2; 
--Global-Citizen-2-hex-color: #0433BF; 
--Global-Citizen-3-hex-color: #032CA6; 
--Global-Citizen-4-hex-color: #021859; 
--Global-Citizen-5-hex-color: #0B9ED9; 

/* Color Theme Swatches in RGBA */
--Global-Citizen-1-rgba-color: rgba(242, 92, 162, 1); 
--Global-Citizen-2-rgba-color: rgba(3, 50, 191, 1); 
--Global-Citizen-3-rgba-color: rgba(3, 43, 165, 1); 
--Global-Citizen-4-rgba-color: rgba(1, 23, 89, 1); 
--Global-Citizen-5-rgba-color: rgba(10, 158, 216, 1);

 
}
html, body {
  background-color: var(--Metal-white-1-hex-color);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1, h2, h3, h4, button {
  font-family: 'Roboto';
  font-weight: 700;
}
p { 
  font-family: 'Roboto', serif;
}
input {
  outline: none;
}
`;

export default GlobalStyles;
