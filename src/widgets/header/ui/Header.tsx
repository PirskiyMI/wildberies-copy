import styles from './Header.module.scss';

import { FC } from 'react';

import { HeaderLabel } from './HeaderLabel';
import { HeaderForm } from './HeaderForm';
import { HeaderNavigation } from './HeaderNavigation';

export const Header: FC = () => {
   return (
      <header className={styles.header}>
         <div className={`${styles.header__container} container`}>
            <HeaderLabel />
            <HeaderForm />
            <HeaderNavigation />
         </div>
      </header>
   );
};
