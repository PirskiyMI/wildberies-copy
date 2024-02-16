import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from 'src/shared';
import { Layout } from 'src/pages/layout';

import { useRoutes } from './constants/routes';

export const Routing = () => {
   const { isOpen: isBurgerOpen } = useAppSelector((state) => state.burgerReducer);
   const isHidden = isBurgerOpen;
   const routes = useRoutes();

   useEffect(() => {
      isHidden ? document.body.classList.add('hidden') : document.body.classList.remove('hidden');
   }, [isHidden]);

   return (
      <div className="wrapper">
         <Routes>
            <Route path="/" element={<Layout />}>
               {routes.map(({ index, path, element }) =>
                  index ? (
                     <Route key={path} index element={element} />
                  ) : (
                     <Route key={path} path={path} element={element} />
                  ),
               )}
            </Route>
         </Routes>
      </div>
   );
};
