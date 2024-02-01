import { FC } from 'react';

import { Popup } from 'src/shared';

import styles from './styles.module.scss';
import { CreateCard } from 'src/features/card/ui';

type Props = {
   closeModal: () => void;
};

export const UserModal: FC<Props> = ({ closeModal }) => {
   return (
      <Popup className={styles.modal} clickHandler={closeModal}>
         <div className={styles.modal__body}>
            <h3 className={styles.modal__title}>Привязка карты</h3>
            <CreateCard closeModal={closeModal} />
         </div>
      </Popup>
   );
};
