import { FC } from 'react';

import { Section } from '../../shared/ui';
import { RecipientForm } from '../../features/recipient-form';

const Recipient: FC = () => {
   return (
      <Section>
         <div>Получатель</div>
         <RecipientForm />
      </Section>
   );
};

export default Recipient;
