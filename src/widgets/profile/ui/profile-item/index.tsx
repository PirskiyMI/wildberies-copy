import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Tile } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   path: string;
   title: ReactNode;
   label?: ReactNode;
   content?: ReactNode;
   className?: string;
};

export const ProfileItem: FC<Props> = ({ path, title, label, content, className }) => {
   const classes = className ? `${className} ${styles.item}` : styles.item;

   return (
      <Tile className={classes}>
         <Link className={styles.item__wrapper} to={path}>
            <div className={styles.item__body}>
               <div className={styles.item__title}>{title}</div>
               {label ? <div className={styles.item__label}>{label}</div> : null}
            </div>
            {content ? <div className={styles.item__content}>{content}</div> : null}
         </Link>
      </Tile>
   );
};
