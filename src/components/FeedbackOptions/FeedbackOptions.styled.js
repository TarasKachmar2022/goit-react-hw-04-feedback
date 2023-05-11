import styled from '@emotion/styled';

export const OptionBtn = styled.button`
  padding: 2px 10px;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.grey};
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 2px 2px rgba(0, 0, 0, 0.06),
    0px 2px 3px rgba(0, 0, 0, 0.06);
  :active {
    background-color: ${p => p.theme.colors.lightBlue};
  }
`;
