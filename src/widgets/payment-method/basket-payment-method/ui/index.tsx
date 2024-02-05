import { FC, memo } from 'react';

import { UserPaymentCardBasket } from 'src/entities/user';
import { CartTile } from 'src/shared';

import { PaymentMethodPopUp } from './pop-up';
import { useModal, usePaymentMethods } from '../hooks';

export const BasketPaymentMethod: FC = memo(() => {
   const { closePopUp, modalIsOpen, openModal, toggleType, modalType } = useModal();
   const { cardArray, selectedCard } = usePaymentMethods();

   return (
      <div>
         <CartTile
            title="Способ оплаты"
            content={
               cardArray.length ? (
                  <UserPaymentCardBasket cardNumber={selectedCard!} numberVisible />
               ) : (
                  <button>Выбрать способ оплаты</button>
               )
            }
            clickHandle={openModal}
         />
         {modalIsOpen ? (
            <PaymentMethodPopUp
               closePopUp={closePopUp}
               cardList={cardArray}
               type={modalType}
               toggleType={toggleType}
            />
         ) : null}
      </div>
   );
});
