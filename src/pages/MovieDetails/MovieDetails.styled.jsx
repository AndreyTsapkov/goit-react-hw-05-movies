import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  display: flex;
  padding: 20px;
`;

export const ImageContainer = styled.div`
  margin-right: 35px;
  flex-direction: column;
`;

export const Image = styled.img`
  margin-top: 15px;
  max-width: 300px;
  display: block;
`;

export const BackButton = styled(NavLink)``;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const DataTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
`;

export const DataText = styled.p`
  font-size: 18px;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const AdditInfoContainer = styled.div`
  padding: 20px;
`;

export const AdditInfoLink = styled(NavLink)`
  font-size: 24px;
  &:not(:last-of-type) {
    margin-right: 15px;
  }
`;
