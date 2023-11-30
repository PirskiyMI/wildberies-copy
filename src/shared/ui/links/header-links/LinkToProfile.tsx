import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../..';
import styles from './Link.module.scss';

export const LinkToProfile: FC = () => {
   return (
      <Link to="/profile" className={styles.link__link}>
         <div className={styles.link__body}>
            <Icon icon={'user'} className={styles.link__icon} />
            <span className={styles.link__label}>Профиль</span>
         </div>
      </Link>
   );
};
