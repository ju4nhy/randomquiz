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
    setName: React.Dispatch<React.SetStateAction<string>>;
    setReady: React.Dispatch<React.SetStateAction<boolean>>;
    dataToUse: DataProps[]
    setDataToUse: React.Dispatch<React.SetStateAction<DataProps[]>>;
}

export interface QuizProps {
    name: string;  
    setName: React.Dispatch<React.SetStateAction<string>>;
    setReady: React.Dispatch<React.SetStateAction<boolean>>;
    dataToUse: DataProps[]
}

export interface QuizHeaderProps {
    name: string;
    dataToUse: DataProps[];
    score: number;
    handleQuit: () => void; 
}

export interface QuizViewProps {
    counter: number,
    QA: DataProps | undefined,
    inputValue: string,
    error: string,
    correct: boolean,
    showHint: boolean,
    setShowHint: React.Dispatch<React.SetStateAction<boolean>>;
    handleClick: () => void; 
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    handleRestart: () => void
}

export interface QuizCompletedProps {
    handleRestart: () => void
}