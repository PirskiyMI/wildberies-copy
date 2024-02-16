import { Suspense } from 'react';

import { useAppSelector, windowWidthSelector } from 'src/shared';
import { DesktopCartPage, MobileCartPage } from 'src/pages/cart-page';
import { DesktopProfilePage, MobileProfilePage } from 'src/pages/profile-page/ui';

import { CategoryPage, FavoritesPage, HomePage, NavigationPage } from './lazy-components';

export const useRoutes = () => {
   const windowWidth = useAppSelector(windowWidthSelector);

   const routes = [
      { index: true, path: '/', element: <HomePage /> },
      {
         index: false,
         path: 'cart',
         element: (
            <Suspense fallback="Loading...">
               {windowWidth && windowWidth >= 1024 ? <DesktopCartPage /> : <MobileCartPage />}
            </Suspense>
         ),
      },
      { index: false, path: 'favorites', element: <FavoritesPage /> },
      {
         index: false,
         path: 'profile',
         element: (
            <Suspense fallback="Loading ProfilePage">
               {windowWidth && windowWidth >= 1024 ? <DesktopProfilePage /> : <MobileProfilePage />}
            </Suspense>
         ),
      },
      { index: false, path: 'navigation', element: <NavigationPage /> },
      { index: false, path: 'catalog/:category', element: <CategoryPage /> },
   ];

   return routes;
};
