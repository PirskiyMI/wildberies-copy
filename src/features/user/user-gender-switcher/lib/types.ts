export interface IUserGenderSwitcherProps {
   isMale: boolean;
   setMale: () => void;
   setFemale: () => void;
   maleLabel: 'Муж.' | 'Мужской';
   femaleLabel: 'Жен.' | 'Женский';
}
