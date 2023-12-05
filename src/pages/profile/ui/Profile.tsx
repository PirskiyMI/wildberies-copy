import { FC } from 'react';
import { ProfileGrid, ProfileNav } from '../../../widgets/profile';
import styles from './Profile.module.scss';

export const Profile: FC = () => {
   return (
      <div className={` ${styles.profile__container} container`}>
         <ProfileNav />
         <ProfileGrid />
      </div>
   );
};
