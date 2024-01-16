import { FC } from 'react';

import styles from './styles.module.scss';
import { ProfileReorder } from 'src/widgets/profile';

const ProfileReviews: FC = () => {
   return <div className={styles.reviews}>
      <div className={`${styles.favorites__container} container`}>
         <ProfileReorder
            title="Здесь будут ваши отзывы"
            text="Помогите другим покупателям сделать выбор — поделитесь мнением о товарах в разделе Покупки"
         />
      </div>
   </div>;
};

export default ProfileReviews;
