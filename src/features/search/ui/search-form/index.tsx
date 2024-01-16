import { FC, useState } from 'react';

import { SearchField } from 'src/shared';

import styles from './styles.module.scss';

import { ClearSearchField } from '../clear-search';
import { SetSearchValue } from '../set-search';

export const SearchForm: FC = () => {
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
