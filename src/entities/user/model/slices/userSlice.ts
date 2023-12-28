import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProductWithRating } from '../../../../shared/lib';

type TFavorites = {
   brands: string[];
   products: IProductWithRating[];
};
type TPayment = {
   id: number;
   cardNumber: string;
   code: string;
   date: string;
};

interface IUserSlice {
   name: string;
   tel: string;
   balance: number;
   discount: number;
   ransomAmount: number;
   redemptionPercentage: number;
   purchases: [];
   img: string | null;
   favorites: TFavorites;
   isMale: boolean;
   paymentInfo: TPayment[];
}

const initialState: IUserSlice = {
   name: 'Максим',
   discount: 27,
   ransomAmount: 0,
   redemptionPercentage: 0,
   balance: 0,
   tel: '79530930145',
   purchases: [],
   img: null,
   favorites: {
      brands: [],
      products: [],
   },
   isMale: true,
   paymentInfo: [
      { cardNumber: '2202 2062 1235 4687', code: '111', id: 1703154986920, date: '0125' },
   ],
};

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setName: (state, { payload }: PayloadAction<string>) => {
         state.name = payload;
      },
      setGender: (state, { payload }: PayloadAction<boolean>) => {
         state.isMale = payload;
      },
      addCard: (state, { payload }: PayloadAction<TPayment>) => {
         state.paymentInfo.push(payload);
      },
      deleteCard: (state, { payload }: PayloadAction<number>) => {
         state.paymentInfo = state.paymentInfo.filter((el) => el.id !== payload);
      },
      addToFavorites: (state, { payload }: PayloadAction<IProductWithRating>) => {
         state.favorites.products.push(payload);
      },
      removeFromFavorites: (state, { payload }: PayloadAction<number>) => {
         state.favorites.products = state.favorites.products.filter((el) => el.id !== payload);
      },
   },
});

export const { setName, setGender, addCard, deleteCard, addToFavorites, removeFromFavorites } =
   userSlice.actions;