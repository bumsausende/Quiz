

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


