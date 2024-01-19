import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Tile } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   className?: string;
};

export const ProfileChecksMobile: FC<Props> = ({ className }) => {
   const classes = className ? `${className} ${styles.checks}` : styles.checks;

   return (
      <Tile className={classes}>
         <Link to="/profile/user" className={styles.checks__wrapper}>
            <h2 className={styles.checks__title}>Чеки</h2>
         </Link>
      </Tile>
   );
};
