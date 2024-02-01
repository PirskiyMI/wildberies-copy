import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../..';
import styles from './styles.module.scss';

type Props = {
   path: string;
   icon: 'burger' | 'cart' | 'user' | 'heart' | 'home';
   label?: string;
   count?: number | null;
};

export const HeaderLink: FC<Props> = ({ icon, path, label, count }) => {
   return (
      <NavLink
         to={path}
         className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.link_active}` : `${styles.link}`
         }>
         <div className={styles.link__body}>
            <div className={styles.link__wrapper}>
               <Icon icon={icon} className={styles.link__icon} />
               {count && count > 0 && <div className={styles.link__count}>{count}</div>}
            </div>
            {label && <span className={styles.link__label}>{label}</span>}
         </div>
      </NavLink>
   );
};
