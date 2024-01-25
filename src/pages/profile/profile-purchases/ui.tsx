import { FC } from 'react';

import { UserProfileReorder } from 'src/widgets/user/user-profile';

const ProfilePurchases: FC = () => {
   return (
      <div>
         <div className={`container`}>
            <UserProfileReorder
               title="В покупках пока пусто"
               text="Здесь будут отображатся товары, которые вы уже заказали"
            />
         </div>
      </div>
   );
};

export default ProfilePurchases;
