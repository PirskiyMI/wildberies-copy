import { FC } from 'react';
import styles from './Burger.module.scss';
import { Icon } from '../icon/Icon';
import { useAppDispatch } from '../../lib';
import { toggleMenu } from '../../model/slices/burgerSlice';

type Props = {
   className?: string;
};

export const Burger: FC<Props> = ({ className }) => {
   const dispatch = useAppDispatch();

   const openMenuHandler = () => {
      dispatch(toggleMenu());
   };

   return (
      <button className={`${styles.burger} ${className}`} onClick={openMenuHandler}>
         <Icon icon="burger" className={styles.burger__icon} />
      </button>
   );
};
