
const section=document.querySelectorAll("section");

const nav=document.querySelector(".nav-list");
const cancel=document.querySelector(".cancel-img");
const menu=document.querySelector(".menu-icon");
menu.addEventListener("click",()=>{
    nav.classList.add("active3")
})
cancel.addEventListener("click",()=>{
    nav.classList.remove("active3")
})

const lists=document.querySelectorAll(".nav-list a");
window.onscroll =()=>{
    section.forEach(sec=>{
        let top =window.scrollY;
        let offset =sec.offsetTop-50;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');


        if(top >= offset && top < offset + height){
    lists.forEach(link=>{
        link.classList.remove("active");
        link.classList.remove("active2");
        document.querySelector('.nav-list a[href*='+ id +']').classList.add("active")
        document.querySelector('.nav-list a[href*='+ id +']').classList.add("active2")
         nav.classList.remove("active3")
    });
        };
    });
};

const btn=document.querySelector(".arrowbox")
const back=document.querySelector(".back")
const rotatecard=document.querySelector(".card-rotate2")



btn.addEventListener("click",function(){
  rotatecard.classList.add("click1")
})
back.addEventListener("click",function(){
  rotatecard.classList.remove("click1")
})
const arrowbox2=document.querySelector(".arrowbox2")
const back2=document.querySelector(".back2")
const rotatecard2=document.querySelector(".card-rotate4")

arrowbox2.addEventListener("click",function(){
    rotatecard2.classList.add("click2")
  })
  back2.addEventListener("click",function(){
    rotatecard2.classList.remove("click2")
  })

  const arrowbox3=document.querySelector(".arrowbox3")
  const back3=document.querySelector(".back3")
  const rotatecard3=document.querySelector(".card-rotate6")
  
  arrowbox3.addEventListener("click",function(){
      rotatecard3.classList.add("click3")
    })
    back3.addEventListener("click",function(){
      rotatecard3.classList.remove("click3")
    })

  const arrowbox4=document.querySelector(".arrowbox4")
  const back4=document.querySelector(".back4")
  const rotatecard4=document.querySelector(".card-rotate8")
  
    arrowbox4.addEventListener("click",function(){
      rotatecard4.classList.add("click4")
    })
    back4.addEventListener("click",function(){
      rotatecard4.classList.remove("click4")
    })
    const arrowbox5=document.querySelector(".arrowbox5")
  const back5=document.querySelector(".back5")
  const rotatecard5=document.querySelector(".card-rotate10")
  
    arrowbox5.addEventListener("click",function(){
      rotatecard5.classList.add("click5")
    })
    back5.addEventListener("click",function(){
      rotatecard5.classList.remove("click5")
    })
  
const innercircle1=document.querySelector(".circle1")
const html=document.querySelector(".html-5")
var html1=0;
var html2=90;

let progress=setInterval(() => {
    html1++
    if(html1 == html2){
      clearInterval(progress);
    }
    console.log(html);
    
html.textContent=`${html1}%`;
innercircle1.style.background=`conic-gradient(rgb(255, 255, 255)${html1 * 3.5}deg,#e9e4e4 0deg)`;
},50);

const innercircle2=document.querySelector(".circle2")
const css=document.querySelector(".css-3")
var css1=0;
var css2=90;

let progress2=setInterval(() => {
    css1++
    if(css1 == css2){
      clearInterval(progress);
    }
    
css.textContent=`${html1}%`;
innercircle2.style.background=`conic-gradient(rgb(255, 255, 255)${html1 * 3.5}deg,#e9e4e4 0deg)`;
},50);

const innercircle3=document.querySelector(".circle3")
const bootstrap=document.querySelector(".bootstrap")
var boot1=0;
var boot2=70;

let progress3=setInterval(() => {
    boot1++
    if(boot1 == boot2){
      clearInterval(progress3);
    }
    
bootstrap.textContent=`${boot1}%`;
innercircle3.style.background=`conic-gradient(rgb(255, 255, 255)${boot1 * 3.5}deg,#e9e4e4 0deg)`;
},50);

const innercircle4=document.querySelector(".circle4")
const java=document.querySelector(".javascript")
var java1=0;
var java2=70;

let progress4=setInterval(() => {
    java1++
    if(java1 == java2){
      clearInterval(progress4);
    }
    
java.textContent=`${java1}%`;
innercircle4.style.background=`conic-gradient(rgb(255, 255, 255)${java1 * 3.5}deg,#e9e4e4 0deg)`;
},50);

const innercircle5=document.querySelector(".circle5")
const jq=document.querySelector(".jquery")
var jq1=0;
var jq2=70;

let progress5=setInterval(() => {
    jq1++
    if(jq1 == jq2){
      clearInterval(progress5);
    }
    
jq.textContent=`${jq1}%`;
innercircle5.style.background=`conic-gradient(rgb(255, 255, 255)${jq1 * 3.5}deg,#e9e4e4 0deg)`;
},50);
