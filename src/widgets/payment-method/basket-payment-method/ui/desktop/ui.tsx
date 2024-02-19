import { FC, Suspense, memo } from 'react';

import { DesktopCartTile } from 'src/shared';
import { UserPaymentCardShort } from 'src/entities/user';

import { DesktopPaymentMethodPopUp } from '../pop-up';
import { useModal } from '../../lib/hooks';
import { IBasketPaymentMethod } from '../../lib/types/basket-payment-method-pop-up';

export const BasketPaymentMethod: FC<IBasketPaymentMethod> = memo(({ mainCard, paymentInfo }) => {
   const { closePopUp, modalIsOpen, openModal, toggleType, modalType } = useModal();

   return (
      <div>
         <DesktopCartTile
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
         <Suspense>
            {modalIsOpen ? (
               <DesktopPaymentMethodPopUp
                  closePopUp={closePopUp}
                  cardList={paymentInfo}
                  type={modalType}
                  toggleType={toggleType}
               />
            ) : null}
         </Suspense>
      </div>
   );
});
