import styled from '@emotion/styled';
import { theme } from 'constants';

export const Review = styled.li`
  border: 1px solid ${theme.colors.black};
  border-radius: 8px;
  padding: ${theme.sizing(3)};
  margin-bottom: ${theme.sizing(3)};
  background-color: ${theme.colors.white};
  font-family: 'Source Sans Pro', Arial, sans-serif;
`;
