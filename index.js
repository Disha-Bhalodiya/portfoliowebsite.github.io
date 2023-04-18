//   js code to toggle sidebar

const body = document.querySelector("body"),
    nav = document.querySelector("nav"),

    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");


sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");

});



body.addEventListener("click", e => {
    let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});


// light and dark theme 
// const toggle = document.getElementById('theme-btn');
// toggle.addEventListener('click', function() {
//     this.classList.toggle('fa-sun');
//     if (this.classList.toggle('fa-moon')) {
//         body.style.background = 'white';
//         body.style.color = 'black';

//     } else {
//         body.style.background = "var(--dark)";
//         body.style.color = 'white';


//     }
// });

//scroll animation

// window.addEventListener('scroll', () => {
//     let content = document.querySelector(".scale-in-center");
//     console.log(content);
//     let contentPosition = content.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight;

//     if (contentPosition < screenPosition) {
//         content.classList.add('active');
//     }
// });

const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});