import { FC } from 'react';

import { useAppDispatch, useAppSelector, openModal, Icon, Modal, Section } from 'src/shared';
import { UserGender, UserInfo, UserPhone } from 'src/entities/user';
import { ChangeUserName, UserGenderRadio } from 'src/features/user';

import styles from './styles.module.scss';

export const UserDetails: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const { isModalOpen } = useAppSelector((state) => state.modalReducer);
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(openModal());
   };

   return (
      <Section className={styles.details}>
         <UserInfo
            changeNameButton={
               <button onClick={clickHandler}>
                  <Icon icon="pen" className={styles.details__icon} />
               </button>
            }
            mobile={windowWidth < 1024}
         />
         <div className={styles.details__bottom}>
            <UserPhone className={styles.details__item} withTitle />
            <UserGender className={styles.details__item} children={<UserGenderRadio />} />
         </div>

         {isModalOpen && (
            <Modal className={styles.modal}>
               <div className={styles.modal__body}>
                  <h3 className={styles.modal__title}>Изменить имя</h3>
                  <ChangeUserName />
               </div>
            </Modal>
         )}
      </Section>
   );
};
