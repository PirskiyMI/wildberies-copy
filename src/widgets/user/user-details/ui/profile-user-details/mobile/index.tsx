import { FC, memo } from 'react';

import { useAppSelector, Icon, MobileSection, usePopUp, phoneFormatter } from 'src/shared';
import {
   UserGender,
   MobileUserInfo,
   UserPhone,
   userInfoSelector,
   userNameSelector,
} from 'src/entities/user';
import { UserGenderSwitcher } from 'src/features/user/user-gender-switcher';

import styles from './styles.module.scss';
import { MobileProfileUserDetailsPopUp } from '../pop-up';

export const ProfileUserDetails: FC = memo(() => {
   const { isPopUpOpen, openPopUp, closePopUp } = usePopUp();

   const userName = useAppSelector(userNameSelector);
   const userNameFirstLatter = userName[0];

   const { phone } = useAppSelector(userInfoSelector);
   const formattedUserPhone = phoneFormatter(phone);

   return (
      <MobileSection className={styles.details}>
         <MobileUserInfo
            name={userName}
            nameFirstLatter={userNameFirstLatter}
            changeNameButton={
               <button onClick={openPopUp}>
                  <Icon icon="pen" className={styles.details__icon} />
               </button>
            }
         />
         <div className={styles.details__bottom}>
            <UserPhone phone={formattedUserPhone} className={styles.details__item} withTitle />
            <UserGender className={styles.details__item} switcher={<UserGenderSwitcher />} />
         </div>

         {isPopUpOpen && <MobileProfileUserDetailsPopUp closePopUp={closePopUp} />}
      </MobileSection>
   );
});
