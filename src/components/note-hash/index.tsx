import { Hash, HashRemove } from "./note-hash";

interface NoteHashProps {
  hash: string;
}

const NoteHash: React.FC<NoteHashProps> = ({ hash }) => (
  <>
    <Hash 
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.remove();
      }}
    >
      {hash}
      <HashRemove />
    </Hash>
  </>
);

export default NoteHash;
