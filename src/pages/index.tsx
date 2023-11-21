import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from '../shared/lib';
import { Layout } from './Layout';
import { lazy, useEffect } from 'react';

const Home = lazy(() => import('./home'));
const Catalog = lazy(() => import('./catalog'));
const Cart = lazy(() => import('./cart'));

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
            </Route>
         </Routes>
      </div>
   );
};

export default Routing;
