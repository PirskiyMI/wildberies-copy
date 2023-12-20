import { FC } from 'react';
import { Icon, Modal, Section } from '../../../../shared/ui';
import { UserDetailsGender, UserDetailsInfo, UserDetailsPhone } from '../../../../entities/user';
import styles from './UserProfile.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib';
import { openModal } from '../../../../shared/model';
import { ChangeName, GenderRadio } from '../../../../features/user-actions';

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
            <UserDetailsGender className={styles.profile__item} children={<GenderRadio/>} />
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
