import { FC } from 'react';

import { useAppSelector } from 'src/shared';

import { ProfileItem } from '../profile-item';

export const ProfileBrands: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const { favorites } = useAppSelector((state) => state.userReducer);

   const brandsCount = favorites.brands.length;

   if (windowWidth >= 1024) {
      return (
         <ProfileItem
            path="/profile/brands"
            title={<h2>Бренды</h2>}
            label={<div>{brandsCount} брендов</div>}
         />
      );
   }

   return (
      <ProfileItem
         path="/profile/brands"
         title={<h2>Бренды</h2>}
         content={<div>{brandsCount} брендов</div>}
      />
   );
};
