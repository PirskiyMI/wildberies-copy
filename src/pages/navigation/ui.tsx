import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'src/shared';
import { menuList } from './config';
import styles from './styles.module.scss'

const Navigation: FC = () => {
   return <nav className={styles.menu}>
      <ul className={styles.menu__list}>
         {  menuList.map((el) => (
            <li key={el.id} className={styles.menu__item}>
               <Link to={`/catalog/${el.id}`} className={styles.menu__link}>
               <Icon icon={el.icon} className={styles.menu__icon}/>
                  {el.title}
               </Link>
            </li>
         )
         )}
      </ul>
   </nav>;
};

export default Navigation;
