import React from 'react';
import Header from '../../components/Header';

import { Container } from './styles';

const Home: React.FC = () => {
  console.log('hello');
  return (
    <>
      <Header />
      <Container>
        <h1>Home</h1>
      </Container>
    </>

  );
};

export default Home;
