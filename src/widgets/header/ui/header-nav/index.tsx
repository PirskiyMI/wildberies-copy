import { FC, ReactNode } from 'react';

import { HeaderLink, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   dropDown?: ReactNode;
};

export const HeaderNavigation: FC<Props> = ({ dropDown }) => {
   const { count } = useAppSelector((state) => state.basketInfoReducer);

   return (
      <nav className={styles.navigation}>
         <ul className={styles.navigation__list}>
            <li>
               <HeaderLink icon="like" path="/profile/favorites" label="Избранное" />
            </li>
            <li className={dropDown ? styles.navigation__item : undefined}>
               <HeaderLink icon="user" path="/profile/user" label="Профиль" />
               {dropDown && <div className={styles.navigation__dropdown}>{dropDown}</div>}
            </li>
            <li>
               <HeaderLink
                  icon="cart"
                  path="/cart"
                  label="Корзина"
                  count={count > 0 ? count : null}
               />
            </li>
         </ul>
      </nav>
   );
};
