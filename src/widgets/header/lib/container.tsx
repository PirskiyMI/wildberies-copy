import { toggleMenu, useAppDispatch, useAppSelector, windowWidthSelector } from 'src/shared';
/* import { basketItemsTotalSelector } from 'src/entities/basket/basket-item'; */

import { Suspense, lazy } from 'react';

const MobileHeader = lazy(async () => {
   const { MobileHeader } = await import('../ui/mobile-header');
   return { default: MobileHeader };
});
const DesktopHeader = lazy(async () => {
   const { DesktopHeader } = await import('../ui/desktop-header');
   return { default: DesktopHeader };
});

export const HeaderContainer = () => {
   const windowWidth = useAppSelector(windowWidthSelector);
   /* const count = useAppSelector(basketItemsTotalSelector); */
   const dispatch = useAppDispatch();

   const openBurgerMenu = () => dispatch(toggleMenu());

   if (!windowWidth) {
      return null;
   }

   return (
      <Suspense>
         {windowWidth >= 1024 ? (
            <DesktopHeader count={1} openBurgerMenu={openBurgerMenu} />
         ) : (
            <MobileHeader />
         )}
      </Suspense>
   );
};
