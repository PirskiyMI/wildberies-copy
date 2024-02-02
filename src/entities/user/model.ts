import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IPayment {
   id: number;
   cardNumber: string;
   code: string;
   date: string;
   isMain: boolean;
}
interface IUser {
   name: string;
   isMale: boolean;
   tel: string;
   balance: number;
   discount: number;
   ransomAmount: number;
   redemptionPercentage: number;
   purchases: [];
   img: string | null;
   paymentInfo: IPayment[];
}

const initialState: IUser = {
   name: 'Максим',
   discount: 29,
   ransomAmount: 0,
   redemptionPercentage: 0,
   balance: 0,
   tel: '79530930145',
   purchases: [],
   img: null,
   isMale: true,
   paymentInfo: [
      {
         cardNumber: '2202 2062 1235 4687',
         code: '111',
         id: 1703154986920,
         date: '0125',
         isMain: true,
      },
   ],
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setName: (state, { payload }: PayloadAction<string>) => {
         state.name = payload;
      },
      setGender: (state, { payload }: PayloadAction<boolean>) => {
         state.isMale = payload;
      },
      addCard: (state, { payload }: PayloadAction<IPayment>) => {
         if (!state.paymentInfo.find((el) => el.cardNumber === payload.cardNumber)) {
            state.paymentInfo.push(payload);
         }
      },
      deleteCard: (state, { payload }: PayloadAction<number>) => {
         state.paymentInfo = state.paymentInfo.filter((el) => el.id !== payload);
      },
      setMainCard: (state, { payload }: PayloadAction<number>) => {
         state.paymentInfo.forEach((el) =>
            el.id === payload ? (el.isMain = true) : (el.isMain = false),
         );
      },
   },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
