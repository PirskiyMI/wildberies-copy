import { FC } from 'react';

import { DesktopBurger, LinkNav, Logo } from 'src/shared';
import { ProductSearch } from 'src/features/product/product-search';

import styles from './styles.module.scss';
import { menuLinkList } from '../../constants';
import { IDesktopHeaderProps } from '../../lib/types';

export const DesktopHeader: FC<IDesktopHeaderProps> = ({ count, openBurgerMenu }) => {
   return (
      <header className={styles.header}>
         <div className={`${styles.header__container} container`}>
            <div className={styles.header__label}>
               <DesktopBurger clickHandler={openBurgerMenu} />
               <Logo />
            </div>

            <ProductSearch />

            <nav>
               <ul className={styles.header__list}>
                  {menuLinkList.map(({ icon, to, isCount, label }) => (
                     <li key={icon}>
                        {isCount ? (
                           <LinkNav
                              icon={icon}
                              path={to}
                              label={label}
                              count={count ? count : null}
                           />
                        ) : (
                           <LinkNav icon={icon} path={to} label={label} />
                        )}
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
      </header>
   );
};
