<template>
  <div id="app">
    <div id="scroll-container">
      <div class="section sec1">
        <div class="content">
          <div class="typing-container">
            <span id="text-sec1"></span><span id="cursor-sec1"></span>
          </div>
          <img src="../assets/icons/qnpfr.svg" alt="Find Parking" class="image-qnpfr" />
          <img src="../assets/icons/Driver.svg" alt="Find Parking" style="width: 50%;"/>
        </div>
      </div>
      <div class="section sec2">
        <div class="content">
          <div class="typing-container">
            <span id="text-sec2"></span><span id="cursor-sec2"></span>
          </div>
          <div class="image-warpper">
            <!-- <img src="../assets/icons/section1.svg" alt="section1" class="image active" /> -->
            <img src="../assets/icons/sec1.svg" alt="sec1" class="image active" />
            <img src="../assets/icons/sec2.svg" alt="sec2" class="image" style="width: 110%;"/>
            <img src="../assets/icons/sec3.svg" alt="sec3" class="image"  style="width: 110%;"/>
          </div>

        </div>
      </div>
      <div class="section sec3">
        <div class="content">
          <div class="typing-container">
            <span id="text-sec3"></span><span id="cursor-sec3"></span>
          </div>
          <div class="image-container">
            <img src="../assets/icons/mentionimg.svg" alt="Mention" />
            <img src="../assets/icons/carimg.svg" alt="Car" />
            <img src="../assets/icons/arrowimg.svg" alt="Arrow" />
          </div>
          <div class="link-section">
            <a href="https://www.shipchajang.com/">
              <img src="../assets/icons/blackgoogle.svg" alt="App Store" />
            </a>
            <a href="#">
              <img src="../assets/icons/blackapple.svg" alt="Google Play" />
            </a>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.observeSections();
    this.startImageRotation();
  },
  methods: {
    observeSections() {
      const sections = document.querySelectorAll(".section");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.typeWriter(entry.target.dataset.index);
              entry.target.classList.add("visible");
            } else {
              entry.target.classList.remove("visible");
            }
          });
        },
        { threshold: 0.5 }
      );

      sections.forEach((section, index) => {
        section.dataset.index = index + 1; // 각 섹션에 인덱스 부여
        observer.observe(section);
      });
    },
    typeWriter(index) {
      const texts = [
        "오늘도 주차장 찾느라 힘드셨죠?",
        "나를 위한 맞춤 주차장부터 쉽차장만 알려주는 주차구역까지!",
        "주차의 자유를 찾으러 오신 걸, 환영합니다",
      ];
      const text = texts[index - 1]; // 해당 섹션의 텍스트 가져오기
      const textElement = document.getElementById(`text-sec${index}`);
      const cursorElement = document.getElementById(`cursor-sec${index}`);
      let charIndex = 0;
      let speed = 100;

      // `typing` 함수를 블록 바깥으로 이동
      const typing = () => {
        if (charIndex < text.length) {
          textElement.textContent += text.charAt(charIndex);
          charIndex++;
          setTimeout(typing, speed);
        } else {
          cursorElement.classList.add("blink"); // 타이핑 완료 후 커서 숨김
        }
      };

      // 타이핑 실행 조건 확인
      if (textElement && cursorElement && textElement.textContent === "") {
        typing(); // 함수 호출
      }
    },
    startImageRotation() {
      const images = document.querySelectorAll('.image-warpper .image');
      let currentIndex = 0;

      setInterval(() => {
        // 현재 활성화된 이미지 비활성화
        images[currentIndex].classList.remove('active');

        // 다음 이미지 활성화
        currentIndex = (currentIndex + 1) % images.length; // 순환
        images[currentIndex].classList.add('active');
      }, 2000); // 2초마다 전환
    }

  },

};
</script>

<style scoped>
/* 전체 컨테이너 스타일 */
#scroll-container {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: scroll;
  height: 100vh;
  scrollbar-width: none;
  -ms-overflow-style: none;

}

/* 스크롤바 숨김 (Webkit) */
#scroll-container::-webkit-scrollbar {
  display: none;
}

/* 섹션 스타일 */
.section {
  scroll-snap-align: start;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 1s ease, transform 1s ease;
}
.sec1 {
  background-color: #ffffff;
}
.sec2 {
  background-color: #fbfbfc;
}
.sec3 {
  background-color: #f6f6f9;
}


.section.visible {
  opacity: 1;
}

/* 콘텐츠 스타일 */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50vw;
}

/* 타이핑 효과 스타일 */
.typing-container {
  font-size: 35px;
  font-weight: 700;
  font-family: 'NanumSquareNeoBold';
  margin-bottom: 7rem;

}

.typing-container span {
  display: inline-block;
}

.typing-container #cursor {
  border-left: 2px solid #000;
  /* 커서 스타일 */
  animation: blink 0.7s infinite;
  display: inline-block;
  margin-left: 2px;
  height: 35px;
  /* 폰트 크기와 동일하게 설정 */
  vertical-align: middle;
}

/* 커서 깜박임 애니메이션 */
@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* 이미지 전용 컨테이너 */
.image-container {
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
}

