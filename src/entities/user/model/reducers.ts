import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IPayment {
   id: number;
   cardNumber: string;
   code: string;
   date: string;
   isMain: boolean;
}
interface IUser {
   isAuth: boolean;
   isMale: boolean;
   name: string | null;
   tel: string | null;
   img: string | null;
   paymentInfo: IPayment[];
}

const initialState: IUser = {
   isAuth: false,
   isMale: true,
   name: null,
   tel: null,
   img: null,
   paymentInfo: [],
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUser: (state, { payload }: PayloadAction<{ name: string; tel: string }>) => {
         state.isAuth = true;
         state.name = payload.name;
         state.tel = payload.tel;
      },
      deleteUser: (state) => {
         state.isAuth = false;
         state.isMale = true;
         state.name = '';
         state.tel = '';
         state.paymentInfo = [];
      },
      setName: (state, { payload }: PayloadAction<string>) => {
         state.name = payload;
      },
      setGender: (state, { payload }: PayloadAction<boolean>) => {
         state.isMale = payload;
      },
      addCard: (state, { payload }: PayloadAction<IPayment>) => {
         const isEmpty = !state.paymentInfo.length;
         if (isEmpty) {
            state.paymentInfo.push({ ...payload, isMain: true });
            return;
         }
         const inList = state.paymentInfo.find((el) => el.cardNumber === payload.cardNumber);
         if (!inList) {
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
