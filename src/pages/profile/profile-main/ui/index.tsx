import { FC } from 'react';

import { UserUserProfileGrid } from 'src/widgets/user/user-profile';

import styles from './styles.module.scss';

const ProfileMain: FC = () => {
   return (
      <div className={` ${styles.profile__container} container`}>
         <UserUserProfileGrid />
      </div>
   );
};

export default ProfileMain;
