// document.addEventListener('DOMContentLoaded', function() {

//   const yearBoxes = document.getElementsByClassName("year-box");
//   for (const yearBox of yearBoxes) {
//       yearBox.addEventListener('click', zoomIn);
//   }
//   function zoomIn(event) {
//       const clickedYearBox = event.currentTarget;
//       clickedYearBox.style.transform = "scale(1000)";
//       clickedYearBox.style.zIndex = 1;
//       clickedYearBox.style.transition = "ease-in 25s";
//       if (clickedYearBox.classList.contains('first-year')) {
//       setTimeout(function() {
//           window.location.href = '../../가윤2/index.html';
//       }, 1050);
//       }
//       if (clickedYearBox.classList.contains('second-year')) {
//       setTimeout(function() {
//           window.location.href = '../../가윤/index.html';
//       }, 1050);
//       }
//   }

// });


// const slide = document.querySelector(".box");
// let slideWidth = slide.clientWidth;

// const prevBtn = document.querySelector(".back");
// const nextBtn = document.querySelector(".next");

// let slideItems = document.querySelectorAll(".box");
// const maxSlide = slideItems.length;

// let currSlide = 1;

// const pagination = document.querySelector(".slide_pagination");

// for (let i = 0; i < maxSlide; i++) {
// if (i === 0) pagination.innerHTML += `<li class="active"></li>`;
// else pagination.innerHTML += `<li></li>`;
// }

// const paginationItems = document.querySelectorAll(".slide_pagination > li");

// const startSlide = slideItems[0];
// const endSlide = slideItems[slideItems.length - 1];

// const startElem = document.createElement(startSlide.tagName);
// const endElem = document.createElement(endSlide.tagName);

// endSlide.classList.forEach((c) => endElem.classList.add(c));
// endElem.innerHTML = endSlide.innerHTML;
// startSlide.classList.forEach((c) => startElem.classList.add(c));
// startElem.innerHTML = startSlide.innerHTML;

// slideItems[0].before(endElem);
// slideItems[slideItems.length - 1].after(startElem);

// slideItems = document.querySelectorAll(".box");
// let offset = slideWidth * currSlide;
// slideItems.forEach((i) => {
// i.setAttribute("style", `left: ${-offset}px`);
// });

// function nextMove() {
// currSlide++;
// if (currSlide <= maxSlide) {
//   const offset = slideWidth * currSlide;
//   slideItems.forEach((i) => {
//     i.setAttribute("style", `left: ${-offset}px`);
//   });
//   paginationItems.forEach((i) => i.classList.remove("active"));
//   paginationItems[currSlide - 1].classList.add("active");
// } else {
//   currSlide = 0;
//   let offset = slideWidth * currSlide;
//   slideItems.forEach((i) => {
//     i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
//   });
//   currSlide++;
//   offset = slideWidth * currSlide;
//   setTimeout(() => {
//     slideItems.forEach((i) => {
//       i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
//     });
//   }, 0);
//   paginationItems.forEach((i) => i.classList.remove("active"));
//   paginationItems[currSlide - 1].classList.add("active");
// }
// }
// function prevMove() {
// currSlide--;
// if (currSlide > 0) {
//   const offset = slideWidth * currSlide;
//   slideItems.forEach((i) => {
//     i.setAttribute("style", `left: ${-offset}px`);
//   });
//   paginationItems.forEach((i) => i.classList.remove("active"));
//   paginationItems[currSlide - 1].classList.add("active");
// } else {
//   currSlide = maxSlide + 1;
//   let offset = slideWidth * currSlide;
//   slideItems.forEach((i) => {
//     i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
//   });
//   currSlide--;
//   offset = slideWidth * currSlide;
//   setTimeout(() => {
//     slideItems.forEach((i) => {
//       i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
//     });
//   }, 0);
//   paginationItems.forEach((i) => i.classList.remove("active"));
//   paginationItems[currSlide - 1].classList.add("active");
// }
// }

// nextBtn.addEventListener("click", () => {
// nextMove();
// });
// prevBtn.addEventListener("click", () => {
// prevMove();
// });

// window.addEventListener("resize", () => {
// slideWidth = slide.clientWidth;
// });

// for (let i = 0; i < maxSlide; i++) {
// paginationItems[i].addEventListener("click", () => {
//   currSlide = i + 1;
//   const offset = slideWidth * currSlide;
//   slideItems.forEach((i) => {
//     i.setAttribute("style", `left: ${-offset}px`);
//   });
//   paginationItems.forEach((i) => i.classList.remove("active"));
//   paginationItems[currSlide - 1].classList.add("active");
// });
// }


// const slide1 = document.querySelector(".slide");
// let startPoint = 0;
// let endPoint = 0;

// slide1.addEventListener("mousedown", (e) => {
// startPoint = e.pageX;
// });

// slide1.addEventListener("mouseup", (e) => {
// endPoint = e.pageX;
// if (startPoint < endPoint) {
//   prevMove();
// } else if (startPoint > endPoint) {
//   nextMove();
// }
// });

// slide1.addEventListener("touchstart", (e) => {
// startPoint = e.touches[0].pageX;
// });
// slide1.addEventListener("touchend", (e) => {
// endPoint = e.changedTouches[0].pageX;
// if (startPoint < endPoint) {

//   prevMove();
// } else if (startPoint > endPoint) {

