import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useAppDispatch, useAppSelector, closeMenu, Icon } from 'src/shared';

import styles from './styles.module.scss';
import { menuList } from '../config';

export const NavMenu: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const { isOpen } = useAppSelector((state) => state.burgerReducer);
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(closeMenu());
   };

   if (!windowWidth) {
      return null;
   }

   if (windowWidth >= 1024) {
      return (
         <>
            {isOpen && <div className={styles.backdrop} onClick={clickHandler}></div>}
            {isOpen && (
               <motion.nav
                  initial={{ top: '0%', left: '-100%' }}
                  animate={{ left: '0%' }}
                  exit={{ left: '-100%' }}
                  className={styles.menu}>
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
               </motion.nav>
            )}
         </>
      );
   }

   return (
      <nav className={styles.menu}>
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
   );
};
