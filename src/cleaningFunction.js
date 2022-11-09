const formatQuestions = (questions) => {
    return questions.map(questionObj => {
        return {question: questionObj.question, possAnswers: [questionObj.correct_answer,  ...questionObj.incorrect_answers].sort(), correct: questionObj.correct_answer}
    })
};

export { formatQuestions }