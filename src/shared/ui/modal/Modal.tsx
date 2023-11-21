import { FC, ReactNode } from 'react';
import styles from './Modal.module.scss';

type ModalProps = {
   children: ReactNode;
};

export const Modal: FC<ModalProps> = ({ children }) => {
   return (
      <div className={styles.modal}>
         <div className={styles.modal__wrapper}>{children}</div>
      </div>
   );
};
