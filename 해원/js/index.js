let roller = document.querySelector('.rolling-list');
roller.id = 'roller1';

let clone = roller.cloneNode(true)
clone.id = 'roller2';
document.querySelector('.wrap').appendChild(clone);

document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'px';

roller.classList.add('original');
clone.classList.add('clone');

document.addEventListener('DOMContentLoaded', function () {
    const yearBoxes = document.querySelectorAll('.rolling-list ul li div');
    for (const yearBox of yearBoxes) {
        yearBox.addEventListener('click', zoomIn);
    }

    function zoomIn(event) {
    const clickedYearBox = event.currentTarget;

    if (!clickedYearBox.classList.contains('comming-soon')) {
        clickedYearBox.style.transform = "scale(1000)";
        clickedYearBox.style.zIndex = 1;
        clickedYearBox.style.transition = "ease-in 25s"; //

        if (clickedYearBox.closest('li').classList.contains('first-year')) {
            setTimeout(function () {
                window.location.href = '../../가윤2/index.html';
            }, 1050);
        }

        if (clickedYearBox.closest('li').classList.contains('second-year')) {
            setTimeout(function () {
                window.location.href = '../../가윤/index.html';
            }, 1050);
        }

    }
}

});

const slide = document.querySelector(".rolling-list ul li");
let slideWidth = slide.clientWidth;

// slideWidth += gap;

const prevBtn = document.querySelector(".back");
const nextBtn = document.querySelector(".next");

let slideItems = document.querySelectorAll(".rolling-list ul li");
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

slideItems = document.querySelectorAll(".rolling-list ul li");
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
  // gap = 20 * (window.innerWidth / 100);
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

const slide1 = document.querySelector(".wrap");
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

// document.addEventListener('DOMContentLoaded', function () {
//     const listItems = document.querySelectorAll('.rolling-list ul li');

//     setInterval(function () {
//         listItems.forEach(function (item) {
//             const randomOffset = Math.floor(Math.random() * 41) - 20; // -20 ~ 20의 랜덤한 값을 생성
//             item.style.transform = `translateY(${randomOffset}px)`;
//         });
//     }, 2000); // 2초마다 움직이도록 설정, 필요에 따라 조절 가능
// });

document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.rolling-list ul li');

    // 각 li 요소에 대해 독립적으로 랜덤한 초기 위치 설정
    const initialOffsets = Array.from(listItems, function () {
        return Math.floor(Math.random() * 41) - 20; // -20 ~ 20의 랜덤한 값을 생성
    });

    // 현재 시간을 이용하여 부드러운 움직임을 생성
    function updateAnimation() {
        const currentTime = Date.now();

        listItems.forEach(function (item, index) {
            const elapsed = (currentTime % 2000) / 2000; // 주기를 기준으로 경과 시간을 계산 (0 ~ 1)
            const offset = initialOffsets[index] + Math.sin(elapsed * Math.PI * 2) * 10; // sin 함수를 사용하여 일렬의 파도 모양 효과 생성
            item.style.transform = `translateY(${offset}px)`;
        });

        requestAnimationFrame(updateAnimation);
    }

    updateAnimation();
});
