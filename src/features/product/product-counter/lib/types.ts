export interface IProductCounterContainerProps {
   id: number;
   value: number;
   limit?: number;
}

export interface IProductCounterProps {
   value: number;
   limit?: number;
   decrementHandler: () => void;
   incrementHandler: () => void;
   blurHandler: () => void;
   setHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
   count: number;
}
