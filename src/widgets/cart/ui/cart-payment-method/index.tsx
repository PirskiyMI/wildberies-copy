import { FC, useState } from 'react';

import { UserPaymentCardBasket } from 'src/entities/user';
import { useAppSelector } from 'src/shared';

import { CartItem } from '../cart-item';
import { CartModal } from '../cart-modal';

export const CartPaymentMethod: FC = () => {
   const { paymentInfo } = useAppSelector((state) => state.userReducer);
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [modalType, setModalType] = useState<'select' | 'form'>('select');

   const cardArray = [...paymentInfo].map((el) => ({
      id: el.id,
      cardNumber: el.cardNumber,
      isMain: el.isMain,
   }));

   const selectedCard = paymentInfo.find((el) => el.isMain)?.cardNumber;

   const openModal = () => {
      setModalIsOpen(true);
   };
   const closeModal = () => {
      setModalIsOpen(false);
      setModalType('select');
   };

   const toggleType = () => {
      modalType === 'form' ? setModalType('select') : setModalType('form');
   };

   return (
      <div>
         <CartItem
            title="Способ оплаты"
            content={
               paymentInfo.length ? (
                  <UserPaymentCardBasket cardNumber={selectedCard!} numberVisible />
               ) : (
                  <button>Выбрать способ оплаты</button>
               )
            }
            clickHandle={openModal}
         />
         {modalIsOpen ? (
            <CartModal
               closeModal={closeModal}
               cardList={cardArray}
               type={modalType}
               toggleType={toggleType}
            />
         ) : null}
      </div>
   );
};
