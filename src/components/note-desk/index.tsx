import { NoteDeskText, Button } from "./note.desk";

interface NoteDeskProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: () => void;
}

const NoteDesk: React.FC<NoteDeskProps> = ({ value, onChange, onClick }) => (
  <>
    <NoteDeskText
      value={value}
      onChange={onChange}
      minLength={2}
      rows={4}
      placeholder="Write Here"
    />
    <Button onClick={onClick}>Add</Button>
  </>
);

export default NoteDesk;
