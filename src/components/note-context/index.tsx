import { TextContainer, Text, Remove, Watch } from "./note-context"

interface NoteContextProps {
  className: string;
  title: string;
  remove: () => void;
  watch: () => void;
}

const NoteContext:React.FC<NoteContextProps> = ({className, title, remove, watch}) => (
  <TextContainer>
    <Text className={className}>{title}</Text>
    <Remove onClick={remove} />
    <Watch onClick={watch} />
  </TextContainer>
)

export default NoteContext