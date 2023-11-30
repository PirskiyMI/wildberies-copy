import { FC } from 'react';
import styles from './Link.module.scss';
import { Link } from 'react-router-dom';
import { Icon } from '../..';

export const LinkToFavorite: FC = () => {
   return (
      <Link to="#" className={styles.link__link}>
         <div className={styles.link__body}>
            <Icon icon={'like'} className={styles.link__icon} />
         </div>
      </Link>
   );
};
