/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
import {
  FC, PropsWithChildren, ReactChild, ReactChildren, ReactNode,
} from 'react';
import {
  AddNoteTile, AddTitle, IconButton, IconButtonClose, IconButtonImg, NoteBody,
} from './utils.styled';
import PinIcon from '../../Assets/pin.svg';
import ArchieveIcon from '../../Assets/archive.svg';
import AddImg from '../../Assets/image.svg';

type Props = {
  active: boolean;
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
  createNote: (target: ReactNode) => void
};

const AddNote: FC<Props> = ({
  active, openModal, isOpen, closeModal, createNote,
}) => (
  <AddNoteTile>
    {isOpen ? (
      <form
        onSubmit={(e) => createNote(e.target)}
      >
        <div
          style={{ padding: '1em 0px' }}
        >
          <div
            style={{ display: 'flex' }}
          >
            <AddTitle
              placeholder="Title"
            />
            <IconButton
              type="button"
            >
              <IconButtonImg
                src={PinIcon}
                alt="Pin"
              />
            </IconButton>
          </div>
          <NoteBody
            placeholder="Take a note..."
            autoFocus
          />
          <div
            style={{ display: 'flex' }}
          >
            <IconButton
              type="button"
            >
              <IconButtonImg
                src={AddImg}
                alt="Pin"
              />
              <input
                type="file"
                name="PostPic"
                id="PostPic"
                accept="image/*"
                className={classes.PostPic}
                onChange={uploadPic}
              />

            </IconButton>
            <IconButton
              type="button"
            >
              <IconButtonImg
                src={ArchieveIcon}
                alt="Pin"
              />
            </IconButton>
            <div
              style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <IconButtonClose
                onClick={closeModal}
                value="Close"
                type="submit"
              />

            </div>
          </div>
        </div>
      </form>
    ) : (
      <p
        style={{ width: '100%' }}
        onClick={openModal}
      >
        Add title to your Note
      </p>
    )}
  </AddNoteTile>
);

export default AddNote;
