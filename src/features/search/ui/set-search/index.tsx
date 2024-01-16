import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Icon, setSearch, useAppDispatch } from 'src/shared';

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
