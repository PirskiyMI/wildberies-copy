import { FC, memo } from 'react';

import { CartTile } from 'src/shared';
import { UserPaymentCardShort } from 'src/entities/user';

import { PaymentMethodPopUp } from './pop-up';
import { useModal } from '../lib/hooks';
import { IBasketPaymentMethod } from '../lib/types/payment-method-pop-up';

export const BasketPaymentMethod: FC<IBasketPaymentMethod> = memo(({ mainCard, paymentInfo }) => {
   const { closePopUp, modalIsOpen, openModal, toggleType, modalType } = useModal();

   return (
      <div>
         <CartTile
            title="Способ оплаты"
            content={
               paymentInfo.length ? (
                  <UserPaymentCardShort cardNumber={mainCard!} numberVisible />
               ) : (
                  <button>Выбрать способ оплаты</button>
               )
            }
            clickHandle={openModal}
         />
         {modalIsOpen ? (
            <PaymentMethodPopUp
               closePopUp={closePopUp}
               cardList={paymentInfo}
               type={modalType}
               toggleType={toggleType}
            />
         ) : null}
      </div>
   );
});
