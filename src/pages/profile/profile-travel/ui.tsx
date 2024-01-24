import { FC } from 'react';

import { ProfileReorder } from 'src/widgets/profile';

const ProfileTravel: FC = () => {
   return (
      <div>
         <div className={`container`}>
            <ProfileReorder
               title="Вы никуда не путешествовали"
               text="Здесь будут отображатся купленные вами билеты"
            />
         </div>
      </div>
   );
};

export default ProfileTravel;
