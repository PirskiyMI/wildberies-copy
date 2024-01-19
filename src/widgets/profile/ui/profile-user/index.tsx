import { FC } from 'react';

import { UserInfo } from 'src/entities/user';
import { UserPhone } from 'src/entities/user/ui/user-phone';

import { ProfileItem } from '../profile-item';

type Props = {
   className?: string;
};

export const ProfileUser: FC<Props> = ({ className }) => {
   const classes = className ? className : '';

   return (
      <ProfileItem
         path="/profile/user"
         title={<UserInfo />}
         content={<UserPhone withTitle className={classes} />}
      />
   );
};
