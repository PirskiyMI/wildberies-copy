import { FC } from 'react';
import styles from './Burger.module.scss';
import { openMenu } from '../../model';
import { Icon } from '../icon/Icon';
import { useAppDispatch } from '../../lib';

export const Burger: FC = () => {
   const dispatch = useAppDispatch();

   const openMenuHandler = () => {
      dispatch(openMenu());
   };

   return (
      <button className={styles.burger} onClick={openMenuHandler}>
         <Icon icon="burger" className={styles.burger__icon} />
      </button>
   );
};
