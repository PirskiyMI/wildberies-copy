import { FC } from 'react';

import { useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   className?: string;
};

export const UserDiscount: FC<Props> = ({ className }) => {
   const { discount } = useAppSelector((state) => state.userReducer);

   const classes = className ? `${styles.discount} ${className}` : styles.discount;

   return (
      <div className={classes}>
         <span className={styles.discount__content}>
            <span className={styles.discount__text}>до</span> {discount}%
         </span>
      </div>
   );
};
