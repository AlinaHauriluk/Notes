import styled from 'styled-components'

export const NoteDeskText = styled.textarea`
  padding: 10px 20px;
  text-align: center;
  width: 80%;
  outline: none;
  background-color: ${({ theme }) => theme.colors.phoneContainer};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.large};
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.textElement};
  border: 2px solid ${({ theme }) => theme.colors.phoneColor};

  ::placeholder {
    color: ${({ theme }) => theme.colors.textElement};
    padding-top: 35px;
  }
`;
export const Button = styled.button`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.textElement};
  color: ${({ theme }) => theme.colors.textElement};
  font-size: ${({ theme }) => theme.fontSize.large};
  border-radius: 10px;
  cursor: pointer;
  background-color:${({ theme }) => theme.colors.phoneColor}; 
  opacity: 0.6;
  letter-spacing: 2px;

  :hover{
    opacity: 1;
  }

  @media(max-width: 768px){
    margin-left: 20px;
  }
`;
