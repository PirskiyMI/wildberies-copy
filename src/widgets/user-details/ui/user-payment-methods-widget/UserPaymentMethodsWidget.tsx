import { FC, useState } from 'react';
import styles from './UserPaymentMethod.module.scss';
import { Modal, Section } from '../../../../shared/ui';
import { AddCard } from '../../../../features/user-actions';

export const UserPaymentMethodsWidget: FC = () => {
   const [isModal, setIsModal] = useState(false);

   const clickHandler = () => {
      setIsModal(true);
   };

   return (
      <Section className={styles.payments}>
         <h2 className={styles.payments__title}>Способы оплаты</h2>
         <ul className={styles.payments__list}>
            <li className={styles.payments__item} onClick={clickHandler}>
               Привязать карту
            </li>
         </ul>
         {isModal && (
            <Modal className={styles.modal} clickHandler={() => setIsModal(false)}>
               <div className={styles.modal__body}>
                  <h3 className={styles.modal__title}>Привязка карты</h3>
                  <AddCard />
               </div>
            </Modal>
         )}
      </Section>
   );
};
