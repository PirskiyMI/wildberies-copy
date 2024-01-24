import { FC } from 'react';

import { ProfileReorder } from 'src/widgets/profile';

const ProfileAppeals: FC = () => {
   return (
      <div>
         <div className={`container`}>
            <ProfileReorder
               title="Чем вам помочь?"
               text="Создайте обращение и мы ответим на него как можно скорее. Максимальный срок ответа — 24 часа"
            />
         </div>
      </div>
   );
};

export default ProfileAppeals;
