import { FC } from 'react';

import { Icon } from 'src/shared';

import styles from './styles.module.scss';
import { INotificationProps } from 'src/shared/lib/types/types-ui/notification-types';



export const Notification: FC<INotificationProps> = ({ title }) => {
   return (
      <div className={styles.notification}>
         <Icon icon="check-mark" className={styles.notification__icon} />
         <span>{title}</span>
      </div>
   );
};
