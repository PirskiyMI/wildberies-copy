import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Tile } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   path: string;
   title: ReactNode;
   content?: ReactNode;
   className?: string;
};

export const ProfileItem: FC<Props> = ({ path, title, content, className }) => {
   const classes = className ? `${className} ${styles.item}` : styles.item;

   return (
      <Tile className={classes}>
         <Link className={styles.item__wrapper} to={path}>
            <div className={styles.item__title}>{title}</div>
            <div className={styles.item__content}>{content}</div>
         </Link>
      </Tile>
   );
};
