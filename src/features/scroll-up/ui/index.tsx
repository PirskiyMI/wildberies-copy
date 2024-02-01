import { FC } from 'react';

import { ButtonArrow } from 'src/shared';

import styles from './styles.module.scss';

export const ScrollUp: FC = () => {
   const scrollUp = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return <ButtonArrow clickHandler={scrollUp} className={styles.button} />;
};
