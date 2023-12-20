import { FC } from 'react';
import styles from './UserDetailsIndicator.module.scss';

type Props = {
   value: string;
   title: string;
   isColored?: boolean;
   isRange?: boolean;
   className?: string;
};

export const UserDetailsIndicator: FC<Props> = ({
   title,
   value,
   isColored,
   isRange,
   className,
}) => {
   const classes = className ? `${styles.indicator} ${className}` : styles.indicator;
   const topClasses = isColored
      ? `${styles.indicator__top} ${styles.indicator__top_colored}`
      : styles.indicator__top;

   return (
      <article className={classes}>
         <div className={topClasses}>
            {isRange && <span>до</span>}
            {value}
         </div>
         <div className={styles.indicator__bottom}>{title}</div>
      </article>
   );
};
