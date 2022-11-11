const he = require('he');

const formatQuestions = (questions) => {
    console.log(questions)
    return questions.map(questionObj => {
        const decodedAnswers = questionObj.incorrect_answers.map(ans => he.decode(ans))
        return {question: he.decode(questionObj.question), possAnswers: [he.decode(questionObj.correct_answer),  ...decodedAnswers].sort(), correct: he.decode(questionObj.correct_answer)}
    })
};

export { formatQuestions }