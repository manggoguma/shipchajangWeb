<template>
  <div class="onboardingContainer">
    <div class="onboardingWrapper" :class="{ scrolledBackground: backgroundChanged }" @wheel="handleScroll">
      <!-- BlueCar 애니메이션 -->
      <img src="../assets/icons/blueCar.svg" alt="Blue Car" class="blueCar" :style="{ top: `${carPosition}%` }" />

      <!-- 텍스트와 링크 -->
      <div v-if="textVisible" class="content fade-in">
        <h1 v-if="isSmallScreen">
          쾌적한 주차장,
          <br />편리한 쉽차장
        </h1>
        <h1 v-else>
          쾌적한 주차장, 편리한 쉽차장
        </h1>
        <h3>합법적이고 효율적인 주차 문화의 시작</h3>
        <img src="../assets/icons/plzDown.svg" alt="" class="plzdown">
        <div class="link-section">
          <a href="https://play.google.com/store/apps/details?id=com.novalink.shipchajang&hl=ko">
            <img src="../assets/icons/googleplayWhtie.svg" alt="App Store" />
          </a>
          <a href="https://apps.apple.com/kr/app/%EC%89%BD%EC%B0%A8%EC%9E%A5/id6470422957">
            <img src="../assets/icons/applestoreWhite.svg" alt="Google Play" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "OnboardingPage",
  data() {
    return {
      backgroundChanged: false,
      carPosition: -30, 
      isSmallScreen: false,
      textVisible: false, 
      animationCompleted: false,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 480;
    },
    handleScroll() {
      if (this.animationCompleted) {
        return;
      }
      
      event.preventDefault();
      // 애니메이션 시작
      this.triggerAnimation();
    },
   
    triggerNext() {
      console.log("애니메이션 완료, 다음 페이지로 이동 가능합니다.");
      window.removeEventListener("scroll", this.handleScroll); // 스크롤 감지 제거
    },
    triggerAnimation() {
  this.backgroundChanged = true; 
  setTimeout(() => {
    let maxPosition;
    const screenHeight = window.innerHeight; 

    if (screenHeight <= 670) {
      maxPosition = 66; // 작은 화면
    } else if (screenHeight <= 800) { 
      maxPosition = 70; // 중간 화면
    } else { 
      maxPosition = 64; // 큰 화면
    }

    const carInterval = setInterval(() => {
      if (this.carPosition < maxPosition) {
        this.carPosition += 0.5;
      } else {
        clearInterval(carInterval);
        this.revealText();
      }
    }, 30);
  }, 500);   
}



,
    revealText() {
      setTimeout(() => {
        this.textVisible = true; 
        this.animationCompleted = true; 
        window.removeEventListener("scroll", this.handleScroll);
      }, 300);
    },
  },
};
</script>

<style>
.onboardingWrapper {
  background-image: url('@/assets/icons/beforeScroll.svg');
  margin-top: 8vh;
  height: 92vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-repeat: no-repeat;
  transition: background-image 2s ease-in-out
}

.onboardingWrapper.scrolledBackground {
  background-image: url('@/assets/icons/afterScroll.svg');
}

.blueCar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scale(1.2);
  height: auto;
  top: -20%;
  transition: top 0.3s linear;
}

/* 문구와 링크 스타일 */
.content {
  position: absolute;
  top: 5%;
  transform: translateY(20px);
  /* 초기 위치 */
  text-align: center;
  opacity: 0;
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.content.fade-in {
  opacity: 1;
  transform: translateY(0);
}


.content h1 {
  font-family: NanumSquareNeoHeavy;
  font-size: 4rem;
  margin-bottom: 3rem;
  color: white;
}

.content h3 {
  font-family: NanumSquareNeoExtraBold;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: white;
}

.content .link {
  font-size: 1rem;
  color: #5B67EC;
  text-decoration: none;
  font-weight: bold;
}

.content .link:hover {
  text-decoration: underline;
}

.link-section {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@media screen and (max-width: 1024px) {
  .onboardingWrapper {
    margin-top: 5vh;
    height: 100vh;
  }

  .blueCar {
    transform: translateX(-50%) scale(1.4);
    top: -10%;
    transition: top 0.3s linear, transform 0.3s linear;
  }

  .content {
    top: 15%;
    padding: 0 2rem;
  }

  .content h1 {
    font-size: 3.5rem;
    line-height: 1.2;
  }

  .content h3 {
    font-size: 2.2rem;
    line-height: 1.5;
  }

  .link-section img {
    width: 18rem;
  }
}

@media screen and (max-width: 768px) {
  .onboardingWrapper {
    margin-top: 5vh;
    height: 100vh;
  }

  .blueCar {
    transform: translateX(-50%) scale(1.2);
    top: -15%;
  }

  .content {
    top: 15%;
    padding: 0 1.5rem;
  }

  .content h1 {
    font-size: 3rem;
    line-height: 1.3;
  }

  .content h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
.plzdown{
  width: 30rem ;
}
  .link-section img {
    width: 14rem ;
  }
}

@media screen and (max-width: 480px) {
  .onboardingWrapper {
    background-image: url('@/assets/icons/beforescroll480.svg');
    margin-top: 3vh;
    height: 95vh;
    justify-content: flex-start;
    padding-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center; /* 수평 중앙 정렬 */
    justify-content: center; /* 수직 중앙 정렬 */
  }
  .onboardingWrapper.scrolledBackground {
    background-image: url('@/assets/icons/afterscroll480.svg');
  }
  .blueCar {
    transform: translateX(-50%) scale(1);
    top: -10%;
  }
  .content {
    top: 15%; 
    transform: translate(-50%, -50%); 
    padding: 0 1rem;
    text-align: center;
    position: absolute; 
  }

  .content h1 {
    font-size: 2rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  .content h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .link-section {
    flex-direction: column;
    gap: 0.5rem;
  }
  .plzdown {
    width: 15rem;
  }
  .link-section img {
    width: 10rem;
  }
}
@media screen and (max-width: 380px) {
  .blueCar {
    transform: translateX(-50%) scale(0.9);

  }}

</style>