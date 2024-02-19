import { useState } from 'react';

export const useModal = () => {
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [modalType, setModalType] = useState<'select' | 'form'>('select');

   const openModal = () => {
      setModalIsOpen(true);
   };
   const closePopUp = () => {
      setModalIsOpen(false);
      setModalType('select');
   };

   const toggleType = () => {
      modalType === 'form' ? setModalType('select') : setModalType('form');
   };

   return { modalIsOpen, modalType, toggleType, openModal, closePopUp };
};
