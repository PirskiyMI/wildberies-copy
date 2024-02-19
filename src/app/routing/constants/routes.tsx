import { Suspense } from 'react';

import { Preloader, useAppSelector } from 'src/shared';
import { DesktopCartPage, MobileCartPage } from 'src/pages/cart-page';
import { DesktopProfilePage, MobileProfilePage } from 'src/pages/profile-page/ui';
import { clientTypeSelector } from 'src/shared/model/selectors/client-selectors';

import { CategoryPage, FavoritesPage, HomePage, NavigationPage } from './lazy-components';

export const useRoutes = () => {
   const clientType = useAppSelector(clientTypeSelector);

   const routes = [
      { index: true, path: '/', element: <HomePage /> },
      {
         index: false,
         path: 'cart',
         element: (
            <Suspense fallback={<Preloader />}>
               {clientType !== 'unknown' ? (
                  clientType === 'desktop' ? (
                     <DesktopCartPage />
                  ) : (
                     <MobileCartPage />
                  )
               ) : null}
            </Suspense>
         ),
      },
      { index: false, path: 'favorites', element: <FavoritesPage /> },
      {
         index: false,
         path: 'profile',
         element: (
            <Suspense fallback="Loading ProfilePage">
               {clientType !== 'unknown' ? (
                  clientType === 'desktop' ? (
                     <DesktopProfilePage />
                  ) : (
                     <MobileProfilePage />
                  )
               ) : null}
            </Suspense>
         ),
      },
      { index: false, path: 'navigation', element: <NavigationPage /> },
      { index: false, path: 'catalog/:category', element: <CategoryPage /> },
   ];

   return routes;
};
