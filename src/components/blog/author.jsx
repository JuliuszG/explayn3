import React from 'react';
import {
  AuthorWrapper,
  AuthorImageWrapper,
  AuthorInfo,
  AboutAuthor,
  AuthorPic,
} from '../styled';

const Author = ({ name, about, photo }) => {
  return (
    <AuthorWrapper>
      <AuthorImageWrapper>
        <AuthorPic fluid={photo} alt="author" />
      </AuthorImageWrapper>
      <AuthorInfo className="info">
        <small>ABOUT THE AUTHOR</small>
        <h3>{name}</h3>
        <AboutAuthor className="about">{about}</AboutAuthor>
      </AuthorInfo>
    </AuthorWrapper>
  );
};

export default Author;
