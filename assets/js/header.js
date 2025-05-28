window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const trigger = document.querySelector(".top-img").offsetHeight;

    if (window.scrollY > trigger) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});