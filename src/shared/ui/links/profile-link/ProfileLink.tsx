import { FC } from 'react';
import { Icon as TIcon } from '../../../lib';
import { Link } from 'react-router-dom';
import styles from './ProfileLink.module.scss';
import { Icon } from '../..';

type Props = {
   icon: TIcon;
   path: string;
   title: string;
};

export const ProfileLink: FC<Props> = ({ icon, path, title }) => {
   return (
      <Link to={path} className={styles.link}>
         <Icon icon={icon} className={styles.link__icon} />
         <span className={styles.link__title}>{title}</span>
      </Link>
   );
};
