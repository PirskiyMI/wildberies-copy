import { FC, memo } from 'react';

import { Icon } from 'src/shared';
import { useClearSearch } from '../lib/hooks/use-clear-search';

export const ClearSearchButton: FC = memo(() => {
   const clearHandler = useClearSearch();

   return (
      <button onClick={clearHandler}>
         <Icon icon="cross" />
      </button>
   );
});
