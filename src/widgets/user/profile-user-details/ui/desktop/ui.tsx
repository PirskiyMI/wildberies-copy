import { FC, memo } from 'react';

import { Icon, DesktopSection, usePopUp, phoneFormatter } from 'src/shared';
import { UserGender, DesktopUserInfo, UserPhone } from 'src/entities/user';
import { UserGenderSwitcher } from 'src/features/user/user-gender-switcher';

import styles from './styles.module.scss';
import { DesktopProfileUserDetailsPopUp } from '../pop-up';
import { IProfileUserDetailsProps } from '../../types/user-details';

export const ProfileUserDetails: FC<IProfileUserDetailsProps> = memo(({ name, phone }) => {
   const { isPopUpOpen, openPopUp, closePopUp } = usePopUp();

   const userNameFirstLatter = name[0];
   const formattedUserPhone = phoneFormatter(phone);

   return (
      <DesktopSection className={styles.details}>
         <DesktopUserInfo
            name={name}
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

         {isPopUpOpen && <DesktopProfileUserDetailsPopUp closePopUp={closePopUp} />}
      </DesktopSection>
   );
});
