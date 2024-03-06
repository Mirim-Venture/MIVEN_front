const mainTexts = document.querySelectorAll('.scroll_main__text');
// 현재 선택된 텍스트 요소의 인덱스를 저장하는 변수
        let currentIndex = -1;

        function showText(index) {
            // mainTexs에 포함된 각 요소에 대해 반복문을 실행함
            // 각 요소는 mainText 로 해당 요소의 인덱스는 i로 사용됨
            mainTexts.forEach((mainText, i) => {
                if(i === index - 1) {
                    mainText.style.opacity = 1;
                    mainText.style.transform = 'translate(-50%, 0%)';
                } // div 하나하나
                else if(i === index - 2) {
                    mainText.style.opacity = 1;
                    mainText.style.transform = 'translate(-50%, -50%)';
                } 
                else if(i === index - 3){
                    mainText.style.opacity = 1;
                    mainText.style.transform = 'translate(-50%, -100%)';
                }
                else if(i === index - 4){
                    mainText.style.opacity = 1;
                    mainText.style.transform = 'translate(-50%, -150%)';
                }
                else if(i === index - 5){
                    mainText.style.opacity = 1;
                    mainText.style.transform = 'translate(-50%, -200%)';
                }
                else if(i === index - 6){
                    mainText.style.opacity = 1;
                    mainText.style.transform = 'translate(-50%, -250%)';
                }
                else {
                    mainText.style.opacity = 0;
                    mainText.style.transform = 'translate(-50%, 500%)';
                }
            });


        }

        function handleScroll() {
            // scrollY : 현재 화면에서 스크롤된 세로 픽셀 수를 나타냄
            // pageYOffset : 는 scrollY와 동일한 값을 제공하는 대체 속성
            const scrollY = window.scrollY || window.pageYOffset;
            // threshold : 스크롤 이벤트가 발생할 임계값을 계산
            // document.body.clientHeight : 문서의 총 세로 높이 
            // window.innerHeight : 현재 보이는 브라우저 창의 높이를 나타냅니다.
            // 이를 이용하여 스크롤 이벤트 발생 임계값을 계산.

            const threshold = (document.body.clientHeight - window.innerHeight) / 100;
            const totalTexts = mainTexts.length;

            // newIndex는 새롭게 선택될 텍스트의 인덱스를 계산.
            // scrollY를 스크롤 임계값(threshold)의 일부로 나누고, totalTexts로 나누어 몇 번째 텍스트가 선택될지 결정합니다.
            // Math.floor()를 사용하여 소수점 이하를 버림.
            let newIndex = Math.floor(scrollY / (threshold / totalTexts));


            if (newIndex >= totalTexts) {
                newIndex = totalTexts - 1;
            } else if (newIndex < 0) {
                newIndex = 0;
            }

            // 이 조건은 현재 선택된 인덱스와 새로 계산된 인덱스가 다를 때만 실행됩니다.
            if (newIndex !== currentIndex) {
                currentIndex = newIndex;
                showText(currentIndex);
                // 이 부분은 보조 변수로, 현재 텍스트가 화면에 보이는지 여부를 나타냄
                isTextVisible = true;
            }
        }

        
        window.addEventListener('scroll', handleScroll);
        
        // if (scrollY > threshold - totalTexts - 200) {
        //     scrollText.classList.remove('active');
        //   }
        handleScroll(); 


       