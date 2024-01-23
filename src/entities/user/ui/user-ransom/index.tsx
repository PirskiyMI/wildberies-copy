import { FC } from 'react';

import { useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   type: 'amount' | 'percent';
   className?: string;
};

export const UserRansom: FC<Props> = ({ type, className }) => {
   const { ransomAmount, redemptionPercentage } = useAppSelector((state) => state.userReducer);

   const classes = className ? `${className} ${styles.ransom}` : styles.ransom;

   switch (type) {
      case 'percent':
         return <span className={classes}>{redemptionPercentage}%</span>;
      case 'amount':
         return <span className={classes}>{ransomAmount} сом</span>;
      default:
         return null;
   }
};
