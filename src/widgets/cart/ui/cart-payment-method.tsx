import { FC, memo, useState } from 'react';

import { UserPaymentCardBasket } from 'src/entities/user';
import { CartTile, useAppSelector } from 'src/shared';

import { CartModal } from './cart-modal';

export const CartPaymentMethod: FC = memo(() => {
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
   const closePopUp = () => {
      setModalIsOpen(false);
      setModalType('select');
   };

   const toggleType = () => {
      modalType === 'form' ? setModalType('select') : setModalType('form');
   };

   return (
      <div>
         <CartTile
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
               closePopUp={closePopUp}
               cardList={cardArray}
               type={modalType}
               toggleType={toggleType}
            />
         ) : null}
      </div>
   );
});
