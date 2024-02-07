import { useCallback, useEffect, useState } from 'react';
import { searchActions, useAppDispatch, useAppSelector } from 'src/shared';

export const useSearch = () => {
   const { value } = useAppSelector((state) => state.searchReducer);
   const { setValue } = searchActions;
   const [searchValue, setSearchValue] = useState<string>('');
   const dispatch = useAppDispatch();

   useEffect(() => {
      setSearchValue(value);
   }, [value]);
   const searchHandler = useCallback(() => {
      dispatch(setValue(searchValue));
   }, [dispatch, searchValue, setValue]);
   const clearHandler = useCallback(() => {
      dispatch(setValue(''));
   }, [dispatch, setValue]);

   return { searchValue, setSearchValue, searchHandler, clearHandler };
};
