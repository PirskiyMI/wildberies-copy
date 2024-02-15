export interface IToggleProductToOrderContainer {
   id: number;
   isChecked: boolean;
}

export interface IToggleProductToOrder {
   isChecked: boolean;
   clickHandler: () => void;
}
