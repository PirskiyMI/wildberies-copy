import { searchActions, useAppDispatch } from 'src/shared';

export const useSearch = (searchValue: string) => {
   const { setValue } = searchActions;
   const dispatch = useAppDispatch();

   const searchHandler = () => {
      dispatch(setValue(searchValue));
   };

   return searchHandler;
};
