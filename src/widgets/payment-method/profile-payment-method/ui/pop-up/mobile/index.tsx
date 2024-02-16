import { FC } from 'react';

import { PopUp } from 'src/shared';

import styles from './styles.module.scss';
import { CreateCard } from 'src/features/card/create-card';

type Props = {
   closePopUp: () => void;
};

export const PaymentMethodPopUp: FC<Props> = ({ closePopUp }) => {
   return (
      <PopUp className={styles.modal} closePopUp={closePopUp}>
         <div>
            <h3 className={styles.modal__title}>Привязка карты</h3>
            <CreateCard closePopUp={closePopUp} />
         </div>
      </PopUp>
   );
};
