import { FC } from 'react';
import styles from './BurgerMenu.module.scss';
import { Link } from 'react-router-dom';
import { Icon } from '../../../shared/ui';
import { IMenuList } from '../model/types';
import { useAppDispatch, useAppSelector } from '../../../shared/lib';
import { closeMenu } from '../../../shared/model';

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
