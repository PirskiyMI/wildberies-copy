import { FC } from 'react';

import styles from './styles.module.scss';

import { Icon } from '../icon';
import { useAppDispatch, useAppSelector } from '../../lib';
import { toggleMenu } from '../../model/slices/burgerSlice';

type Props = {
   className?: string;
};

export const Burger: FC<Props> = ({ className }) => {
   const { isOpen } = useAppSelector((state) => state.burgerReducer);
   const dispatch = useAppDispatch();

   const iconClasses = isOpen
      ? `${styles.burger__icon} ${styles.burger__icon_active}`
      : `${styles.burger__icon}`;

   const openMenuHandler = () => {
      dispatch(toggleMenu());
   };

   return (
      <button className={`${styles.burger} ${className}`} onClick={openMenuHandler}>
         <Icon icon="burger" className={iconClasses} />
      </button>
   );
};
