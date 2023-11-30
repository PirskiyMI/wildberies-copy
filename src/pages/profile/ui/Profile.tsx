import { FC } from 'react';
import { ProfileGrid, ProfileNav } from '../../../widgets/profile';

export const Profile: FC = () => {
   return (
      <div className={`container`}>
         <ProfileNav />
         <div style={{ marginTop: '20px' }} />
         <ProfileGrid />
      </div>
   );
};
