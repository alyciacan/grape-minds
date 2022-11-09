import { createContext, useState, useEffect } from 'react';

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);
    const value = { questions, setQuestions }

    useEffect(() => {
        
    })


};   