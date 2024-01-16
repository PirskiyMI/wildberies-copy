import { Dispatch, FC, SetStateAction } from 'react';

import { Icon, setSearch, useAppDispatch } from 'src/shared';

type Props = {
   setValue: Dispatch<SetStateAction<string>>;
};

export const ClearSearchField: FC<Props> = ({ setValue }) => {
   const dispatch = useAppDispatch();

   const clearHandler = () => {
      setValue('');
      dispatch(setSearch(''));
   };

   return (
      <button onClick={clearHandler}>
         <Icon icon="cross" />
      </button>
   );
};
