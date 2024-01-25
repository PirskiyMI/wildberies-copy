import { FC } from 'react';

import { UserProfileReorder } from 'src/widgets/user/user-profile';

const ProfileTravel: FC = () => {
   return (
      <div>
         <div className={`container`}>
            <UserProfileReorder
               title="Вы никуда не путешествовали"
               text="Здесь будут отображатся купленные вами билеты"
            />
         </div>
      </div>
   );
};

export default ProfileTravel;
