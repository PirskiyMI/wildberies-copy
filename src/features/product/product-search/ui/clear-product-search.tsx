import { FC, memo } from 'react';

import { Button } from 'src/shared';

import { useClearSearch } from '../lib/hooks/use-clear-search';

export const ClearProductSearch: FC = memo(() => {
   const clearHandler = useClearSearch();

   return <Button onClick={clearHandler}>Вернутся на главную</Button>;
});
