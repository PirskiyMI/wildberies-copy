import { useAppSelector } from 'src/shared';
import { userInfoSelector, userNameSelector } from 'src/entities/user';
import { ProfileUserDetails } from './ui';

export const ProfileUserDetailsContainer = () => {
   const userName = useAppSelector(userNameSelector);
   const { phone } = useAppSelector(userInfoSelector);

   return <ProfileUserDetails name={userName} phone={phone} />;
};
