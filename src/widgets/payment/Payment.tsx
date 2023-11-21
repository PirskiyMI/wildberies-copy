import styles from './Payment.module.scss';

import { FC } from 'react';

import { Section } from '../../shared/ui';

import PaymentHeader from './PaymentHeader';
import PaymentBody from './PaymentBody';

const Payment: FC = () => {
   return (
      <Section className={styles.payment}>
         <PaymentHeader />
         <PaymentBody />
      </Section>
   );
};

export default Payment;