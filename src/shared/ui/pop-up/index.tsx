import { FC } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss';
import { IPopUpProps } from '../../lib/types/types-ui/pop-up-types';

const popupElement = document.getElementById('pop-up')!;

export const PopUp: FC<IPopUpProps> = ({ children, closePopUp, className }) => {
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
