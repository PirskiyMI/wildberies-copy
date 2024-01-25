import { FC } from 'react';

import { ProfileTile } from 'src/shared';

export const UserProfilePaymentMethods: FC = () => {
   return (
      <ProfileTile
         path="/profile/user"
         title={<h2>Способы оплаты</h2>}
         label={<span>Добавить карту</span>}
      />
   );
};
