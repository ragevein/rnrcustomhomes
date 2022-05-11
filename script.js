const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active

    })
})
// to auto scroll through the hero sliders
var notsure = setInterval(myZone, 9000);// that is 5 seconds
function myZone() {
    
    const offset = 1
    const slides = document.querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
}

// the send message modal
const modal = document.querySelector('#modal');
var openModal = document.querySelector('.open-button');
var closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();    
})

closeModal.addEventListener('click', () => {
    modal.close();
})


        /*
        const info = document.querySelectorAll(".infotext");
        //info.style.animationName = "none";
        
        requestAnimationFrame(() => {
            setTimeout(() => {
                //info.style.animationName = "slideinfromRight";
                info.style.transform = "rotateY(20deg)";
            }, 0);
            
        });
        */
        /*
        setTimeout(function(){
            info.style.animationName = "";
        },10)
        
        //requestAnimationFrame(() => {
        
        //})

        
        //content.classList.add("start");
        //var thing = document.getElementsByClassName("content");

    document.addEventListener("scroll",function(){

        var scrollTop=document.documentElement["scrollTop"];
        var scrollBottom=(document.documentElement["scrollHeight"])-document.documentElement.clientHeight;
        var scrollPercent=scrollTop/scrollBottom *100;
        var returnBtn=document.querySelector("#rtn-btn");
        console.log(scrollPercent);
        
        if (scrollPercent > 12){
          //  returnBtn.classList.remove("hide");
          //  alert("over 50");
        }
        else {
          //  returnBtn.classList.add("hide");
          //  alert("over 50");
        }
        
    },
    {passive:true}
    )

*/


