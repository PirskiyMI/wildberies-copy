import { FC } from 'react';

import { Radio } from 'src/shared';

import styles from './styles.module.scss';
import { IUserGenderSwitcherProps } from '../../types';

export const UserGenderSwitcher: FC<IUserGenderSwitcherProps> = ({
   isMale,
   setMale,
   setFemale,
}) => {
   return (
      <form className={styles.form}>
         <label className={styles.form__item} onClick={setMale}>
            <Radio isActive={isMale} />
            <span>Мужской</span>
         </label>
         <label className={styles.form__item} onClick={setFemale}>
            <Radio isActive={!isMale} />
            <span>Женский</span>
         </label>
      </form>
   );
};
