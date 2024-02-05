import { useEffect, useState } from 'react';
import { searchActions, useAppDispatch, useAppSelector } from 'src/shared';

export const useSearch = () => {
   const { value } = useAppSelector((state) => state.searchReducer);
   const { setValue } = searchActions;
   const [searchValue, setSearchValue] = useState<string>('');
   const dispatch = useAppDispatch();

   useEffect(() => {
      setSearchValue(value);
   }, [value]);
   const searchHandler = () => {
      dispatch(setValue(searchValue));
   };
   const clearHandler = () => {
      dispatch(setValue(''));
   };

   return { searchValue, setSearchValue, searchHandler, clearHandler };
};