//   nextMove();
// }
// });

document.addEventListener('DOMContentLoaded', function () {

  const yearBoxes = document.getElementsByClassName("year-box");
  for (const yearBox of yearBoxes) {
      yearBox.addEventListener('click', zoomIn);
  }

  function zoomIn(event) {
      const clickedYearBox = event.currentTarget;
      clickedYearBox.style.transform = "scale(1000)";
      clickedYearBox.style.zIndex = 1;
      clickedYearBox.style.transition = "ease-in 25s"; // Adjust duration as needed

      if (clickedYearBox.classList.contains('first-year')) {
          setTimeout(function () {
              window.location.href = '../../가윤2/index.html';
          }, 1050);
      }

      if (clickedYearBox.classList.contains('second-year')) {
          setTimeout(function () {
              window.location.href = '../../가윤/index.html';
          }, 1050);
      }
  }

});

document.addEventListener('DOMContentLoaded', function() {
  const box = document.querySelector('.box');

  function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  function moveBox() {
    const maxY = window.innerHeight - box.clientHeight;
    const randomY = getRandomValue(0, maxY);

    box.style.transform = `translateY(${randomY}px)`;
  }

  setInterval(moveBox, 200); // 매 2초마다 상자를 랜덤 위치로 이동
});

const gap = 15 * (window.innerWidth / 100);

const roller = document.querySelector(".year-container");
roller.id = "roller1";

let clone = roller.cloneNode(true);
clone.id = "roller2";

document.querySelector(".slide").appendChild(clone);
document.querySelector("#roller1").style.left = "0px";
document.querySelector("#roller2").style.left = document.querySelector(".year-box").offsetWidth  + 'px';

// document.querySelector("#roller1").style.zIndex = "2";
// document.querySelector("#roller2").style.zIndex = "1";

roller.classList.add('original');
roller.classList.add('year-box');
clone.classList.add('clone');
clone.classList.add('year-box');


const slide = document.querySelector(".box");
let slideWidth = slide.clientWidth;

slideWidth += gap;

const prevBtn = document.querySelector(".back");
const nextBtn = document.querySelector(".next");

let slideItems = document.querySelectorAll(".box");
const maxSlide = slideItems.length / 2;

let currSlide = 1;

const pagination = document.querySelector(".slide_pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active"></li>`;
  else pagination.innerHTML += `<li></li>`;
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");

const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];

const startElem = document.createElement(startSlide.tagName);
const endElem = document.createElement(endSlide.tagName);

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;
startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

slideItems = document.querySelectorAll(".box");
let offset = slideWidth * currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() {
  currSlide++;
  if (currSlide <= maxSlide) {
      const offset = slideWidth * currSlide;
      slideItems.forEach((i) => {
          i.setAttribute("style", `left: ${-offset}px`);
      });
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
  } else {
      currSlide = 0;
      let offset = slideWidth * currSlide;
      slideItems.forEach((i) => {
          i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
      });
      currSlide++;
      offset = slideWidth * currSlide;
      setTimeout(() => {
          slideItems.forEach((i) => {
              i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
          });
      }, 0);
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
  }
}

function prevMove() {
  currSlide--;
  if (currSlide > 0) {
      const offset = slideWidth * currSlide;
      slideItems.forEach((i) => {
          i.setAttribute("style", `left: ${-offset}px`);
      });
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
  } else {
      currSlide = maxSlide + 1;
      let offset = slideWidth * currSlide;
      slideItems.forEach((i) => {
          i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
      });
      currSlide--;
      offset = slideWidth * currSlide;
      setTimeout(() => {
          slideItems.forEach((i) => {
              i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
          });
      }, 0);
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
  }
}

function centerCurrentSlide() {
  const viewportWidth = window.innerWidth;
  const centerOffset = (viewportWidth - slideWidth) / 2;
  const centerPosition = -slideWidth * currSlide + centerOffset;
  slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${centerPosition}px`);
  });
}

nextBtn.addEventListener("click", () => {
  nextMove();
  centerCurrentSlide();
});

prevBtn.addEventListener("click", () => {
  prevMove();
  centerCurrentSlide();
});

window.addEventListener("resize", () => {
  // 갭 다시 계산
  gap = 20 * (window.innerWidth / 100);
  slideWidth = slide.clientWidth + gap;
  centerCurrentSlide();
});

for (let i = 0; i < maxSlide; i++) {
  paginationItems[i].addEventListener("click", () => {
      currSlide = i + 1;
      const offset = slideWidth * currSlide;
      slideItems.forEach((i) => {
          i.setAttribute("style", `left: ${-offset}px`);
      });
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
      centerCurrentSlide();
  });
}

const slide1 = document.querySelector(".slide");
let startPoint = 0;
let endPoint = 0;

slide1.addEventListener("mousedown", (e) => {
  startPoint = e.pageX;
});

slide1.addEventListener("mouseup", (e) => {
  endPoint = e.pageX;
  if (startPoint < endPoint) {
      prevMove();
      centerCurrentSlide();
  } else if (startPoint > endPoint) {
      nextMove();
      centerCurrentSlide();
  }
});

slide1.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX;
});

slide1.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX;
  if (startPoint < endPoint) {
      prevMove();
      centerCurrentSlide();
  } else if (startPoint > endPoint) {
      nextMove();
      centerCurrentSlide();
  }
});

