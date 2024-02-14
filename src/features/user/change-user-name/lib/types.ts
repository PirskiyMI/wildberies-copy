import { FormEvent } from 'react';

export interface IChangeUserNameContainer {
   closePopUp?: () => void;
}

export interface IChangeUserName {
   input: {
      errorText: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
      value: string;
      isDirty: boolean;
   };
   submitHandler: (e: FormEvent<HTMLFormElement>) => void;
}
