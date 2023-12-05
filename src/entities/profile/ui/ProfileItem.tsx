import { FC, ReactNode } from 'react';
import styles from './ProfileItem.module.scss';
import { Link } from 'react-router-dom';

type Props = {
   path: string;
   top: ReactNode;
   bottom?: ReactNode;
   className?: string;
};

type PropsLabel = {
   label: string;
   text?: string;
   className?: string;
};

export const ProfileItemLabel: FC<PropsLabel> = ({ label, text, className }) => {
   const classes = className ? `${styles.item__bottom} ${className}` : `${styles.item__bottom}`;

   return (
      <div className={classes}>
         <span className={styles.item__label}>{label}</span>
         {text && <span>{text}</span>}
      </div>
   );
};

export const ProfileItem: FC<Props> = ({ path, top, bottom, className }) => {
   const classes = className ? `${styles.item} ${className}` : `${styles.item}`;

   return (
      <Link to={path} className={classes}>
         <div className={styles.item__top}>{top}</div>
         {bottom && <div className={styles.item__bottom}>{bottom}</div>}
      </Link>
   );
};
