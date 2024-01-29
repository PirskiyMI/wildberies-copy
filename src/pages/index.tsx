import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from '../shared/lib';
import { Layout } from './Layout';
import { lazy, useEffect } from 'react';
import ErrorPage from './error';

const Home = lazy(() => import('./home'));
const Catalog = lazy(() => import('./catalog'));
const Cart = lazy(() => import('./cart'));
const Navigation = lazy(() => import('./navigation'));
const ProfileInfo = lazy(() => import('./profile/profile-info'));
const ProfileFavorites = lazy(() => import('./profile/profile-favorites'));

const Routing = () => {
   const { isOpen: isBurgerOpen } = useAppSelector((state) => state.burgerReducer);
   const { isModalOpen } = useAppSelector((state) => state.modalReducer);
   const isHidden = isBurgerOpen || isModalOpen;

   useEffect(() => {
      isHidden ? document.body.classList.add('hidden') : document.body.classList.remove('hidden');
   }, [isHidden]);

   return (
      <div className="wrapper">
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/catalog/:category" element={<Catalog />} />
               <Route path="/navigation" element={<Navigation />} />
            </Route>
            <Route path="/profile" element={<Layout />}>
               <Route path="/profile/user" element={<ProfileInfo />} />
               <Route path="/profile/favorites" element={<ProfileFavorites />} />
            </Route>
            <Route path="error" element={<ErrorPage />}></Route>
         </Routes>
      </div>
   );
};

export default Routing;
