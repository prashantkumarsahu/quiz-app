
let quizDB = [
        {
            question: "What is DBMS?",
            a: "Database Management System",
            b: "Database Manipulation System",
            c: "Database Marketing System",
            d: "Database Modelling System",
            ans: "ans1",
        },
        {
            question: "What is SQL?",
            a: "Stored Query Language",
            b: "Structured Query Language",
            c: "Stored Question Language",
            d: "Submit Query Language",
            ans: "ans2",
        },
        {
            question: "What is ASP.NET?",
            a: "Activex Server Pages",
            b: "Activex Server Package",
            c: "Stored Question Language",
            d: "Submit Query Language",
            ans: "ans1",
        }
];

const question = document.querySelector(".question");
const answers = document.querySelectorAll(".answer");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const submit = document.querySelector("#submit");
const clearResp = document.querySelector("#clear");
const showScore = document.querySelector("#showScore");

let questioncount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questioncount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();
function deselectAll(){
    answers.forEach((curAnsSel) => curAnsSel.checked = false);
}

function getSelectedOption(){
    let answer;

    answers.forEach( (curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
}

submit.addEventListener('click', () => {

    let optionchosen = getSelectedOption();
    
    if(questioncount < quizDB.length && optionchosen === quizDB[questioncount].ans)
    {
        score++;
    }
    questioncount++;

    deselectAll();

    if(questioncount < quizDB.length)
    {
       
        loadQuestion();
    }
    else
    {
        showScore.innerHTML = `<h3> You scored ${score} out of ${quizDB.length} </h3>
                                <button class="btn" onclick="location.reload()">Play again!</button>`;
        showScore.classList.remove("scoreArea");
    }
});


clearResp.addEventListener('click', () => {
        $(".answerblock li.selected").removeClass('selected');
});

