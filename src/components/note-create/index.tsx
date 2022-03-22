import { useState, useEffect } from "react";
import NoteModale from "../note-modale";
import NoteDesk from "../note-desk";
import NoteContext from "../note-context";
import NoteChange from "../note-change";
import NoteHash from "../note-hash";
import HashtagFind from "../hashtag-find";
import { NoteSection, Title } from "./note-create";

import {
  Wrapper,
  Container,
  FlexColumn,
  Flex,
  NoteWrapper,
} from "../../box/absolute";

interface NewNote {
  id: number;
  title: string;
  modalIsOpen: boolean;
  hash: string[];
}

const Note = () => {
  const [stateInput, setStateInput] = useState("");

  const [note, setNote] = useState<NewNote[]>([]);

  const [hashtag, setHash] = useState<string[]>([]);

  const [filterInput, setFilterInput] = useState("");

  const [filtered, setFiltered] = useState<NewNote[]>([]);

  useEffect(() => {
    setFiltered(note);

    if (stateInput.includes("#")) {
      let result = stateInput.split(/(#[\w\d-]+)/gi);
      result = result.filter((i) => {
        return i.includes("#");
      });
      setHash(result);
    }
   
  }, [stateInput, note]);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: stateInput,
      modalIsOpen: false,
      hash: hashtag,
    };
    setNote([newNote, ...note]);
    setStateInput("");

    const text = document.querySelectorAll(".text");
    text.forEach((itemText) => {
      itemText.innerHTML = `<font color="#00FFFF">${itemText.textContent}</font>`;
    });
  };

  const colorChange = () => {
    const text = document.querySelectorAll(".text");

    text.forEach((textItem) => {
      note.forEach((noteItem) => {
        if (textItem.textContent === noteItem.title) {
          if (textItem?.textContent?.includes("#")) {
            let textHash = textItem?.textContent?.split(/(#[\w\d-]+)/gi);
            textHash = textHash.filter((i) => {
              return i.includes("#");
            });
            const colorHash = textHash.join("");
            textItem.innerHTML = textItem.innerHTML.replace(
              colorHash,
              `<font color="green">${colorHash}</font>`
            );
          }
        }
      });
    });
  };

  const colorSave = () => {
    const text = document.querySelectorAll(".text");
    text.forEach((itemText) => {
      itemText.innerHTML = `<font color="#00FFFF">${itemText.textContent}</font>`;
    });
  };

  const findHash = () => {
    note.forEach((noteItem) => {
      noteItem.hash.forEach((hashItem) => {
        if (filterInput === hashItem) {
          setFiltered([noteItem]);
        }
      });
    });
  };

  return (
    <NoteSection>
      <Title>My Notes</Title>
      <Wrapper>
        <NoteDesk
          value={stateInput}
          onChange={(e) => {
            setStateInput(e.target.value);
          }}
          onClick={addNote}
        />
      </Wrapper>
      {note.length > 0 && (
        <Container>
          {filtered.map((item) => (
            <FlexColumn key={item.id}>
              <NoteContext
                className="text"
                title={item.title}
                remove={() => {
                  setNote((note) =>
                    note.filter(
                      (removeElem) => removeElem.id !== item.id && removeElem
                    )
                  );
                }}
                watch={() => {
                  setNote((note) =>
                    note.map((moduleElem) =>
                      moduleElem.id === item.id
                        ? { ...moduleElem, modalIsOpen: true }
                        : moduleElem
                    )
                  );
                }}
              />
              {item.modalIsOpen === true && (
                <NoteModale
                  props={item.title}
                  onClick={() => {
                    setNote((note) =>
                      note.map((moduleElem) =>
                        moduleElem.id === item.id
                          ? { ...moduleElem, modalIsOpen: !true }
                          : moduleElem
                      )
                    );
                  }}
                />
              )}
              <NoteWrapper>
                <NoteChange
                  edit={() => {
                    setStateInput(item.title);
                    colorChange();
                  }}
                  save={() => {
                    setStateInput("");
                    setNote((note) =>
                      note.map((editElem) =>
                        editElem.id === item.id
                          ? { ...editElem, title: stateInput, hash: hashtag }
                          : editElem
                      )
                    );
                    colorSave();
                  }}
                />
                {item.title.includes("#") &&
                  item.hash.map((hash) => (
                    <Flex key={hash}>
                      <NoteHash hash={hash} />
                    </Flex>
                  ))}
              </NoteWrapper>
            </FlexColumn>
          ))}
          <Wrapper>
            <HashtagFind
              value={filterInput}
              onChange={(e) => {
                setFilterInput(e.target.value);
              }}
              findHash={findHash}
              onClick={() => {
                setFilterInput("");
                setFiltered(note);
              }}
            />
          </Wrapper>
        </Container>
      )}
    </NoteSection>
  );
};

export default Note;
