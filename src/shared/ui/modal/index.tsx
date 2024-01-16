import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss';

import { useAppDispatch } from '../../lib';
import { closeModal } from '../../model';

type Props = {
   children: ReactNode;
   clickHandler?: Dispatch<SetStateAction<boolean>>;
   className?: string;
};

const modalElement = document.getElementById('modal')!;

export const Modal: FC<Props> = ({ children, className, clickHandler }) => {
   const classes = className ? `${styles.modal__wrapper} ${className}` : styles.modal__wrapper;
   const dispatch = useAppDispatch();

   const closeModalHandler = () => {
      if (clickHandler) {
         clickHandler(false);
      }
      dispatch(closeModal());
   };

   return createPortal(
      <div className={styles.modal} onClick={closeModalHandler}>
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
