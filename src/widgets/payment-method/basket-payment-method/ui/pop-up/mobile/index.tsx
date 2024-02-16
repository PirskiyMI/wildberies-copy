import { FC } from 'react';

import { Button, Icon, PopUp, MobileSection } from 'src/shared';
import { CreateCard } from 'src/features/card/create-card';
import { SetCardInBasket } from 'src/features/card/set-main-card';

import styles from './styles.module.scss';
import { IBasketPaymentMethodPopUp } from '../../../lib/types/basket-payment-method';

export const PaymentMethodPopUp: FC<IBasketPaymentMethodPopUp> = ({
   type,
   cardList,
   closePopUp,
   toggleType,
}) => {
   return (
      <PopUp closePopUp={closePopUp} className={styles.modal}>
         <MobileSection title={type === 'form' ? 'Привязать карту' : 'Способ оплаты'}>
            {type === 'form' ? (
               <>
                  <CreateCard closePopUp={closePopUp} />
                  <Button onClick={toggleType} className={styles.modal__button}>
                     Выбрать способ оплаты
                  </Button>
               </>
            ) : (
               <ul className={styles.modal__list}>
                  {cardList.map((el) => (
                     <li key={el.id} className={styles.modal__item}>
                        <SetCardInBasket cardNumber={el.cardNumber} id={el.id} />
                     </li>
                  ))}
                  <li onClick={toggleType} className={styles.modal__item}>
                     <div className={styles.modal__switcher}>
                        <Icon icon="card" className={styles.modal__icon} />
                        <span>Привязать карту</span>
                     </div>
                  </li>
               </ul>
            )}
         </MobileSection>
      </PopUp>
   );
};
