
// const scroll = new LocomotiveScroll({
//     el: document.getElementsByTagName('main')[0],
//     smooth: true
// });

let videoonpage=document.getElementById("videoonpage")

let li=document.getElementById("page3").getElementsByTagName("ul")[0].getElementsByTagName("li");

let ul=document.getElementById("page3").getElementsByTagName("ul")[0]


let v1="https://player.vimeo.com/progressive_redirect/playback/915351830/rendition/1080p/file.mp4?loc=external&signature=e7d354029600a9d8a23b7bc16881789f86324b78b5f5f7d042e0f6085ff7f9f5"

let v2="https://player.vimeo.com/progressive_redirect/playback/928415131/rendition/1080p/file.mp4?loc=external&signature=d9ca71058c660482d56381edb088fd94c5c6dc3dd2e03a7bdc1f431d2e25bd5c"
let v3="https://player.vimeo.com/progressive_redirect/playback/928793354/rendition/1080p/file.mp4?loc=external&signature=70f8634d25c34b3de7e26d9300daee81a85bd2271daf5eb907af88fbcf168217"
let v4="https://player.vimeo.com/progressive_redirect/playback/928816922/rendition/1080p/file.mp4?loc=external&signature=d7911550abbaf7f6262fe43259314ac568a6e1be60cf0d3c7dc711030a81c8de"

let v5="https://player.vimeo.com/progressive_redirect/playback/915352051/rendition/1080p/file.mp4?loc=external&signature=259968d8504f49abbda9f99a6b37b979af752097d338252bed55f788b60b4c98"

let arr=[v1,v2,v3,v4,v5,v1,v2,v3]


let list = Array.from(li)


for (let i = 0; i < list.length; i++) {
    
    li[i].addEventListener("mouseover",()=>{
        videoonpage.style.display="flex";
        videoonpage.src=arr[i];
       
    })
    li[i].addEventListener("mouseout",()=>{
        
        videoonpage.style.display="none";
        
    })
    
}

function slide(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        
      });
  }

  slide();

  let menu=document.querySelector(".fn")
let upslider=document.querySelector(".upslider")
let faintbg=document.querySelector(".faintbg")
  menu.addEventListener("click",()=>{
console.log(upslider)
upslider.classList.toggle("show")
faintbg.classList.toggle("show")
  })


  let enter=document.querySelector(".enter")
  let text=document.querySelector(".enter .text")
  let black=document.querySelector(".black")
  let main=document.getElementsByTagName("main")[0]



  setTimeout(() => {
    text.innerHTML="Environments"
  }, 500);

  setTimeout(() => {
    text.innerHTML="Experiances"
  }, 1500);

  setTimeout(() => {
    text.innerHTML="Content"
  }, 2500);


setTimeout(() => {
enter.classList.add("notshow")

}, 3500);

setTimeout(() => {
    black.classList.add("dispnone")
}, 4500);