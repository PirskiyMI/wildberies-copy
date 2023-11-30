import { FC } from 'react';
import { Section } from '../../../../shared/ui';
import { PaymentHeader } from '../payment-header/PaymentHeader';
import { PaymentBody } from '../payment-body/PaymentBody';

export const Payment: FC = () => {
   return (
      <Section>
         <PaymentHeader />
         <PaymentBody />
      </Section>
   );
};
