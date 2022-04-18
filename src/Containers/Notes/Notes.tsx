import React, { ReactNode, useState } from 'react';
import { useDispatch } from 'react-redux';
import AddNote from '../../Components/AddNote';
import { Wrapper } from './utils.styled';

function Notes() {
  const [openModal, setOpenModal] = useState(false);

  let dispatch = useDispatch();

  const setOpenModalBox = () => {
    setOpenModal(true);
  };

  const setCloseModal = () => {
    setOpenModal(false);
  };

  const createNote = (target: ReactNode) => {
    console.log('hii');
    console.log(target);
  };

  return (
    <Wrapper>
      <AddNote
        active
        children={<div>hola</div>}
        openModal={setOpenModalBox}
        isOpen={openModal}
        closeModal={setCloseModal}
        createNote={(target) => createNote(target)}
      />
    </Wrapper>
  );
}

export default Notes;
