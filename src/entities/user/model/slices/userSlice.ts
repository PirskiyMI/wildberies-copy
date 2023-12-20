import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TPayment = {
   cardNumber: number;
   code: number;
   year: number;
   month: number;
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
   favorites: {
      brands: [];
      products: [];
   };
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
   paymentInfo: [],
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
   },
});

export const { setName, setGender, addCard } = userSlice.actions;
