import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss';

type Props = {
   children: ReactNode;
   closeModal: () => void;
   className?: string;
};

const modalElement = document.getElementById('modal')!;

export const Popup: FC<Props> = ({ children, closeModal, className }) => {
   const classes = className ? `${styles.modal__wrapper} ${className}` : styles.modal__wrapper;

   return createPortal(
      <div className={styles.modal} onClick={closeModal}>
         <div
            className={classes}
            onClick={(e) => {
               e.stopPropagation();
            }}>
            {children}
         </div>
      </div>,
      modalElement,
   );
};
