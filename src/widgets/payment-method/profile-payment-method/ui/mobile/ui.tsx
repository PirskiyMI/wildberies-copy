import { FC, Suspense } from 'react';

import { Card, Icon, MobileSection, usePopUp } from 'src/shared';
import { MobileUserPaymentCard } from 'src/entities/user';
import { MobileDeleteCard } from 'src/features/card/delete-card';
import { SetCard } from 'src/features/card/set-main-card';

import styles from './styles.module.scss';
import { MobilePaymentMethodPopUp } from '../pop-up';
import { IProfilePaymentMethodProps } from '../../types';

export const ProfilePaymentMethod: FC<IProfilePaymentMethodProps> = ({ payments }) => {
   const { isPopUpOpen, openPopUp, closePopUp } = usePopUp();

   return (
      <>
         <MobileSection className={styles.payments} title="Способы оплаты">
            <ul className={styles.payments__list}>
               {payments.map((el) => (
                  <li key={el.id} className={styles.payments__item}>
                     {el.isMain ? (
                        <MobileUserPaymentCard
                           cardNumber={el.cardNumber}
                           deleteButton={<MobileDeleteCard cardId={el.id} />}
                           className={styles.payments__card}
                        />
                     ) : (
                        <MobileUserPaymentCard
                           cardNumber={el.cardNumber}
                           deleteButton={<MobileDeleteCard cardId={el.id} />}
                           switchMainCardButton={<SetCard cardId={el.id} />}
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
         <Suspense>{isPopUpOpen && <MobilePaymentMethodPopUp closePopUp={closePopUp} />}</Suspense>
      </>
   );
};
