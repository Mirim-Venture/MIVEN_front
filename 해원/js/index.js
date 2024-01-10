document.addEventListener('DOMContentLoaded', function() {
    const yearBoxes = document.getElementsByClassName("year-box");


    const roller = document.querySelector(".year-container");
    roller.id = "roller1";

    let clone = roller.cloneNode(true);
    clone.id = "roller2";
    
    document.querySelector(".wrapper").appendChild(clone);
    document.querySelector("#roller1").style.left = "0px";
    document.querySelector("#roller2").style.left = document.querySelector(".year-box").offsetWidth + 'px';

    roller.classList.add('original');
    roller.classList.add('year-box');
    clone.classList.add('clone');
    clone.classList.add('year-box');


    for (const yearBox of yearBoxes) {
        yearBox.addEventListener('click', zoomIn);
    }

    function zoomIn(event) {
        const clickedYearBox = event.currentTarget;
        clickedYearBox.style.transform = "scale(1000)";
        clickedYearBox.style.zIndex = 1;
        clickedYearBox.style.transition = "ease-in 18s";
    }
});

