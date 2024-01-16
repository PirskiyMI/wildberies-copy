import { FC, useEffect, useState } from 'react';

import { useAppSelector, Select } from 'src/shared';
import { UserFavoritesList } from 'src/widgets/user-favorites';
import { ProfileReorder } from 'src/widgets/profile';

import styles from './styles.module.scss';

const ProfileFavorites: FC = () => {
   const { favorites } = useAppSelector((state) => state.userReducer);
   const [sort, setSort] = useState('descending date');
   const [products, setProducts] = useState(favorites.products);

   const getSortedList = (sort: string) => {
      setProducts(favorites.products);
      if (sort === 'descending date') {
         setProducts([...products].sort((a, b) => a.id - b.id));
      } else if (sort === 'ascending date') {
         setProducts([...products].sort((a, b) => b.id - a.id));
      } else if (sort === 'descending price') {
         setProducts([...products].sort((a, b) => b.price - a.price));
      } else if (sort === 'ascending price') {
         setProducts([...products].sort((a, b) => a.price - b.price));
      }
   };

   useEffect(() => {
      setProducts(favorites.products);
   }, [favorites.products]);

   useEffect(() => {
      getSortedList(sort);
   }, [sort]);

   if (!products.length) {
      return (
         <div className={`${styles.favorites__container} container`}>
            <ProfileReorder
               title="В избранном пока пусто"
               text="Сохраняйте товары, которые понравились, чтобы долго не искать"
            />
         </div>
      );
   }
   return (
      <div className={`${styles.favorites__container} container`}>
         <Select
            defaultValue="дата по убыванию"
            setSort={setSort}
            options={[
               { value: 'descending date', title: 'дата по убыванию' },
               { value: 'ascending date', title: 'дата по возрастанию' },
               { value: 'descending price', title: 'по убыванию цены' },
               { value: 'ascending price', title: 'по возрастанию цены' },
            ]}
            className={styles.favorites__select}
         />
         <UserFavoritesList products={products} />
      </div>
   );
};

export default ProfileFavorites;
