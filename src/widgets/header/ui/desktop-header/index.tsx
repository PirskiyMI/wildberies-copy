import { toggleMenu, useAppDispatch, useAppSelector } from 'src/shared';
/* import { basketItemsTotalSelector } from 'src/entities/basket/basket-item'; */
import { basketItemsTotalSelector } from 'src/entities/basket/basket-item';

import { Header } from './ui';

export const HeaderContainer = () => {
   const count = useAppSelector(basketItemsTotalSelector);
   const dispatch = useAppDispatch();

   const openBurgerMenu = () => dispatch(toggleMenu());

   return <Header count={count} openBurgerMenu={openBurgerMenu} />;
};
