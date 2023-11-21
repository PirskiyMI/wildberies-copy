import { FC } from 'react';
import styles from './Notification.module.scss';
import { Icon } from '../../../shared/ui';

export const Notification: FC = () => {
   return (
      <div className={styles.notification}>
         <Icon icon="checkMark" className={styles.notification__icon} />
         <span>Товар добавлен в корзину</span>
      </div>
   );
};
