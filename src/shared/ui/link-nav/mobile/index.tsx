import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';
import { Icon } from '../..';
import { ILinkNavProps } from 'src/shared/lib/types/types-ui/link-nav-types';


export const LinkNav: FC<ILinkNavProps> = memo(({ icon, path, count }) => {
   const classes = (isActive: boolean) =>
      isActive ? `${styles.link} ${styles.link_active}` : `${styles.link}`;

   return (
      <NavLink to={path} className={({ isActive }) => classes(isActive)}>
         <div className={styles.link__body}>
            <div className={styles.link__wrapper}>
               <Icon icon={icon} className={styles.link__icon} />
               {count && count > 0 && <div className={styles.link__count}>{count}</div>}
            </div>
         </div>
      </NavLink>
   );
});
