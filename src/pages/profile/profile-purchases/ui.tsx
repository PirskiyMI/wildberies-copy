import { FC } from 'react';

import { ProfileReorder } from 'src/widgets/profile';

const ProfilePurchases: FC = () => {
   return (
      <div>
         <div className={`container`}>
            <ProfileReorder
               title="В покупках пока пусто"
               text="Здесь будут отображатся товары, которые вы уже заказали"
            />
         </div>
      </div>
   );
};

export default ProfilePurchases;
