import { FC } from 'react';

import { ProfileTile } from 'src/shared';
import { UserInfo} from 'src/entities/user';
import { UserPhone } from 'src/entities/user/ui/user-phone';

type Props = {
   className?: string;
};

export const UserProfileInfo: FC<Props> = ({ className }) => {
   const classes = className ? className : '';

   return (
      <ProfileTile
         path="/profile/user"
         title={<UserInfo />}
         content={<UserPhone withTitle className={classes} />}
      />
   );
};
