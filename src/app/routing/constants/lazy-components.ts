import { lazy } from 'react';

export const HomePage = lazy(async () => {
   const { HomePage } = await import('src/pages/home-page');
   return { default: HomePage };
});
export const CartPage = lazy(async () => {
   const { CartPage } = await import('src/pages/cart-page');
   return { default: CartPage };
});
export const CategoryPage = lazy(async () => {
   const { CategoryPage } = await import('src/pages/category-page');
   return { default: CategoryPage };
});
export const NavigationPage = lazy(async () => {
   const { NavigationPage } = await import('src/pages/navigation-page');
   return { default: NavigationPage };
});
export const ProfilePage = lazy(async () => {
   const { ProfilePage } = await import('src/pages/profile-page');
   return { default: ProfilePage };
});
export const FavoritesPage = lazy(async () => {
   const { FavoritesPage } = await import('src/pages/favorites-page');
   return { default: FavoritesPage };
});
