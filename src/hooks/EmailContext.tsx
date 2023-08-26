import React, { createContext, useState } from 'react';
import { vocLevel, vocType } from '../lib';

interface MyStateType {
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

interface ContextValueType {
    myStates: MyStateType;
    setMyStates : React.Dispatch<React.SetStateAction<MyStateType>>;
}

const initMyStates = {
	wordLimit: '', workingArea: '', vocabularyLevel: vocLevel[0].name, vocabularyType: vocType[0].name,
	subject: '', otherDetails: '', isGenerated: false, emailContent: '', isLoading: false
};

const initContextValue: ContextValueType = {
	myStates : initMyStates, setMyStates : () => useState,
};

export const EmailContext = createContext(initContextValue);

export const EmailProvider = ({ children }: { children: React.ReactNode }) => {

	const [myStates, setMyStates] = useState<any>(initMyStates);

	const contextValue = {
		myStates, setMyStates,
	};

	return (
		<EmailContext.Provider value={contextValue}>
			{children}
		</EmailContext.Provider>
	);
};