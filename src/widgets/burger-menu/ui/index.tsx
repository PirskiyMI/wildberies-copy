import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector, closeMenu, Icon } from 'src/shared';

import styles from './styles.module.scss';

import { IMenuList } from '../model';

type Props = {
   links: IMenuList[];
};

export const BurgerMenu: FC<Props> = ({ links }) => {
   const { isOpen } = useAppSelector((state) => state.burgerReducer);
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(closeMenu());
   };

   return (
      <>
         {isOpen && <div className={styles.burger} onClick={clickHandler}></div>}
         <nav className={`${styles.menu} ${isOpen && styles.menu_active}`}>
            <ul className={styles.menu__list}>
               {links.map((el) => (
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
