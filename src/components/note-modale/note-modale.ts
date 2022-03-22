import styled from "styled-components";
import { Flex } from "../../box/absolute";

export const ModaleWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform:translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
`
export const ModaleContext = styled(Flex)`
  width: 40%;
  height: auto;
  min-height: 100px;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform:translate(-50%, -50%);
  background-color: ${({theme}) => theme.colors.phoneModale};
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.colorElement};
`
export const NoteText = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.large};
  letter-spacing: 4px;
  word-break:break-all;
  color: ${({theme}) => theme.colors.textModale};
`