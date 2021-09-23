

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
 const buttonAnswerList = document.querySelectorAll(".buttonAnswer");
  buttonAnswerList.forEach((buttonAnswer)=>{
    const answerButtonShow = answerButton.querySelector(".answerbutton");
    const answer = answerButton.querySelector(".answer")
    answerButton.addEventListener ("click", ()=>{
        answer.classList.toggle("show");
    });
  });