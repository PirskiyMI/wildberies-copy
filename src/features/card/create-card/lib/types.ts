export interface IUseCreateCardArgs {
   cardInfo: { number: string; date: string; code: string };
   closePopUp: () => void;
}
export interface ICreateCardProps {
   closePopUp: () => void;
}
