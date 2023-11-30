import { FC } from 'react';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

export const Logo: FC = () => {
   return (
      <Link to="/" className={styles.logo}>
         Товары и точка
      </Link>
   );
};
