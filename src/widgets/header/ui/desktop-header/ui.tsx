import { FC } from 'react';

import { DesktopBurger, DesktopLinkNav, Logo } from 'src/shared';
import { DesktopProductSearch } from 'src/features/product/product-search';

import styles from './styles.module.scss';
import { menuLinkList } from '../../constants';
import { IDesktopHeaderProps } from '../../types';

export const Header: FC<IDesktopHeaderProps> = ({ count, openBurgerMenu }) => {
   return (
      <header className={styles.header}>
         <div className={`${styles.header__container} container`}>
            <div className={styles.header__label}>
               <DesktopBurger clickHandler={openBurgerMenu} />
               <Logo />
            </div>

            <DesktopProductSearch />

            <nav>
               <ul className={styles.header__list}>
                  {menuLinkList.map(({ icon, to, isCount, label }) => (
                     <li key={icon}>
                        {isCount ? (
                           <DesktopLinkNav
                              icon={icon}
                              path={to}
                              label={label}
                              count={count ? count : null}
                           />
                        ) : (
                           <DesktopLinkNav icon={icon} path={to} label={label} />
                        )}
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
      </header>
   );
};
