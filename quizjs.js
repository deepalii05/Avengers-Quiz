const quizData = [
    {
        question: "How many Infinity Stones are there?",
        a: "There were infinity Infinity Stones",
        b: "Hahaha lol there were five infinity stones",
        c: "Well my guess is six ",
        d: "I dont want to talk about infinity stones. They killed my hero :(",
        correct: "c",
    },
    {
        question: "Where is Captain America from?",
        a: "Goa Beach, India",
        b: "Brooklyn, New York",
        c: "Long Island, New York",
        d: "Batman, Turkey",
        correct: "b",
    },
    {
        question: "Who is Tony Stark’s father?",
        a: "Howard Stark",
        b: "Modi Stark",
        c: "Trump Stark",
        d: "Matata Stark",
        correct: "a",
    },
    {
        question: "What does S.H.I.E.L.D. stand for?",
        a: "Strategy Homeback Interconnection, Enlightment and Logicall Dillema",
        b: "Strategic Homeland Intervention, Enforcement and Logistics Division",
        c: "Saturn Home India, Europe and Ludhiana Delhi",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What type of doctor is Doctor Strange?",
        a: "He was a Neurosurgeon! ",
        b: "Well! he was Physiatrist",
        c: "He was a Naive",
        d: "LOL! He was a magician",
        correct: "a",
    },
    {
        question: "Who was able to pick up Thor’s hammer in Endgame?",
        a: "Thanos",
        b: "HELA",
        c: "Great Hulk",
        d: "Captain America",
        correct: "d",
    },
    {
        question: "Who rescued Tony Stark and Nebula from space?",
        a: "Intelligent Thanos",
        b: "Black Widow",
        c: "Captain Marvel",
        d: "Captain America",
        correct: "c",
    },
    {
        question: "Who is the firstborn child of Odin?",
        a: "Hela",
        b: "Thor",
        c: "Tyr",
        d: "Loki",
        correct: "a",
    },
    {
        question: "Who did Captain America give his shield to in Endgame?",
        a: "Hank",
        b: "Bucky",
        c: "Sam",
        d: "Loki",
        correct: "c",
    },
    {
        question: "Who is the Winter Soldier?",
        a: "Spiderman",
        b: "Thor",
        c: "Hank",
        d: "Bucky",
        correct: "d",
    },

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>
                You answered correctly at ${score}/${quizData.length} questions.</h2>     
                <button onclick="location.reload()">I want to play again !! Reload</button>
            `;
        }
    }
});