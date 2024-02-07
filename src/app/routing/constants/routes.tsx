import {
   CartPage,
   CategoryPage,
   FavoritesPage,
   HomePage,
   NavigationPage,
   ProfilePage,
} from './lazy-components';

export const routes = [
   { index: true, path: '/', element: <HomePage /> },
   { index: false, path: 'cart', element: <CartPage /> },
   { index: false, path: 'favorites', element: <FavoritesPage /> },
   { index: false, path: 'profile', element: <ProfilePage /> },
   { index: false, path: 'navigation', element: <NavigationPage /> },
   { index: false, path: 'catalog/:category', element: <CategoryPage /> },
];
