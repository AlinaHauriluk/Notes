import styled from 'styled-components'
import { Remove } from '../note-context/note-context'
import { Flex } from '../../box/absolute'

export const Hash = styled(Flex)`
  padding: 5px 15px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.phoneColor}; 
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.phoneColor}; 
  margin-left: 60px;
  position: relative;
  white-space: pre-wrap;
  max-width: 80%;

  @media(max-width: 426px){
    margin-left: 20px;
    margin-bottom: 10px;
    
  }
`
export const HashRemove = styled(Remove)`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  right: -20%;
`
