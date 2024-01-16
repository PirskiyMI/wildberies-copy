import { FC } from 'react';

import styles from './styles.module.scss';
import { ProfileReorder } from 'src/widgets/profile';

const ProfileTravel: FC = () => {
   return <div className={styles.travel}>
      <div className={`${styles.favorites__container} container`}>
         <ProfileReorder
            title="Вы никуда не путешествовали"
            text="Здесь будут отображатся купленные вами билеты"
         />
      </div>
   </div>;
};

export default ProfileTravel;
