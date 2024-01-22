import { FC } from 'react';

import { ProfileItem } from '../profile-item';

export const ProfilePaymentMethods: FC = () => {
   return (
      <ProfileItem
         path="/profile/user"
         title={<h2>Способы оплаты</h2>}
         label={<span>Добавить карту</span>}
      />
   );
};
