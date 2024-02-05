import { FC } from 'react';
import { Button, setSearch, useAppDispatch } from 'src/shared';

export const CleatProductSearch: FC = () => {
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(setSearch(''));
   };

   return <Button onClick={clickHandler}>Вернутся на главную</Button>;
};
