import React from 'react';
import Header from '../../components/Header';
import RichTextEditor from '../../components/RichTextEditor';
import {
  Container,
  MainSection,
} from './styles';
import SectionPosts from '../../components/SectionPosts';

const Home: React.FC = () => (
  <>
    <Header />
    <Container>
      <MainSection>
        <h1>Home</h1>
        <RichTextEditor />
        <SectionPosts />
      </MainSection>
    </Container>
  </>

);

export default Home;
