import { FC } from 'react';
import { HomeListEmpty } from './HomeListEmpty';
import { IProductWithRating } from '../../../shared/lib';

type Props = {
   search: string;
   productList: IProductWithRating[];
};

export const HomeListEmptyWithContainer: FC<Props> = ({ search, productList }) => {
   return (
      <div className="container" style={{paddingBottom: '50px'}}>
         <HomeListEmpty search={search} productList={productList} />
      </div>
   );
};
