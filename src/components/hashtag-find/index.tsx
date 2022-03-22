import { ButtonChange } from "../note-change/note-change";
import { Input } from "./hashtag-find";

interface HashtagFindProps {
  value: string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  findHash: () => void;
  onClick: () => void;
}

const HashtagFind: React.FC<HashtagFindProps> = ({
  value,
  onChange,
  findHash,
  onClick
}) => (
  <>
    <Input
      value={value}
      onChange={onChange}
      onKeyUp={findHash}
      type="text"
      placeholder="Filter"
    />
    <ButtonChange onClick={onClick}>Clean</ButtonChange>
  </>
);

export default HashtagFind;
