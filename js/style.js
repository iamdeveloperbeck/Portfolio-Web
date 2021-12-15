let scrollTop = document.querySelector(".scrollTop");

scrollTop.addEventListener("click", () => {
    window.scrollTo({top: 0});
});

window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? scrollTop.style.display = "block" : scrollTop.style.display = "none";
});

let navbar = document.querySelector(".respNav");

navToggle = document.querySelector(".toggle").onclick = () => {
    navbar.classList.add("show");
};

closeToggle = document.querySelector(".close-icon").onclick = () => {
    navbar.classList.remove("show");
};



