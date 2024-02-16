import { FC } from 'react';

import { Card, Icon, MobileSection, useAppSelector, usePopUp } from 'src/shared';
import { MobileUserPaymentCard, userPaymentInfoSelector } from 'src/entities/user';
import { DeleteCard } from 'src/features/card/delete-card';
import { SetCard } from 'src/features/card/set-main-card';

import styles from './styles.module.scss';
import { MobilePaymentMethodPopUp } from '../pop-up';

export const ProfilePaymentMethod: FC = () => {
   const paymentInfo = useAppSelector(userPaymentInfoSelector);
   const { isPopUpOpen, openPopUp, closePopUp } = usePopUp();

   return (
      <>
         <MobileSection className={styles.payments} title="Способы оплаты">
            <ul className={styles.payments__list}>
               {paymentInfo.map((el) => (
                  <li key={el.id} className={styles.payments__item}>
                     {el.isMain ? (
                        <MobileUserPaymentCard
                           cardNumber={el.cardNumber}
                           deleteButton={<DeleteCard id={el.id} />}
                           className={styles.payments__card}
                        />
                     ) : (
                        <MobileUserPaymentCard
                           cardNumber={el.cardNumber}
                           deleteButton={<DeleteCard id={el.id} />}
                           switchMainCardButton={<SetCard id={el.id} />}
                           className={styles.payments__card}
                        />
                     )}
                  </li>
               ))}
               <li onClick={openPopUp} className={styles.payments__item}>
                  <Card className={styles.payments__card}>
                     <div className={styles.payments__body}>
                        <Icon icon="card" className={styles.payments__icon} />
                        <span className={styles.payments__label}>Привязать карту</span>
                     </div>
                  </Card>
               </li>
            </ul>
         </MobileSection>

         {isPopUpOpen && <MobilePaymentMethodPopUp closePopUp={closePopUp} />}
      </>
   );
};
