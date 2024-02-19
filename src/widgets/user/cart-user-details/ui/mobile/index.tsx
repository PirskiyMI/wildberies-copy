import { useAppSelector } from 'src/shared';
import { CartUserDetails } from './ui';
import { userInfoSelector } from 'src/entities/user';

export const CardUserDetailsContainer = () => {
   const { name, isMale, phone } = useAppSelector(userInfoSelector);

   return <CartUserDetails name={name} isMale={isMale} phone={phone} />;
};
