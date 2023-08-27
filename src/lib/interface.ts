export interface styledDropdown {
  listData: listData[];
  label: string;
  isRequired: boolean;
  target: string;
}

export interface listData {
  id: number;
  name: string;
}

export interface styledInput {
  label: string;
  placeholder: string;
  isRequired: boolean;
  target: string;
}

export interface styledInputLabel {
  label: string;
  isRequired: boolean;
}

export interface styledTextArea {
  label: string;
  placeholder: string;
  isRequired: boolean;
  target: string;
  rows: number;
  maxLength: boolean;
}

export interface MyStateType {
	isLoading: boolean;
	wordLimit: string;
	workingArea: string;
	vocabularyLevel: string;
	vocabularyType: string;
	subject: string;
	otherDetails: string;
	isGenerated: boolean;
	emailContent: string;
	[key: string]: string | boolean;
}

export interface ContextValueType {
    myStates: MyStateType;
    setMyStates : React.Dispatch<React.SetStateAction<MyStateType>>;
}