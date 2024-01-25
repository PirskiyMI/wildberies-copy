import { FC } from 'react';

import { ProfileTile, useAppSelector } from 'src/shared';

export const UserProfileChecks: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   if (windowWidth >= 1024) {
      return <ProfileTile path="/profile/checks" title={<h2>Чеки</h2>} label={<p>Смотреть</p>} />;
   }

   return <ProfileTile path="/profile/checks" title={<h2>Чеки</h2>} />;
};
