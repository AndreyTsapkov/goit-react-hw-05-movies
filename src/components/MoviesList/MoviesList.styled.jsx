import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MoviesTitleStyled = styled.h3`
  margin-bottom: 30px;
  margin-top: 30px;
  font-size: 28px;
  text-align: center;
`;

export const MoviesListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 20px;
  margin: 0;
  padding: 0;
`;

export const MoviesItemStyled = styled(Link)`
  width: 100%;
  flex-basis: calc(100% / 5 - 20px);

  & img {
    width: 100%;
  }
`;
