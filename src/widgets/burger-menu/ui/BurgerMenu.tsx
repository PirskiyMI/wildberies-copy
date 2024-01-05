import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { useAppDispatch, useAppSelector } from '../../../shared/lib';
import { Icon } from '../../../shared/ui';
import { closeMenu } from '../../../shared/model';

import { IMenuList } from '../model/types';

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
