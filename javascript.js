

const pageList = document.querySelectorAll(".page");
const links = document.querySelectorAll("nav a");


links.forEach((link)=> {
    link.addEventListener("click", ()=>{
        pageList.forEach((page)=>{
            page.classList.remove("current");
        }); nextPage.classList.add("current");
    });
const hrefAttribute = link.getAttribute("href");
const nextPage = document.querySelector(hrefAttribute);
});

//show Answer



//Submit new question:
console.clear();
const form = document.querySelector("form");
const newInputList = [];


form.addEventListener("submit", (event) => {

let newInput = {
    questionCreate: form.elements.questionCreate.value,
    questionAnswer: form.elements.questionAnswer.value,
    questionTags: form.elements.questionTags.value,
};
    console.log(newInput);
    event.preventDefault();
    form.reset();
    newInputList.push(newInput);
});


/*Bookmarked marked by click */

const unmarkedBookmarkList = document.querySelectorAll(".bookmarkIcon");
unmarkedBookmarkList.forEach((bookmark)=>{
    bookmark.addEventListener("click", ()=>{
        bookmark.classList.toggle("bookmarkedIcon");
    })
})
/*
 const buttonAnswerList = document.querySelectorAll(".buttonAnswer");
  buttonAnswerList.forEach((buttonAnswer)=>{
    const answerButtonShow = answerButton.querySelector(".answerbutton");
    const answer = answerButton.querySelector(".answer")
    answerButton.addEventListener ("click", ()=>{
        answer.classList.toggle("show");
    });
  });*/


  const questions = [
      { question: "What the Heck?", answer:"Yes!", tags:"???,!!!,???",},
      { question: "What the Heck?", answer:"Yes!", tags:"???,!!!,???",},
      { question: "What the Heck?", answer:"Yes!", tags:"???,!!!,???",},
    ];

const createQuestionHtml = (questions) => {
    let html ="";
    
    questions.forEach((questionComplete)=>{
    html= html + `<div class="questcard">
    <div>QUESTION: ${questionComplete.question}</div>
    <div>ANSWER: ${questionComplete.answer}</div>
    <div>TAGS: ${questionComplete.tags}</div>
    </div>`;
});
console.log("createdHTML", html);
return html;
}

console.log(createQuestionHtml(questions));




const renderQuestions = () => {

    const questionsHtml = createQuestionHtml(questions);
    const questionsContainer = document.querySelector("#home");
    questionsContainer.innerHTML = questionsHtml;
};
renderQuestions();
const formular= document.querySelector("form");
formular.addEventListener("submit", (event) => {
    questions.push({
        question: formular.elements.questionCreate.value,
        answer: formular.elements.questionAnswer.value,
        tags: formular.elements.questionTags.value,
    });
renderQuestions();
console.log(questions);
event.preventDefault();
});

/*
1. TAGS zerschnippeln*/

