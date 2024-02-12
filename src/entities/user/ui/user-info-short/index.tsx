import { FC, memo } from 'react';

import { Icon } from 'src/shared';

import styles from './styles.module.scss';
import { UserPhone } from '..';
import { IUserInfoShort } from '../../lib/types';

export const UserInfoShort: FC<IUserInfoShort> = memo(({ name, phone, isMale }) => {
   return (
      <div className={styles.info}>
         <Icon icon={isMale ? 'user-male' : 'user-female'} className={styles.info__icon} />
         <span className={styles.info__name}>{name}</span>
         <UserPhone phone={phone} className={styles.info__phone} />
      </div>
   );
});
