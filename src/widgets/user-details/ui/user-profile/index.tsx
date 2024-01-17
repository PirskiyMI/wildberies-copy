import { FC } from 'react';

import { useAppDispatch, useAppSelector, openModal, Icon, Modal, Section } from 'src/shared';
import { UserDetailsGender, UserDetailsInfo, UserDetailsPhone } from 'src/entities/user';
import { ChangeName, GenderRadio } from 'src/features/user-actions';

import styles from './styles.module.scss';

export const UserProfile: FC = () => {
   const { isModalOpen } = useAppSelector((state) => state.modalReducer);
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(openModal());
   };

   return (
      <Section className={styles.profile}>
         <UserDetailsInfo
            changeButton={
               <button onClick={clickHandler}>
                  <Icon icon="pen" className={styles.profile__icon} />
               </button>
            }
         />
         <div className={styles.profile__bottom}>
            <UserDetailsPhone className={styles.profile__item} />
            <UserDetailsGender className={styles.profile__item} children={<GenderRadio />} />
         </div>

         {isModalOpen && (
            <Modal className={styles.modal}>
               <div className={styles.modal__body}>
                  <h3 className={styles.modal__title}>Изменить имя</h3>
                  <ChangeName />
               </div>
            </Modal>
         )}
      </Section>
   );
};