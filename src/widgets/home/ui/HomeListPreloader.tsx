import { FC } from 'react';
import { ProductPreloader } from '../../../entities/product';

export const HomeListPreloader: FC = () => {
   return (
      <div
         style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
            columnGap: '30px',
            rowGap: '30px',
            marginTop: '40px',
         }}>
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
      </div>
   );
};
