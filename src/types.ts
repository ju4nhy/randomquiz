import React from 'react';

export type TopicCategory = 'general' | 'random' | 'movies' | 'music' | 'esports' | 'esports2';

export type Topic = {
    id: string;
    label: TopicCategory; 
};

export type DataProps = {
    id: number | undefined;
    question: string | undefined;
    answer: string | undefined;
};

export interface Data {
    general: DataProps[];
    random: DataProps[];
    movies: DataProps[];
    music: DataProps[];
    esports: DataProps[];
    esports2: DataProps[];
}

export interface FrontPageProps {
    name: string;  
    ready: boolean;  
    dataToUse: DataProps[];   
    setName: (name: string) => void;
    setReady: (ready: boolean) => void;
    setDataToUse: (data: DataProps[]) => void
    //setName: React.Dispatch<React.SetStateAction<string>>;
    //setReady: React.Dispatch<React.SetStateAction<boolean>>;
    //setDataToUse: React.Dispatch<React.SetStateAction<DataProps[]>>;
}

export interface QuizProps {
    name: string;  
    dataToUse: DataProps[];
    setName: (name: string) => void;
    setReady: (ready: boolean) => void;
    //setName: React.Dispatch<React.SetStateAction<string>>;
    //setReady: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface QuizHeaderProps {
    name: string;
    score: number;
    dataToUse: DataProps[];
    handleQuit: () => void; 
}

export interface QuizViewProps {
    QA: DataProps | undefined,
    inputValue: string,
    counter: number,
    error: string,
    correct: boolean,
    showHint: boolean,
    setShowHint: (showHint: boolean) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    handleClick: () => void; 
    handleRestart: () => void
    //setShowHint: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface QuizCompletedProps {
    handleRestart: () => void
}