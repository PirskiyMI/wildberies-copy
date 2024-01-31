import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from '../shared/lib';
import { Layout } from './layout';
import { lazy, useEffect } from 'react';

const HomePage = lazy(() => import('./home-page'));
const CategoryPage = lazy(() => import('./category-page'));
const CartPage = lazy(() => import('./cart-page'));
const NavigationPage = lazy(() => import('./navigation-page'));
const ProfilePage = lazy(() => import('./profile-page'));
const FavoritesPage = lazy(() => import('./favorites-page'));

const Routing = () => {
   const { isOpen: isBurgerOpen } = useAppSelector((state) => state.burgerReducer);
   const isHidden = isBurgerOpen;

   useEffect(() => {
      isHidden ? document.body.classList.add('hidden') : document.body.classList.remove('hidden');
   }, [isHidden]);

   return (
      <div className="wrapper">
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<HomePage />} />
               <Route path="cart" element={<CartPage />} />
               <Route path="catalog/:category" element={<CategoryPage />} />
               <Route path="navigation" element={<NavigationPage />} />
               <Route path="favorites" element={<FavoritesPage />} />
               <Route path="profile" element={<ProfilePage />} />
            </Route>
         </Routes>
      </div>
   );
};

export default Routing;
