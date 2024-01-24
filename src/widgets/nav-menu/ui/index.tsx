import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector, closeMenu, Icon } from 'src/shared';

import styles from './styles.module.scss';
import { menuList } from '../config';

export const NavigationMenu: FC = () => {
   const { isOpen } = useAppSelector((state) => state.burgerReducer);
   const classes = isOpen ? styles.menu : `${styles.menu} ${styles.menu_hidden}`;
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(closeMenu());
   };

   return (
      <>
         {isOpen && <div className={styles.backdrop} onClick={clickHandler}></div>}
         <nav className={classes}>
            <ul className={styles.menu__list}>
               {menuList.map((el) => (
                  <li key={el.id} className={styles.menu__item}>
                     <Link
                        to={`/catalog/${el.id}`}
                        className={styles.menu__link}
                        onClick={clickHandler}>
                        <Icon icon={el.icon} className={styles.menu__icon} />
                        {el.title}
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
      </>
   );
};
