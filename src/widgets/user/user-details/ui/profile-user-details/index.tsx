import { FC, memo } from 'react';

import { useAppSelector, Icon, PopUp, Section, usePopUp, phoneFormatter } from 'src/shared';
import {
   UserGender,
   UserInfo,
   UserPhone,
   userInfoSelector,
   userNameSelector,
} from 'src/entities/user';
import { ChangeUserName } from 'src/features/user/change-user-name';
import { UserGenderSwitcher } from 'src/features/user/user-gender-switcher';

import styles from './styles.module.scss';

export const ProfileUserDetails: FC = memo(() => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const { isPopUpOpen, openPopUp, closePopUp } = usePopUp();

   const userName = useAppSelector(userNameSelector);
   const userNameFirstLatter = userName[0];

   const { phone } = useAppSelector(userInfoSelector);
   const formattedUserPhone = phoneFormatter(phone);

   if (!windowWidth) {
      return null;
   }

   return (
      <Section className={styles.details}>
         <UserInfo
            name={userName}
            nameFirstLatter={userNameFirstLatter}
            changeNameButton={
               <button onClick={openPopUp}>
                  <Icon icon="pen" className={styles.details__icon} />
               </button>
            }
            mobile={windowWidth < 1024}
         />
         <div className={styles.details__bottom}>
            <UserPhone phone={formattedUserPhone} className={styles.details__item} withTitle />
            <UserGender className={styles.details__item} switcher={<UserGenderSwitcher />} />
         </div>

         {isPopUpOpen && (
            <PopUp closePopUp={closePopUp} className={styles.modal}>
               <div className={styles.modal__body}>
                  <h3 className={styles.modal__title}>Изменить имя</h3>
                  <ChangeUserName closePopUp={closePopUp} />
               </div>
            </PopUp>
         )}
      </Section>
   );
});
