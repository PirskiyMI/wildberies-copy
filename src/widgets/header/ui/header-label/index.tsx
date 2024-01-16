import { FC } from 'react';

import styles from './styles.module.scss';

import { Burger, Logo } from '../../../../shared/ui';

export const HeaderLabel: FC = () => {
   return (
      <div className={styles.label}>
         <Burger />
         <Logo />
      </div>
   );
};
