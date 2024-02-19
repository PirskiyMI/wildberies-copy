import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { IProfileTileProps } from 'src/shared/lib/types/types-ui/profile-tile-types';



export const ProfileTile: FC<IProfileTileProps> = ({ path, title, label, content, className }) => {
   const classes = className ? `${className} ${styles.tile}` : styles.tile;

   return (
      <div className={classes}>
         <Link className={styles.tile__wrapper} to={path}>
            <div className={styles.tile__body}>
               <div className={styles.tile__title}>{title}</div>
               {label ? <div className={styles.tile__label}>{label}</div> : null}
            </div>
            {content ? <div className={styles.tile__content}>{content}</div> : null}
         </Link>
      </div>
   );
};
