import styled from '@emotion/styled';

export const MoviesPageContainer = styled.form`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoviesPageInput = styled.input`
  padding: 10px;
  min-width: 300px;
  height: 40px;

  &:active,
  &:focus {
    outline: 1px solid black;
  }
`;

export const MoviesPageButton = styled.button`
  height: 64px;
  width: 64px;
`;
