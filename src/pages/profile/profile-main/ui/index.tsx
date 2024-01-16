import { FC } from 'react';

import { ProfileGrid } from 'src/widgets/profile';

import styles from './styles.module.scss';

const ProfileMain: FC = () => {
   return (
      <div className={` ${styles.profile__container} container`}>
         <ProfileGrid />
      </div>
   );
};

export default ProfileMain;
