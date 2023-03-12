window.onload = () => {
    let rightAnswer = document.getElementsByClassName("right-answer")[0];
    let wrongAnswer = document.getElementsByClassName("wrong-answer")[0];
    let answerElements = document.querySelectorAll(".answers-box li");
    rightAnswer.onclick = rightAnswerClick;
    wrongAnswer.onclick = wrongAnswerClick;
    for (let i = 0; i < answerElements.length; i++) {
        answerElements[i].onclick = answerClick;
    }
};

let rightAnswerClick = (event) => {
    event.target.classList.add("green");
};

let wrongAnswerClick = (event) => {
    event.target.classList.add("red");
};

let answerClick = (event) => {
    if (event.target.classList.contains("right-answer")) {
        event.target.classList.add("green");
    } else if (event.target.classList.contains("wrong-answer")) {
        event.target.classList.add("red");
    }
};