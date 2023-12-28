import { FC } from 'react';
import styles from './UserFavoritesSelect.module.scss';

export type SelectOption = {
   value: string;
   name: string;
};

interface Props {
   value: string;
   onChange: (sort: string) => void;
   options: SelectOption[];
}

export const UserFavoritesSelect: FC<Props> = ({ value, options, onChange, ...props }) => {
   return (
      <select
         className={styles.select}
         onChange={(e) => onChange(e.target.value)}
         value={value}
         {...props}>
         {options.map((el) => (
            <option className={styles.select__option} key={el.value} value={el.value}>
               {el.name}
            </option>
         ))}
      </select>
   );
};
