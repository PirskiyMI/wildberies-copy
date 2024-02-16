import { FC, memo } from 'react';

import { Avatar } from 'src/shared';

import styles from './styles.module.scss';
import { IUserInfo } from '../../../lib/types';

export const UserInfo: FC<IUserInfo> = memo(({ name, nameFirstLatter, changeNameButton }) => {
   return (
      <div className={styles.user}>
         <Avatar className={styles.user__image} character={nameFirstLatter} />
         <div className={styles.user__content}>
            <div className={styles.user__name}>
               <h2>{name}</h2> {changeNameButton ? changeNameButton : null}
            </div>
         </div>
      </div>
   );
});
