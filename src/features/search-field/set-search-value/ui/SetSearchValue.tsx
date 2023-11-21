import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../../../shared/ui';
import { useAppDispatch } from '../../../../shared/lib';
import { setSearch } from '../../../../entities/search-field';

type Props = {
   value: string;
};

export const SetSearchValue: FC<Props> = ({ value }) => {
   const dispatch = useAppDispatch();

   const searchHandler = () => {
      dispatch(setSearch(value));
   };

   return (
      <button onClick={searchHandler}>
         <Link to={'/'}>
            <Icon icon="loop" />
         </Link>
      </button>
   );
};
