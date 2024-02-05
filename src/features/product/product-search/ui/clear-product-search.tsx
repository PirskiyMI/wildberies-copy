import { FC } from 'react';

import { Button } from 'src/shared';

import { useSearch } from '../hooks';

export const ClearProductSearch: FC = () => {
   const { clearHandler } = useSearch();

   return <Button onClick={clearHandler}>Вернутся на главную</Button>;
};
