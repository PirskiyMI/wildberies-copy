export interface ISetCardContainerProps {
   cardId: number;
   cardNumber?: string;
}

export interface ISetCardProps {
   setCard: () => void;
   cardNumber?: string;
}
