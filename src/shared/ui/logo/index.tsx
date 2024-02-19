import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export const Logo: FC = memo(() => {
   return (
      <Link to="/" className={styles.logo}>
         MM.Ru
      </Link>
   );
});
