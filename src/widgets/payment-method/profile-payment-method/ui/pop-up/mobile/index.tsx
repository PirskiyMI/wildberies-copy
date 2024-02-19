import { FC } from 'react';

import { PopUp } from 'src/shared';
import { CreateCard } from 'src/features/card/create-card';

import styles from './styles.module.scss';
import { IPaymentMethodPopUp } from '../../../types/profile-payment-method-pop-up';

export const PaymentMethodPopUp: FC<IPaymentMethodPopUp> = ({ closePopUp }) => {
   return (
      <PopUp className={styles.modal} closePopUp={closePopUp}>
         <div>
            <h3 className={styles.modal__title}>Привязка карты</h3>
            <CreateCard closePopUp={closePopUp} />
         </div>
      </PopUp>
   );
};
