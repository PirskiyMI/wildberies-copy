import { FC } from 'react';
import { IProductWithRating } from '../../../shared/lib';
import { HomeList } from '.';

type HomeListWithContainerProps = {
   productList: IProductWithRating[];
};

export const HomeListWithContainer: FC<HomeListWithContainerProps> = ({ productList }) => {
   return (
      <div className="container" style={{ paddingBottom: '50px' }}>
         <HomeList productList={productList} />
      </div>
   );
};
