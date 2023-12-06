import { FC } from 'react';
import { Icon as TIcon, useAppSelector } from '../../../lib';
import { Link } from 'react-router-dom';
import styles from './ProfileLink.module.scss';
import { Icon } from '../..';

type Props = {
   icon: TIcon;
   path: string;
   title: string;
};

export const ProfileLink: FC<Props> = ({ icon, path, title }) => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   if (windowWidth >= 1200) {
      return (
         <Link to={path} className={styles.link}>
            <Icon icon={icon} className={styles.link__icon} />
            <span className={styles.link__title}>{title}</span>
         </Link>
      );
   } else if (windowWidth >= 1024) {
      return (
         <Link to={path} className={styles.link}>
            <span className={styles.link__title}>{title}</span>
         </Link>
      );
   }

   return null;
};
