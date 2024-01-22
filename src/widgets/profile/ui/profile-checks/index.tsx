import { FC } from 'react';

import { useAppSelector } from 'src/shared';

import { ProfileItem } from '../profile-item';

export const ProfileChecks: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   if (windowWidth >= 1024) {
      return <ProfileItem path="/profile/checks" title={<h2>Чеки</h2>} label={<p>Смотреть</p>} />;
   }

   return <ProfileItem path="/profile/checks" title={<h2>Чеки</h2>} />;
};
