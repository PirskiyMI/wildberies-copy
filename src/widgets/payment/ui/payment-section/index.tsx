import { FC } from 'react';

import { Section } from 'src/shared';

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
