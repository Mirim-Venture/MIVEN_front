const fadeInElements = document.querySelectorAll(".scroll__text");

        document.addEventListener("scroll", function () {
            // forEach 메서드 : fadeInElements 의 각 요소에 대해 반복 작업
            fadeInElements.forEach((fadeInElement) => {
                // isInView 주어진 요소가 화면이 있는가
                if(isInView(fadeInElement)){
                    fadeInElement.classList.add("scroll__text--visible");
                }
            });
        });

        function isInView(element){
            const rect = element.getBoundingClientRect();
            return (
                rect.bottom > 0 &&
                rect.top < (window.innerHeight - 200 || document.documentElement.clientHeight - 200)
            );
        }


