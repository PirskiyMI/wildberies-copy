import { FC } from 'react';

import styles from './styles.module.scss';

import { Icon } from '../../../../shared/ui';
import { useAppSelector } from '../../../../shared/lib';

const UserDeliveryImage = () => {
   return (
      <div className={styles.delivery__image}>
         <Icon className={styles.delivery__icon} icon="delivery" />
      </div>
   );
};

const UserDeliveryTop: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   if (windowWidth >= 1024) {
      return (
         <div className={styles.delivery__top}>
            <UserDeliveryImage />
            <h2 className={styles.delivery__title}>Доставки</h2>
         </div>
      );
   }

   return (
      <div className={styles.delivery__top}>
         <h2 className={styles.delivery__title}>Доставки</h2>
         <UserDeliveryBottom />
      </div>
   );
};
const UserDeliveryBottom: FC = () => {
   return (
      <div className={styles.delivery__bottom}>
         <span className={styles.delivery__label}>Ближайшая</span>
         <span> не ожидается</span>
      </div>
   );
};

export const UserDelivery: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   if (windowWidth >= 1024) {
      return (
         <div className={styles.delivery}>
            <UserDeliveryTop />
            <UserDeliveryBottom />
         </div>
      );
   }

   return (
      <div className={styles.delivery}>
         <UserDeliveryTop />
         <UserDeliveryImage />
      </div>
   );
};
