import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib';
import { setGender } from '../../../../entities/user';
import styles from './GenderRadio.module.scss';
import { Radio } from '../../../../shared/ui/radio/Radio';

export const GenderRadio: FC = () => {
   const { isMale } = useAppSelector((state) => state.userReducer);
   const dispatch = useAppDispatch();

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
            <span>Муж.</span>
         </label>
         <label className={styles.form__item} onClick={setFemale}>
            <Radio isActive={!isMale} />
            <span>Жен.</span>
         </label>
      </form>
   );
};
