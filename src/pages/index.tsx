import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from '../shared/lib';
import { Layout } from './Layout';
import { lazy, useEffect } from 'react';

const Home = lazy(() => import('./home'));
const Catalog = lazy(() => import('./catalog'));
const Cart = lazy(() => import('./cart'));
const Navigation = lazy(() => import('./navigation'));
const ProfileAppeals = lazy(() => import('./profile/profile-appeals'));
const ProfileFavorites = lazy(() => import('./profile/profile-favorites'));
const ProfileInfo = lazy(() => import('./profile/profile-info'));
const ProfileMain = lazy(() => import('./profile/profile-main'));
const ProfilePurchases = lazy(() => import('./profile/profile-purchases'));
const ProfileReviews = lazy(() => import('./profile/profile-reviews'));
const ProfileTravel = lazy(() => import('./profile/profile-travel'));
const ProfileDelivery = lazy(() => import('./profile/profile-delivery'));

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
               <Route index element={<ProfileMain />} />
               <Route path="/profile/appeals" element={<ProfileAppeals />} />
               <Route path="/profile/favorites" element={<ProfileFavorites />} />
               <Route path="/profile/user" element={<ProfileInfo />} />
               <Route path="/profile/purchases" element={<ProfilePurchases />} />
               <Route path="/profile/reviews" element={<ProfileReviews />} />
               <Route path="/profile/travel" element={<ProfileTravel />} />
               <Route path="/profile/delivery" element={<ProfileDelivery />} />
            </Route>
         </Routes>
      </div>
   );
};

export default Routing;
