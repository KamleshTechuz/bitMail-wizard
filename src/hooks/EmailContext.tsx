import React, { createContext, useState } from 'react';
import { vocLevel, vocType } from '../lib';
import { ContextValueType, MyStateType } from '../lib/interface';

const initMyStates: MyStateType = {
	wordLimit: '', workingArea: '', vocabularyLevel: vocLevel[0].name, vocabularyType: vocType[0].name,
	subject: '', otherDetails: '', isGenerated: false, emailContent: '', isLoading: false
};

const initContextValue: ContextValueType = {
	myStates : initMyStates, setMyStates : () => useState,
};

export const EmailContext = createContext(initContextValue);

export const EmailProvider = ({ children }: { children: React.ReactNode }) => {

	const [myStates, setMyStates] = useState<MyStateType>(initMyStates);

	const contextValue = {
		myStates, setMyStates,
	};

	return (
		<EmailContext.Provider value={contextValue}>
			{children}
		</EmailContext.Provider>
	);
};