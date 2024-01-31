import { lazy } from 'react';

export const HomePage = lazy(() => import('src/pages/home-page'));
export const CategoryPage = lazy(() => import('src/pages/category-page'));
export const CartPage = lazy(() => import('src/pages/cart-page'));
export const NavigationPage = lazy(() => import('src/pages/navigation-page'));
export const ProfilePage = lazy(() => import('src/pages/profile-page'));
export const FavoritesPage = lazy(() => import('src/pages/favorites-page'));
