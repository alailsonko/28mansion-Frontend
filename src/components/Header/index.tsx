import React from 'react';

import { Container, Logo } from './styles';

const Header: React.FC = () => {
  console.log('hello');
  return (
    <Container>
      <Logo>28Mansion</Logo>
    </Container>
  );
};

export default Header;
