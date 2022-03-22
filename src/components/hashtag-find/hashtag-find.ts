import styled from "styled-components";

export const Input = styled.input`
  padding: 10px 20px;
  text-align: center;
  width: 80%;
  outline: none;
  background-color: rgb(0,0,0);
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.large};
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.textElement};
  border: 2px solid ${({ theme }) => theme.colors.phoneColor};

  ::placeholder {
    color: ${({ theme }) => theme.colors.textElement};
    padding-top: 35px;
  }
`