import { FC } from 'react';

import { Modal } from 'src/shared';
import { AddUserCard } from 'src/features/user';

import styles from './styles.module.scss';

type Props = {
   closeModal: () => void;
};

export const UserModal: FC<Props> = ({ closeModal }) => {
   return (
      <Modal className={styles.modal} clickHandler={closeModal}>
         <div className={styles.modal__body}>
            <h3 className={styles.modal__title}>Привязка карты</h3>
            <AddUserCard closeModal={closeModal} />
         </div>
      </Modal>
   );
};
