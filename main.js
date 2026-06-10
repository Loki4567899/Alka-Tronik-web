window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "rgba(0,0,0,0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.75)";
        navbar.style.boxShadow = "none";
    }

});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
'.about-preview,.featured-project,.gallery-section,.contact-section,.vision-section,.career-section,.video-section,.upcoming-section'
).forEach((el)=>{

    el.classList.add("hidden");
    observer.observe(el);

});
