import { FC } from 'react';

import { ProfileReorder } from 'src/widgets/profile';

const ProfileDelivery: FC = () => {
   return (
      <div>
         <div className={`container`}>
            <ProfileReorder
               title="Здесь будут ваши доставки"
               text="Оформите заказ в корзине и возвращайтесь, чтобы узнать, где товары сейчас"
            />
         </div>
      </div>
   );
};

export default ProfileDelivery;
