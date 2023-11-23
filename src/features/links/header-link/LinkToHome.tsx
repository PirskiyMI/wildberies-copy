import { FC } from 'react';
import styles from './Link.module.scss';
import { Link } from 'react-router-dom';
import { Icon } from '../../../shared/ui';

export const LinkToHome: FC = () => {
   return (
      <Link to="/" className={styles.link__link}>
         <div className={styles.link__body}>
            <Icon icon={'home'} className={styles.link__icon} />
         </div>
      </Link>
   );
};
