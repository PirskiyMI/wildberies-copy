import { FC } from 'react';

import { ProfileReorder } from 'src/widgets/profile';

const ProfileReviews: FC = () => {
   return (
      <div>
         <div className={`container`}>
            <ProfileReorder
               title="Здесь будут ваши отзывы"
               text="Помогите другим покупателям сделать выбор — поделитесь мнением о товарах в разделе Покупки"
            />
         </div>
      </div>
   );
};

export default ProfileReviews;
