import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss';

type Props = {
   children: ReactNode;
   closePopUp: () => void;
   className?: string;
};

const popupElement = document.getElementById('pop-up')!;

export const PopUp: FC<Props> = ({ children, closePopUp, className }) => {
   const classes = className ? `${styles.popup__wrapper} ${className}` : styles.popup__wrapper;

   return createPortal(
      <div className={styles.popup} onClick={closePopUp}>
         <div
            className={classes}
            onClick={(e) => {
               e.stopPropagation();
            }}>
            {children}
         </div>
      </div>,
      popupElement,
   );
};
