import { FC } from 'react';
import { UserProfileReorder } from 'src/widgets/user/user-profile/ui/user-reorder';

const ProfileAppeals: FC = () => {
   return (
      <div>
         <div className={`container`}>
            <UserProfileReorder
               title="Чем вам помочь?"
               text="Создайте обращение и мы ответим на него как можно скорее. Максимальный срок ответа — 24 часа"
            />
         </div>
      </div>
   );
};

export default ProfileAppeals;
