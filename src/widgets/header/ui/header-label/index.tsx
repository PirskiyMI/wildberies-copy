import { FC } from 'react';

import { Burger, Logo, setSearch, toggleMenu, useAppDispatch } from 'src/shared';

import styles from './styles.module.scss';

export const HeaderLabel: FC = () => {
   const dispatch = useAppDispatch();
   const openBurgerMenu = () => dispatch(toggleMenu());


   return (
      <div className={styles.label}>
         <Burger clickHandler={openBurgerMenu} />
         <Logo />
      </div>
   );
};
