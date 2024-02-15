import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

type Props = {
   path: string;
   title: ReactNode;
   label?: ReactNode;
   content?: ReactNode;
   className?: string;
};

export const ProfileTile: FC<Props> = ({ path, title, label, content, className }) => {
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
