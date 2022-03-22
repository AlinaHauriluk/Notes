import styled from "styled-components";
import { Button } from "../note-desk/note.desk";

export const ButtonChange = styled(Button)`
  padding: 5px;
  margin-left: 25px;
  font-size: ${({ theme }) => theme.fontSize.medium};
`