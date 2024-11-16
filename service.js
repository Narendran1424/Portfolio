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

// document.addEventListener('DOMContentLoaded', function() {
//     // Get the current page file name, e.g., "about.html"
//     const currentPage = window.location.pathname.split('/').pop();

//     // Select all navigation links
//     const navItems = document.querySelectorAll('.navi-links');

//     navItems.forEach(item => {
//         // Check if the link's href attribute ends with the current page name
//         if (item.getAttribute('href').endsWith(currentPage)) {
//             // Remove 'active' from all links
//             navItems.forEach(nav => nav.classList.remove('active'));

//             // Add 'active' class to the matched link
//             item.classList.add('active');
//         }
//     });
// });
