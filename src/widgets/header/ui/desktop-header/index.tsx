import { memo, useCallback } from 'react';

import {
   authPath,
   cartPath,
   favoritesPath,
   profilePath,
   toggleMenu,
   useAppDispatch,
   useAppSelector,
} from 'src/shared';
import { basketItemsTotalSelector } from 'src/entities/basket/basket-item';
import { userIsAuthSelector } from 'src/entities/user/model/selectors/user-is-auth-selector';

import { Header } from './ui';
import { IHeaderLink } from '../../types';

export const HeaderContainer = memo(() => {
   const count = useAppSelector(basketItemsTotalSelector);
   const isAuth = useAppSelector(userIsAuthSelector);
   const dispatch = useAppDispatch();

   const openBurgerMenu = useCallback(() => dispatch(toggleMenu()), [dispatch]);

   const menuLinkList: IHeaderLink[] = isAuth
      ? [
           { icon: 'heart', to: favoritesPath, label: 'Избранное' },
           { icon: 'user', to: profilePath, label: 'Профиль' },
           { icon: 'cart', to: cartPath, label: 'Корзина', isCount: true },
        ]
      : [
           { icon: 'user', to: authPath, label: 'Войти' },
           { icon: 'cart', to: cartPath, label: 'Корзина', isCount: true },
        ];

   return <Header count={count} openBurgerMenu={openBurgerMenu} links={menuLinkList} />;
});
