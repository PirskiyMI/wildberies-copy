import { FC } from 'react';

import { PopUp } from 'src/shared';
import { MobileChangeUserName } from 'src/features/user/change-user-name';

import styles from './styles.module.scss';

interface Props {
   closePopUp: () => void;
}

export const ProfileUserDetailsPopUp: FC<Props> = ({ closePopUp }) => {
   return (
      <PopUp closePopUp={closePopUp} className={styles.modal}>
         <div className={styles.modal__body}>
            <h3 className={styles.modal__title}>Изменить имя</h3>
            <MobileChangeUserName closePopUp={closePopUp} />
         </div>
      </PopUp>
   );
};
