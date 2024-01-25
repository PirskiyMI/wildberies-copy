import { FC } from 'react';

import { UserProfileReorder } from 'src/widgets/user/user-profile';

const ProfileReviews: FC = () => {
   return (
      <div>
         <div className={`container`}>
            <UserProfileReorder
               title="Здесь будут ваши отзывы"
               text="Помогите другим покупателям сделать выбор — поделитесь мнением о товарах в разделе Покупки"
            />
         </div>
      </div>
   );
};

export default ProfileReviews;
