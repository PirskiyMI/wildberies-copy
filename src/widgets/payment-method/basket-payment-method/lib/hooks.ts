import { useState } from 'react';
import { userPaymentInfoSelector } from 'src/entities/user';
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
   const paymentInfo = useAppSelector(userPaymentInfoSelector);
   const selectedCard = paymentInfo.find((el) => el.isMain)?.cardNumber;

   return { paymentInfo, selectedCard };
};
