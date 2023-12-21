import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib';
import { setGender } from '../../../../entities/user';
import styles from './GenderRadio.module.scss';
import { Radio } from '../../../../shared/ui/radio/Radio';

export const GenderRadio: FC = () => {
   const { isMale } = useAppSelector((state) => state.userReducer);
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const dispatch = useAppDispatch();
   const maleGender = windowWidth >= 768 ? 'Муж.' : 'Мужской';
   const femaleGender = windowWidth >= 768 ? 'Жен.' : 'Женский';

   const setMale = () => {
      dispatch(setGender(true));
   };
   const setFemale = () => {
      dispatch(setGender(false));
   };

   return (
      <form className={styles.form}>
         <label className={styles.form__item} onClick={setMale}>
            <Radio isActive={isMale} />
            <span>{maleGender}</span>
         </label>
         <label className={styles.form__item} onClick={setFemale}>
            <Radio isActive={!isMale} />
            <span>{femaleGender}</span>
         </label>
      </form>
   );
};
