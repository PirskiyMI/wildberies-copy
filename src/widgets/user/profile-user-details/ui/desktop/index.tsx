import { memo } from 'react';

import { useAppSelector } from 'src/shared';
import { userNameSelector, userPhoneSelector } from 'src/entities/user';

import { ProfileUserDetails } from './ui';

export const ProfileUserDetailsContainer = memo(() => {
   const name = useAppSelector(userNameSelector);
   const phone = useAppSelector(userPhoneSelector);

   return <ProfileUserDetails name={name} phone={phone} />;
});
