import styled from '@emotion/styled';

export const CastContainer = styled.div`
  padding: 20px;
`;

export const CastList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CastItem = styled.li`
  width: 100%;
  height: 400px;
  flex-basis: calc(100% / 4 - 15px);

  & img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }
`;

export const CastData = styled.p`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;
