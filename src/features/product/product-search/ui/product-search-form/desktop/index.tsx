import { FC, memo } from 'react';

import { DesktopSearchField } from 'src/shared';

import styles from './styles.module.scss';
import { useSearchForm } from '../../../lib/hooks/use-search-form';
import { ClearSearchButton } from '../../clear-search-button';
import { SearchButton } from '../../search-button';

export const ProductSearch: FC = memo(() => {
   const { searchValue, setSearchValue } = useSearchForm();

   return (
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
         <DesktopSearchField
            value={searchValue}
            setValue={setSearchValue}
            ClearButton={<ClearSearchButton />}
            SearchButton={<SearchButton value={searchValue} />}
         />
      </form>
   );
});
