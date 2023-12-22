import { FC } from 'react';
import styles from './ProfileFavorites.module.scss';
import { UserFavoritesList } from '../../../../widgets/user-favorites';

const ProfileFavorites: FC = () => {
   return (
      <div className={`${styles.favorites__container} container`}>
         <UserFavoritesList />
      </div>
   );
};

export default ProfileFavorites;
