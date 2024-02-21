import { FC, Suspense, memo, useMemo } from 'react';

import { Icon, DesktopSection, usePopUp, phoneFormatter } from 'src/shared';
import { UserGender, DesktopUserInfo, UserPhone } from 'src/entities/user';
import { DesktopUserGenderSwitcher } from 'src/features/user/user-gender-switcher';

import styles from './styles.module.scss';
import { DesktopProfileUserDetailsPopUp } from '../pop-up';
import { IProfileUserDetailsProps } from '../../types/user-details';

export const ProfileUserDetails: FC<IProfileUserDetailsProps> = memo(({ name, phone }) => {
   const { isPopUpOpen, openPopUp, closePopUp } = usePopUp();

   const userNameFirstLatter = useMemo(() => name[0], [name]);
   const formattedUserPhone = useMemo(() => phoneFormatter(phone), [phone]);

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
            <UserGender className={styles.details__item} switcher={<DesktopUserGenderSwitcher />} />
         </div>
         <Suspense>
            {isPopUpOpen && <DesktopProfileUserDetailsPopUp closePopUp={closePopUp} />}
         </Suspense>
      </DesktopSection>
   );
});
