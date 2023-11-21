import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import { Burger } from '../../../shared/ui';

export const HeaderLabel: FC = () => {
   return (
      <div className={styles.label}>
         <Burger />
         <Link to="/" className={styles.label__logo}>
            Товары и точка
         </Link>
      </div>
   );
};
