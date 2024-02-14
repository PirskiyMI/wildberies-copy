import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from 'src/shared';
import { useSearch } from '../lib/hooks/use-search';
import { ISearchButtonProps } from '../lib/types';

export const SearchButton: FC<ISearchButtonProps> = memo(({ value }) => {
   const searchHandler = useSearch(value);

   return (
      <button onClick={searchHandler}>
         <Link to={'/'}>
            <Icon icon="loop" />
         </Link>
      </button>
   );
});
