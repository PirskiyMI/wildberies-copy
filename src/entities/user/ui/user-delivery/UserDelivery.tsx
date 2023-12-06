import { FC } from 'react';
import styles from './UserDelivery.module.scss';
import { Icon } from '../../../../shared/ui';

export const UserDelivery: FC = () => {
   return (
      <div className={styles.delivery}>
         <div className={styles.delivery__image}>
            <Icon icon="delivery" />
         </div>
         <h2 className={styles.delivery__title}>Доставка</h2>
      </div>
   );
};
