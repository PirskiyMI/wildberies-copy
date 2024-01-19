import { FC } from 'react';

import { ProfileItem } from '../profile-item';
import { UserBalance } from 'src/entities/user/ui/user-balance';

type Props = {
   className?: string;
};

export const ProfileBalance: FC<Props> = ({ className }) => {
   const classes = className ? className : '';

   return (
      <ProfileItem
         path="/profile/user"
         title={<h2>Баланс</h2>}
         content={<UserBalance />}
         className={classes}
      />
   );
};
