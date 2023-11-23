import { FC } from 'react';
import styles from './Burger.module.scss';
import { openMenu } from '../../model';
import { Icon } from '../icon/Icon';
import { useAppDispatch } from '../../lib';

type Props = {
   className?: string;
};

export const Burger: FC<Props> = ({ className }) => {
   const dispatch = useAppDispatch();

   const openMenuHandler = () => {
      dispatch(openMenu());
   };

   return (
      <button className={`${styles.burger} ${className}`} onClick={openMenuHandler}>
         <Icon icon="burger" className={styles.burger__icon} />
      </button>
   );
};
