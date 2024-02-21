import { memo } from 'react';

import { useAppSelector } from 'src/shared';
import { userInfoSelector } from 'src/entities/user';
import { userIsAuthSelector } from 'src/entities/user/model/selectors/user-is-auth-selector';

import { CartUserDetails } from './ui';
import { CartUserDetailsNotAuth } from './ui-not-auth';

export const CardUserDetailsContainer = memo(() => {
   const { name, isMale, phone } = useAppSelector(userInfoSelector);
   const isAuth = useAppSelector(userIsAuthSelector);

   /* console.log(2); */

   if (!isAuth) return <CartUserDetailsNotAuth />;

   if (name && phone) return <CartUserDetails name={name} isMale={isMale} phone={phone} />;
});
