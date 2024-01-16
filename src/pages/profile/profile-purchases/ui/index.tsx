import { FC } from 'react';
import styles from './styles.module.scss';
import { ProfileReorder } from 'src/widgets/profile';

const ProfilePurchases: FC = () => {
   return <div className={styles.purchases}>
      <div className={`${styles.favorites__container} container`}>
         <ProfileReorder
            title="В покупках пока пусто"
            text="Здесь будут отображатся товары, которые вы уже заказали"
         />
      </div>
   </div>;
};

export default ProfilePurchases;
