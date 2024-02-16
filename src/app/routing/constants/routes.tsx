import { Suspense } from 'react';
import { DesktopCartPage, MobileCartPage } from 'src/pages/cart-page';
import {
   CategoryPage,
   FavoritesPage,
   HomePage,
   NavigationPage,
   ProfilePage,
} from './lazy-components';
import { useAppSelector, windowWidthSelector } from 'src/shared';

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
      { index: false, path: 'profile', element: <ProfilePage /> },
      { index: false, path: 'navigation', element: <NavigationPage /> },
      { index: false, path: 'catalog/:category', element: <CategoryPage /> },
   ];

   return routes;
};
