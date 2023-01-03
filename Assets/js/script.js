const question = document.querySelector('#question');
const answer = Array.from(document.querySelectorAll('#.answer-text'));

let currentQuestion = {}
let userAnswer = true
let score = 0
let questionCounter = 0
let openQuestion = []

let questions = [
    {
        question: 'What is js',
        option1: '1',
        option2: '1',
        option3: '1',
        option4: '1',
        answer: '2',
    },
    {
        question: 'What is js',
        option1: '1',
        option2: '1',
        option3: '1',
        option4: '1',
        answer: '2',
    },
    {
        question: 'What is js',
        option1: '1',
        option2: '1',
        option3: '1',
        option4: '1',
        answer: '2',
    },
    {
        question: 'What is js',
        option1: '1',
        option2: '1',
        option3: '1',
        option4: '1',
        answer: '2'
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startQuizz = () => {
    questionCounter = 0
    score = 0
    openQuestion = [...questions]
    getNewQuestion()
}


