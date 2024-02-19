import { toggleMenu, useAppDispatch, useAppSelector } from 'src/shared';
import { basketItemsTotalSelector } from 'src/entities/basket/basket-item';

import { Header } from './ui';
import { memo, useCallback } from 'react';

export const HeaderContainer = memo(() => {
   const count = useAppSelector(basketItemsTotalSelector);
   const dispatch = useAppDispatch();

   const openBurgerMenu = useCallback(() => dispatch(toggleMenu()), [dispatch]);

   return <Header count={count} openBurgerMenu={openBurgerMenu} />;
});
