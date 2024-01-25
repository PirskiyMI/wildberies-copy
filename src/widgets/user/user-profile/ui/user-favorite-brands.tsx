import { FC } from 'react';

import { ProfileTile, useAppSelector } from 'src/shared';

export const UserProfileFavoriteBrands: FC = () => {
   const { favorites } = useAppSelector((state) => state.userReducer);

   const brandsCount = favorites.brands.length;

   return (
      <ProfileTile
         path="/profile/brands"
         title={<h2>Бренды</h2>}
         content={<div>{brandsCount} брендов</div>}
      />
   );
};
