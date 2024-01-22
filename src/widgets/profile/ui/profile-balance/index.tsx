import { FC } from 'react';

import { ProfileItem } from '../profile-item';
import { UserBalance } from 'src/entities/user/ui/user-balance';
import { useAppSelector } from 'src/shared';

type Props = {
   className?: string;
};

export const ProfileBalance: FC<Props> = ({ className }) => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   const classes = className ? className : '';

   if (windowWidth >= 1024) {
      return (
         <ProfileItem
            path="/profile/user"
            title={<h2>Баланс</h2>}
            content={<UserBalance />}
            className={classes}
         />
      );
   }

   return (
      <ProfileItem
         path="/profile/user"
         title={<h2>Баланс</h2>}
         label={<UserBalance />}
         className={classes}
      />
   );
};
