import { FC, ReactElement, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
   top?: ReactNode;
   middle?: ReactElement;
   bottom?: ReactNode;
   className?: string;
};

export const ProductItemCard: FC<Props> = ({ top, middle, bottom, className }) => {
   const classes = className ? `${className} ${styles.card}` : styles.card;

   return (
      <div className={classes}>
         <div className={styles.card__wrapper}>
            {top ? <div className={styles.card__top}>{top}</div> : null}
            {middle ? <div className={styles.card__middle}>{middle}</div> : null}
            {bottom ? <div className={styles.card__bottom}>{bottom}</div> : null}
         </div>
      </div>
   );
};
