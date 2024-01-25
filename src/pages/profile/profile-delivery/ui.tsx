import { FC } from 'react';

import { UserProfileReorder } from 'src/widgets/user/user-profile/ui/user-reorder';

const ProfileDelivery: FC = () => {
   return (
      <div>
         <div className={`container`}>
            <UserProfileReorder
               title="Здесь будут ваши доставки"
               text="Оформите заказ в корзине и возвращайтесь, чтобы узнать, где товары сейчас"
            />
         </div>
      </div>
   );
};

export default ProfileDelivery;
