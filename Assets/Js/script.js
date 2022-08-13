AOS.init();
new PureCounter();

const x = document.querySelectorAll(".nav-link");
x.forEach(function (element) {
    element.classList.remove("active");
    element.addEventListener("click", function () {
        const y = document.querySelectorAll(".nav-link");
        y.forEach(function (e) {
            e.classList.remove("active");
        })
        element.classList.toggle("active");


    })
});

const a = window;
a.addEventListener("scroll", function (x) {
    const c = this.document.querySelector(".navbar");
    const b = document.querySelector(".home");
    if (a.scrollY > b.clientHeight) {
        c.classList.add("show");
    }
    else {
        c.classList.remove("show");
    }
})

