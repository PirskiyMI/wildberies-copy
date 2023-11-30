import { createSlice } from '@reduxjs/toolkit';

interface IUserSlice {
   name: string;
   tel: string;
}

const initialState: IUserSlice = {
   name: 'Максим',
   tel: '79530930145',
};

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
});
