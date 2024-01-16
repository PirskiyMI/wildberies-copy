import { FC } from 'react';

import { Section } from '../../../../shared/ui';
import { PaymentHeader } from '../payment-header';
import { PaymentBody } from '../payment-body';

export const Payment: FC = () => {
   return (
      <Section>
         <PaymentHeader />
         <PaymentBody />
      </Section>
   );
};
