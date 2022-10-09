import styled from '@emotion/styled';

export const ReviewsContainer = styled.div`
  padding: 20px;
`;

export const ReviewsList = styled.ul`
  font-size: 24px;
`;

export const ReviewsItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const ReviewsData = styled.p`
  font-size: 18px;
`;
