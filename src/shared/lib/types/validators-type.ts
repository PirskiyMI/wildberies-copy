export interface IValidators {
   isRequired?: boolean;
   type: 'tel' | 'email' | 'name' | 'ITN' | 'card' | 'CVV/CVC' | 'date' | 'surname';
}
