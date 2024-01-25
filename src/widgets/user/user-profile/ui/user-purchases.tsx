import { FC } from 'react';

import { ProfileTile, useAppSelector } from 'src/shared';

export const UserProfilePurchases: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   if (windowWidth >= 1024) {
      return (
         <ProfileTile
            path="/profile/purchases"
            title={<h2>Покупки</h2>}
            label={
               <div>
                  <p>В покупках пока пусто.</p>
                  <p>Покупайте товары и они окажутся здесь</p>
               </div>
            }
         />
      );
   }

   return <ProfileTile path="/profile/purchases" title={<h2>Покупки</h2>} />;
};
