const navLink1=document.querySelector(".nav-link1");
const navIcon1=document.querySelector(".nav-icon1");
const navLink2=document.querySelector(".nav-link2");
const navIcon2=document.querySelector(".nav-icon2");
const navLink3=document.querySelector(".nav-link3");
const navIcon3=document.querySelector(".nav-icon3");
const navLink4=document.querySelector(".nav-link4");
const navIcon4=document.querySelector(".nav-icon4");
const navLink5=document.querySelector(".nav-link5");
const navIcon5=document.querySelector(".nav-icon5");
navLink1.addEventListener("mouseover",()=>{
    navLink1.style.color="orangeRed";
    navIcon1.style.color="orangeRed";
})
navLink1.addEventListener("mouseout",()=>{
    navLink1.style.color="black";
    navIcon1.style.color="black";
})

navLink2.addEventListener("mouseout",()=>{
    navLink2.style.color="black";
    navIcon2.style.color="black";
})
navLink2.addEventListener("mouseover",()=>{
    navLink2.style.color="orangeRed";
    navIcon2.style.color="orangeRed";
})
navLink3.addEventListener("mouseout",()=>{
    navLink3.style.color="black";
    navIcon3.style.color="black";
})
navLink3.addEventListener("mouseover",()=>{
    navLink3.style.color="orangeRed";
    navIcon3.style.color="orangeRed";
})
navLink4.addEventListener("mouseover",()=>{
    navLink4.style.color="orangeRed";
    navIcon4.style.color="orangeRed";
})
navLink4.addEventListener("mouseout",()=>{
    navLink4.style.color="black";
    navIcon4.style.color="black";
})
navLink5.addEventListener("mouseover",()=>{
    navLink5.style.color="orangeRed";
    navIcon5.style.color="orangeRed";
})
navLink5.addEventListener("mouseout",()=>{
    navLink5.style.color="black";
    navIcon5.style.color="black";
})

const container=document.querySelector(".container");
const hireBtn=document.getElementById("hire-me-btn");
const closeBtn=document.getElementById("close");
const hireBox=document.getElementById("hiring");
const elementsToBlur = document.querySelectorAll("#heading, .detail-container, .qualification-container");


hireBtn.addEventListener('click',()=>{
    hireBox.style.display="flex";
    hireBox.style.marginTop="100px"
    elementsToBlur.forEach(element => {
        element.classList.add("blur-effect"); // Add blur effect on each element
    });

})


closeBtn.addEventListener('click',()=>{
    hireBox.style.display="none";
    elementsToBlur.forEach(element => {
        element.classList.remove("blur-effect"); // Remove blur effect on each element
    });
})
const elementsToRemoveBlur=document.querySelectorAll("#heading, .qualification-container,.skill-container,#detail-info,.navbar");
elementsToRemoveBlur.forEach(element=>{
    element.addEventListener('click',()=>{
        if(hireBox.style.display="flex"){
            hireBox.style.display="none";
        } 
        elementsToBlur.forEach(element => {
            element.classList.remove("blur-effect"); // Remove blur effect on each element
        });
    });
});

// responsive media button
const hireMeBtn=document.getElementById("hire-me");
hireMeBtn.addEventListener('click',()=>{
    hireBox.style.display="flex";
    hireBox.style.marginTop="100px"
    elementsToBlur.forEach(element => {
        element.classList.add("blur-effect"); // Add blur effect on each element
    });

})

function toggleMenu(){
    const icon=document.getElementById("menu-bar");
    const navbar=document.querySelector(".navbar");
    const container=document.querySelector(".container");
    
    navbar.classList.toggle("open");
    if(navbar.classList.contains("open")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        container.style.marginLeft="270px";
    }
    else{
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        container.style.marginLeft="20px";
    }
}