import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { setSearch, useAppDispatch } from 'src/shared';

export const Logo: FC = () => {
   const dispatch = useAppDispatch()

   const clickHandler = () => {
      dispatch(setSearch(''))
  }

   return (
      <Link to="/" className={styles.logo} onClick={clickHandler}>
         MM.Ru
      </Link>
   );
};
