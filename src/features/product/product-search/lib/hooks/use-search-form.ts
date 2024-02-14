import { useEffect, useState } from 'react';
import { searchValueSelector, useAppSelector } from 'src/shared';

export const useSearchForm = () => {
   const value = useAppSelector(searchValueSelector);
   const [searchValue, setSearchValue] = useState<string>('');

   useEffect(() => {
      setSearchValue(value);
   }, [value]);

   return { searchValue, setSearchValue };
};
