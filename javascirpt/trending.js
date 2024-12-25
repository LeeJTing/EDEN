let scrollContainer = document.querySelector(".scroll");
let scrollleft = document.getElementById("left");
let scrollright = document.getElementById("right");

scrollleft.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 820;
});

scrollright.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 820;
});