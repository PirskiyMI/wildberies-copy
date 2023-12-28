import { FC, useState } from 'react';
import styles from './SearchForm.module.scss';

import { SearchField } from '../../../../shared/ui';

import { ClearSearchField } from '../clear-search/ClearSearchField';
import { SetSearchValue } from '../set-search/SetSearchValue';

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