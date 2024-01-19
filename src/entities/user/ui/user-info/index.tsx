import { FC, ReactNode } from 'react';

import { useAppSelector } from 'src/shared';

import styles from './styles.module.scss';
import { UserPhone } from '../user-phone';
import { Avatar } from 'src/shared/ui/avatar';

type Props = {
   mobile?: boolean;
   withPhone?: boolean;
   changeNameButton?: ReactNode;
};

export const UserInfo: FC<Props> = ({ withPhone, changeNameButton, mobile }) => {
   const { name } = useAppSelector((state) => state.userReducer);

   const classes = mobile ? `${styles.user} ${styles.user_mobile}` : styles.user;
   const nameFirstLatter = name[0];

   return (
      <div className={classes}>
         <Avatar className={styles.user__image} character={nameFirstLatter} />
         <div className={styles.user__content}>
            <div className={styles.user__name}>
               <h2>{name}</h2> {changeNameButton ? changeNameButton : null}
            </div>
            {withPhone && <UserPhone className={styles.user__label} />}
         </div>
      </div>
   );
};
