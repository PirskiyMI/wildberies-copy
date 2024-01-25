import { FC } from 'react';

import { ProfileTile, useAppSelector } from 'src/shared';
import { UserBalance } from 'src/entities/user/ui/user-balance';

type Props = {
   className?: string;
};

export const UserProfileBalance: FC<Props> = ({ className }) => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   const classes = className ? className : '';

   if (windowWidth >= 1024) {
      return (
         <ProfileTile
            path="/profile/user"
            title={<h2>Баланс</h2>}
            content={<UserBalance />}
            className={classes}
         />
      );
   }

   return (
      <ProfileTile
         path="/profile/user"
         title={<h2>Баланс</h2>}
         label={<UserBalance />}
         className={classes}
      />
   );
};
