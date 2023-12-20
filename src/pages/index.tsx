import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from '../shared/lib';
import { Layout } from './Layout';
import { lazy, useEffect } from 'react';

const Home = lazy(() => import('./home'));
const Catalog = lazy(() => import('./catalog'));
const Cart = lazy(() => import('./cart'));
const Navigation = lazy(() => import('./navigation'));
const ProfileAppeals = lazy(() => import('./profile/ui/profile-appeals/ProfileAppeals'));
const ProfileFavorites = lazy(() => import('./profile/ui/profile-favorites/ProfileFavorites'));
const ProfileInfo = lazy(() => import('./profile/ui/profile-info/ProfileInfo'));
const ProfileMain = lazy(() => import('./profile/ui/profile-main/ProfileMain'));
const ProfilePurchases = lazy(() => import('./profile/ui/profile-purchases/ProfilePurchases'));
const ProfileReviews = lazy(() => import('./profile/ui/profile-reviews/ProfileReviews'));
const ProfileTravel = lazy(() => import('./profile/ui/profile-travel/ProfileTravel'));
const ProfileDelivery = lazy(() => import('./profile/ui/profile-delivery/ProfileDelivery'));

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
