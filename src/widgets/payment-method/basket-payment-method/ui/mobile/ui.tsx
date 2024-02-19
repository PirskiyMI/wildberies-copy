import { FC, memo } from 'react';

import { MobileCartTile } from 'src/shared';
import { UserPaymentCardShort } from 'src/entities/user';

import { MobilePaymentMethodPopUp } from '../pop-up';
import { useModal } from '../../lib/hooks';
import { IBasketPaymentMethod } from '../../lib/types/payment-method-pop-up';

export const BasketPaymentMethod: FC<IBasketPaymentMethod> = memo(({ mainCard, paymentInfo }) => {
   const { closePopUp, modalIsOpen, openModal, toggleType, modalType } = useModal();

   return (
      <div>
         <MobileCartTile
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
            <MobilePaymentMethodPopUp
               closePopUp={closePopUp}
               cardList={paymentInfo}
               type={modalType}
               toggleType={toggleType}
            />
         ) : null}
      </div>
   );
});
