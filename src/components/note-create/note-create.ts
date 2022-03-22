import styled from "styled-components";

export const NoteSection = styled.div`
  height: 800px;
  width: 100%;
  padding-bottom: 40px;
  background-image: url(${require("../../assets/phoneNoteImage.jpg")});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
`;
export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.phoneColor};
  font-size: ${({ theme }) => theme.fontSize.title};
  padding: 60px 0;
  text-align: center;
  text-shadow: 0 0 20px black;
`;



