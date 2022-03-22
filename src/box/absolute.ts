import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 768px){
    width: 80%;
  }

  @media(max-width: 426px){
    width: 90%;
  }
`;
export const Container = styled(Wrapper)`
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.phoneContainer};
  border-radius: 10px;
  margin-top: 40px;
  padding: 30px 10px;
  border: 3px solid ${({theme}) => theme.colors.phoneColor};
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FlexColumn = styled(Flex)`
  flex-direction: column;
  width: 100%;
`

export const NoteWrapper = styled(Flex)`
  margin-bottom: 30px;
  background-color: rgb(0,0,0);
  padding: 10px;
  width: 92%;
  border-radius: 10px;
  justify-content: flex-start;

  @media(max-width: 426px){
    flex-wrap: wrap;
    
  }
`



