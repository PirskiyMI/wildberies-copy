import { memo } from 'react';

import { useAppSelector } from 'src/shared';
import { userInfoSelector } from 'src/entities/user';

import { CartUserDetails } from './ui';

export const CardUserDetailsContainer = memo(() => {
   const { name, isMale, phone } = useAppSelector(userInfoSelector);

   return <CartUserDetails name={name} isMale={isMale} phone={phone} />;
});
