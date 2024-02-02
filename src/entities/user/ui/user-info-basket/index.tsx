import { FC, memo } from 'react';

import { Icon, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';
import { UserPhone } from '..';

export const UserInfoBasket: FC = memo(() => {
   const { isMale, name } = useAppSelector((state) => state.userReducer);

   return (
      <div className={styles.info}>
         <Icon icon={isMale ? 'user-male' : 'user-female'} className={styles.info__icon} />
         <span className={styles.info__name}>{name}</span>
         <UserPhone className={styles.info__phone} />
      </div>
   );
});
