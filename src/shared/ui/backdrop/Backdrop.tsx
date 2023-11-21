import { FC } from 'react';
import styles from './Backdrop.module.scss';
import { closeMenu, closeModal} from '../../model';
import { useAppDispatch, useAppSelector } from '../../lib';

export const Backdrop: FC = () => {
   const { isOpen: isBurgerOpen } = useAppSelector((state) => state.burgerReducer);
   const { isModalOpen } = useAppSelector((state) => state.modalReducer);
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      if (isBurgerOpen) dispatch(closeMenu());
      if (isModalOpen) dispatch(closeModal());
   };

   return <div className={styles.backdrop} onClick={clickHandler}></div>;
};
