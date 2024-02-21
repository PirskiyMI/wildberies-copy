import { FC, Suspense } from 'react';

import { Card, Icon, DesktopSection, usePopUp } from 'src/shared';
import { DesktopUserPaymentCard } from 'src/entities/user';
import { DesktopDeleteCard } from 'src/features/card/delete-card';
import { SetCard } from 'src/features/card/set-main-card';

import styles from './styles.module.scss';
import { DesktopPaymentMethodPopUp } from '../pop-up';
import { IProfilePaymentMethodProps } from '../../types';

export const ProfilePaymentMethod: FC<IProfilePaymentMethodProps> = ({ payments }) => {
   const { isPopUpOpen, openPopUp, closePopUp } = usePopUp();

   return (
      <>
         <DesktopSection className={styles.payments} title="Способы оплаты">
            <ul className={styles.payments__list}>
               {payments.map((el) => (
                  <li key={el.id} className={styles.payments__item}>
                     {el.isMain ? (
                        <DesktopUserPaymentCard
                           cardNumber={el.cardNumber}
                           deleteButton={<DesktopDeleteCard cardId={el.id} />}
                           className={styles.payments__card}
                        />
                     ) : (
                        <DesktopUserPaymentCard
                           cardNumber={el.cardNumber}
                           deleteButton={<DesktopDeleteCard cardId={el.id} />}
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
         </DesktopSection>
         <Suspense>{isPopUpOpen && <DesktopPaymentMethodPopUp closePopUp={closePopUp} />}</Suspense>
      </>
   );
};
