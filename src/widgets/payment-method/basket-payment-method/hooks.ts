import { useState } from 'react';
import { useAppSelector } from 'src/shared';

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

export const usePaymentMethods = () => {
   const { paymentInfo } = useAppSelector((state) => state.userReducer);
   const cardArray = [...paymentInfo].map((el) => ({
      id: el.id,
      cardNumber: el.cardNumber,
      isMain: el.isMain,
   }));
   const selectedCard = paymentInfo.find((el) => el.isMain)?.cardNumber;

   return { cardArray, selectedCard };
};
