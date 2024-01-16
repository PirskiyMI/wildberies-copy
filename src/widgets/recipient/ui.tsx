import { FC } from 'react';

import { Section } from 'src/shared';
import { RecipientForm } from 'src/features/recipient-form';

export const Recipient: FC = () => {
   return (
      <Section>
         <div>Получатель</div>
         <RecipientForm />
      </Section>
   );
};
