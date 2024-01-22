import { FC } from 'react';

import { ProfileItem } from '../profile-item';
import { useAppSelector } from 'src/shared';

export const ProfilePurchases: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   if (windowWidth >= 1024) {
      return (
         <ProfileItem
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

   return <ProfileItem path="/profile/purchases" title={<h2>Покупки</h2>} />;
};
