import { FC } from 'react';

import { Icon } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   title: string;
};

export const Notification: FC<Props> = ({ title }) => {
   return (
      <div className={styles.notification}>
         <Icon icon="checkMark" className={styles.notification__icon} />
         <span>{title}</span>
      </div>
   );
};
