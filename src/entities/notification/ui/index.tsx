import { FC } from 'react';

import { Icon } from 'src/shared';

import styles from './styles.module.scss';

export const Notification: FC = () => {
   return (
      <div className={styles.notification}>
         <Icon icon="checkMark" className={styles.notification__icon} />
         <span>Товар добавлен в корзину</span>
      </div>
   );
};
