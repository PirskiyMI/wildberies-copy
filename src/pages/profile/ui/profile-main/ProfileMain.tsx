import { FC } from 'react';
import styles from './ProfileMain.module.scss';
import { ProfileGrid } from '../../../../widgets/profile';

const ProfileMain: FC = () => {
   return (
      <div className={` ${styles.profile__container} container`}>
         <ProfileGrid />
      </div>
   );
};

export default ProfileMain;
