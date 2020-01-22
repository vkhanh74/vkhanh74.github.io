function quiz(question, answers) {
    this.question = question;
    this.answers = answers;
    this.renderQuiz = () => {
        let content = ''
        this.answers.forEach(item => {
            content += `<div class="answer" ${item.isCorrect ? 'data-correct= "true"' : ''}>${item.name}</div>`
        })
        return content
    }

}
const Quizs = [
    new quiz(
        'Chủ tịch Hồ Chí Minh sinh ngày bao nhiêu ?',
        [
            { id: 1, name: '19/05/1980', isCorrect: true },
            { id: 2, name: '15/09/1980' },
            { id: 3, name: '11/05/1988' },
            { id: 4, name: '11/09/1988' }
        ]
    ),
    new quiz(
        '1+1 bằng mấy',
        [
            { id: 1, name: '3' },
            { id: 2, name: '2', isCorrect: true },
            { id: 3, name: '5' },
            { id: 4, name: '11' }
        ]
    ),
    new quiz(
        'Đảng cộng sản Việt Nam được thành lập ngày bao nhiêu ?',
        [
            { id: 1, name: '04/01/1931' },
            { id: 2, name: '05/03/1933' },
            { id: 3, name: '03/02/1930', isCorrect: true },
            { id: 4, name: '11/02/1932' }
        ]
    ),
    new quiz(
        'Nồng độ cồn trong máu bao nhiêu ml thì vi phạm giao thôn',
        [
            { id: 1, name: '50 mg đến 80 mg/100 ml máu' },
            { id: 2, name: '20 mg đến 50 mg/100 ml máu' },
            { id: 3, name: 'Đã uống rượu bia thì không lái xe', isCorrect: true },
            { id: 4, name: '15 mg đến 30 mg/100 ml máu' }
        ]
    ),
]

let questionNumber = 0;
let numberOfQuiz = Quizs.length
let lockClick = false;
let correctAnswer = 0;
let barWidth = 100;
let playTime = numberOfQuiz * 7; //second

function render() {
    let answer = document.querySelector('.quiz-answers')
    let question = document.querySelector('.quiz-question span')
    let obj = Quizs[questionNumber]
    if (questionNumber == numberOfQuiz) {
        displayResult()
        return;
    }
    answer.innerHTML = obj.renderQuiz()
    question.innerHTML = obj.question
}

function displayResult() {
    let resultModal = document.querySelector('#result')
    let correct = document.querySelector('.result-content .correct')
    let total = document.querySelector('.result-content .total')
    resultModal.style.display = "flex"
    correct.innerHTML = correctAnswer;
    total.innerHTML = numberOfQuiz
}

function checkAnswer() {
    let answers = document.querySelectorAll('.answer')
    answers.forEach((item, index) => {
        item.addEventListener('click', answerHandle)
    })
}

function answerHandle() {
    if (lockClick) {
        return
    }
    lockClick = true;
    this.classList.add("choosen")

    if (this.dataset.correct === 'true') {
        this.classList.add("correct")
        correctAnswer++
        nextAnswer()
        return
    }
    else {
        this.classList.add("wrong")
        showCorrectAnswer()
        nextAnswer()
    }
}

function nextAnswer() {
    setTimeout(() => {
        questionNumber++
        gameHandle()
        lockClick = false;
    }, 1500)
}

function countDown(time = playTime) {
    let progressBar = document.querySelector('.quiz-header .current')
    let timer = setInterval(() => {
        barWidth--;
        progressBar.style.width = barWidth + '%';
        if (barWidth === 0 || questionNumber == numberOfQuiz) {
            clearInterval(timer)
            displayResult()
        }
    }, (time * 10))
}

function showCorrectAnswer() {
    let correctAnswer = document.querySelector('.answer[data-correct= "true"]')
    correctAnswer.classList.add('correct')
}

function gameHandle() {
    render()
    countDown()
    checkAnswer()
}

function resetDefaultValue() {
    questionNumber = 0;
    lockClick = false;
    correctAnswer = 0;
    barWidth = 100;
}

function resetGame() {
    let resultModal = document.querySelector('#result')
    resultModal.style.display = 'none'
    resetDefaultValue()
    gameHandle()
}

function playAgain() {
    let playAgainBtn = document.querySelector('#play-again-btn')
    playAgainBtn.addEventListener('click', resetGame)
}

function startPlay() {
    let startModal = document.querySelector('#start')
    let startBtn = document.querySelector('#start-btn')
    startBtn.addEventListener('click', function (e) {
        e.preventDefault()
        startModal.style.display = 'none';
        gameHandle()
    })
}

function playBgSound() {
    let sound = document.getElementById('bg-sound')
    sound.play()
}

document.addEventListener('DOMContentLoaded', function () {
    playBgSound()
    startPlay()
    playAgain()
})