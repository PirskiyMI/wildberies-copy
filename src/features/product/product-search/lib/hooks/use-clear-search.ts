import { searchActions, useAppDispatch } from 'src/shared';

export const useClearSearch = () => {
   const { setValue } = searchActions;
   const dispatch = useAppDispatch();

   const clearHandler = () => {
      dispatch(setValue(''));
   };

   return clearHandler;
};
