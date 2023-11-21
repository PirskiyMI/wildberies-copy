import { FC } from 'react';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';
import { Icon } from '../../../shared/ui';
import { IMenuList } from '../model/models';
import { useAppSelector } from '../../../shared/lib';

type MenuProps = {
   links: IMenuList[];
};

export const Menu: FC<MenuProps> = ({ links }) => {
   const { isOpen } = useAppSelector((state) => state.burgerReducer);

   return (
      <>
         <nav className={`${styles.menu} ${isOpen && styles.menu_active}`}>
            <ul className={styles.menu__list}>
               {links.map((el) => (
                  <li key={el.id} className={styles.menu__item}>
                     <Link to={`/catalog/${el.id}`} className={styles.menu__link}>
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
