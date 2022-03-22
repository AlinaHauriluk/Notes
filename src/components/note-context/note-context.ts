import styled from 'styled-components'
import { Flex } from '../../box/absolute';

export const TextContainer = styled(Flex)`
  padding: 15px;
  border: 2px solid ${({ theme }) => theme.colors.phoneColor};
  width: 90%;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.textElement};
  font-size: ${({ theme }) => theme.fontSize.medium};
  position: relative;
  margin-top: 10px;
`;
export const Text = styled.h3`
  color: ${({ theme }) => theme.colors.textElement};
  font-size: ${({ theme }) => theme.fontSize.medium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 5px;
  padding: 5px;
`
export const Remove = styled(Flex)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.phoneColor};
  opacity: 0.8;
  position: absolute;
  cursor: pointer;
  top: -20%;
  right: -2%;
  color: ${({ theme }) => theme.colors.textElement};
  position: absolute;

  :hover {
    opacity: 1;
  }

  ::before {
    content: "\u2718";
  }
`;
export const Watch = styled(Flex)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-left: 20px;
  margin-top: -10px;

  ::before {
    content: "\u2315";
    font-size: ${({ theme }) => theme.fontSize.title};
    color:${({theme}) => theme.colors.phoneColor};
  }
`;




