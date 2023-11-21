import { Dispatch, FC, SetStateAction } from 'react';
import { Icon } from '../../../../shared/ui';
import { useAppDispatch } from '../../../../shared/lib';
import { setSearch } from '../../../../entities/search-field';

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
