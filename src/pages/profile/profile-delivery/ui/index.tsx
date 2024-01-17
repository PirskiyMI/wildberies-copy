import { FC } from 'react';

import styles from './styles.module.scss';
import { ProfileReorder } from 'src/widgets/profile';

const ProfileDelivery: FC = () => {
   return <div className={styles.delivery}>
      <div className={`${styles.favorites__container} container`}>
         <ProfileReorder
            title="Здесь будут ваши доставки"
            text="Оформите заказ в корзине и возвращайтесь, чтобы узнать, где товары сейчас"
         />
      </div>
   </div>;
};

export default ProfileDelivery;
