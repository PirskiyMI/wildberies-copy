import { FC, useState } from 'react';
import styles from './HeaderForm.module.scss';

import { SearchField } from '../../../entities/search-field';
import { ClearSearchField, SetSearchValue } from '../../../features/search-field';

export const HeaderForm: FC = () => {
   const [value, setValue] = useState<string>('');

   return (
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
         <SearchField
            value={value}
            setValue={setValue}
            ClearButton={<ClearSearchField setValue={setValue} />}
            SearchButton={<SetSearchValue value={value} />}
         />
      </form>
   );
};