/* 공통 이미지 스타일 */
.image-container img {
  position: absolute;
    height: auto; /* 비율 유지 */
  object-fit: contain; /* 이미지를 비율에 맞게 유지 */
}

/* mention 이미지 */
.image-container img:nth-child(1) {
  z-index: 1;
  top: 40px;
  left: 43%;
  transform: translateX(-60%);
  opacity: 0;
  animation: fadeIn 0.8s ease-in-out forwards;
  animation-delay: 3s;
}

/* car 이미지 */
.image-container img:nth-child(2) {
  z-index: 3;
  top: 12px;
  left: 71%;
  transform: translateX(0%) scale(1);
  opacity: 0;
  animation: diagonalSlideIn 2s ease-in-out forwards;
  animation-delay: 0.3s;
}

/* arrow 이미지 */
.image-container img:nth-child(3) {
  z-index: 2;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}


@keyframes diagonalSlideIn {
  0% {
    transform: translate(-20%, 0%) scale(0.8);
    /* 초기 위치 (left: 70%;에서 시작) */
    opacity: 0;
    /* 숨김 상태 */
  }

  100% {
    transform: translate(-93%, 45%) scale(1);
    /* 최종 위치 */
    opacity: 1;
    /* 완전히 보이기 */
  }
}


/* mention 이미지: 페이드 인 애니메이션 */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.link-section {
  margin-top: 5rem;
  /* 링크 섹션의 위쪽 여백 */
  display: flex;
  gap: 20px;
  /* 링크 간 간격 */
  justify-content: center;
  /* 링크 정렬 */
}

.image-warpper {
  position: relative;
  width: 30rem;
  /* 컨테이너 너비 */
  height: 30rem;
  /* 컨테이너 높이 */
  overflow: hidden;
}

.image-warpper .image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* 초기 상태: 투명 */
  transition: opacity 1s ease;
  /* 부드러운 전환 효과 */
}

.image-warpper .image.active {
  opacity: 1;
  /* 활성화된 이미지만 표시 */
}

/* Driver 이미지: 기본적으로 보임 */
.image-driver {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 1s ease;
  z-index: 1; /* 아래에 표시 */
}

/* qnpfr 이미지: 초기 상태는 숨김 */
.image-qnpfr {
  margin-bottom: 1rem;
  opacity: 0; /* 초기 투명 */
  transition: opacity 1s ease; /* 서서히 나타나는 효과 */
  animation: fadeIn 2s ease-in-out forwards; /* 애니메이션 추가 */
  animation-delay: 1.5s; /* 2초 지연 후 시작 */
}
@keyframes fadeIn {
  0% {
    opacity: 0; /* 투명 */
  }
  100% {
    opacity: 1; /* 완전 표시 */
  }
}

/* 미디어쿼리 */
@media screen and (max-width: 1024px) {
  .content {
    width: 70vw;
  }

  .typing-container {
    font-size: 28px;
    margin-bottom: 5rem;
  }

  .image-warpper {
    width: 24rem;
    height: 24rem;
  }

}

@media screen and (max-width: 768px) {
  .content {
    width: 90vw;
  }
  #text-sec2 {
    font-size: 1.2rem; /* 글자 크기 조정 */
    line-height: 1.5; /* 줄 간격 조정 */
    text-align: center; /* 텍스트 정렬 변경 */
  }
  .typing-container {
    font-size: 20px;
    margin-bottom: 3rem;
  }

  .image-warpper {
    width: 20rem;
    height: 20rem;

  }
 .image-container{
  height: 50vh;

 }
  .image-container img:nth-child(1) {
    top: 9vh; 
    left: 25vw; 
    width: 25vw;
  }

  .image-container img:nth-child(2) {
    top: 9vh;
    left: 75vw;
    width: 35vw; /* 화면 너비의 30% 크기 */
  }

  .image-container img:nth-child(3) {
    top: 13vh;
    left: 50vw;
    width: 35vw; /* 화면 너비의 20% 크기 */
  }

  .link-section {
    margin-top: 0;
    flex-direction: column;
    gap: 10px;

  }
}

@media screen and (max-width: 480px) {
  .content {
    width: 100%;
    padding: 0 1rem;
  }
  .typing-container { 
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  .image-warpper {
    width: 15rem;
    height: 15rem;
  }

  .link-section {
    margin-top: 2rem;
    gap: 5px;
  }
  .image-container {height: 35vh;}
  
 .image-container img:nth-child(1) {
    top: 8vh;
    left: 40vw;
    width: 30vw; /* 화면 너비의 30% 크기 */
  }

  .image-container img:nth-child(2) {
    top: 12vh;
    left: 66vw;
    width: 35vw; /* 화면 너비의 35% 크기 */
  }

  .image-container img:nth-child(3) {
    left: 48vw;
    width: 45vw; /* 화면 너비의 25% 크기 */
  }
}

@keyframes diagonalSlideInMobile {
  0% {
    transform: translate(-10%, 0%) scale(0.7);
    opacity: 0;
  }
  100% {
    transform: translate(-73%, 58%) scale(1);
    opacity: 1;
  }
}
</style>
