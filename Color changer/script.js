let rect = document.querySelector("#center");

rect.addEventListener("mousemove", (details) => {
    let coordinates = rect.getBoundingClientRect();
    let cursorPosition = details.clientX - coordinates.left;
    if(cursorPosition < coordinates.width/2) {
        let redColor = gsap.utils.mapRange(0, coordinates.width/2, 255, 0, cursorPosition);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4
        });
    }
    else {
        let blueColor = gsap.utils.mapRange(coordinates.width/2, coordinates.width, 0, 255, cursorPosition);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor},)`,
            ease: Power4
        });
    }
});

rect.addEventListener("mouseleave", () => {
    gsap.to(rect, {
        backgroundColor: "white"
    });
});