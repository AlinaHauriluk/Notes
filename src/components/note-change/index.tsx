import { ButtonChange } from "./note-change"

interface NoteChangeProps {
  edit: () => void;
  save: ()=> void;
}

const NoteChange: React.FC<NoteChangeProps> = ({edit, save}) => (
  <>
  <ButtonChange onClick={edit}>Edit</ButtonChange>
  <ButtonChange onClick={save}>Save</ButtonChange>
  </>
)

export default NoteChange