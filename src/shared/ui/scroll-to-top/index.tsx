import { FC } from 'react';

import styles from './styles.module.scss';
import { Icon } from '..';

type Props = {
   className?: string;
};

export const ScrollToTop: FC<Props> = ({ className }) => {
   const classes = className ? `${className} ${styles.body}` : styles.body;

   const scrollUp = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <button className={classes} onClick={scrollUp}>
         <Icon icon="arrow" className={styles.body__icon}/>
      </button>
   );
};
