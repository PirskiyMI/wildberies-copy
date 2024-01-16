import { FC } from 'react';

import { Burger, Logo } from 'src/shared';

import styles from './styles.module.scss';

export const HeaderLabel: FC = () => {
   return (
      <div className={styles.label}>
         <Burger />
         <Logo />
      </div>
   );
};
