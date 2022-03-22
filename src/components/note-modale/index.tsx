import { ModaleWrapper, ModaleContext, NoteText } from "./note-modale";

interface StyleProps {
  onClick: () => void;
  props: string;
}

const NoteModale: React.FC<StyleProps> = ({ props, onClick }) => {
  return (
    <ModaleWrapper onClick={onClick}>
      <ModaleContext
        onClick={(event: React.MouseEvent<HTMLDivElement>) =>
          event.stopPropagation()
        }
      >
        <NoteText>{props}</NoteText>
      </ModaleContext>
    </ModaleWrapper>
  );
};

export default NoteModale;
