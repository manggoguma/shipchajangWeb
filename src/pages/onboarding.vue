<template>
  <div class="onboardingContainer">
    <div class="onboardingWrapper" :class="{ scrolledBackground: backgroundChanged }" @scroll="handleScroll">
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
      carPosition: -20, 
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
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 480;
    },
    handleScroll() {
      const scrollPosition = window.scrollY;

      // 배경 전환 트리거
      if (scrollPosition > 10 && !this.backgroundChanged) {
        this.backgroundChanged = true;
      }

      // BlueCar 이동
      const startScroll = 50; 
      const endScroll = 500;
      if (scrollPosition > startScroll && scrollPosition <= endScroll) {
        const progress = (scrollPosition - startScroll) / (endScroll - startScroll);
        this.carPosition = -20 + progress * 70; 
      } else if (scrollPosition <= startScroll) {
        this.carPosition = -20;
      }
    
      if (this.carPosition >= 30 && this.carPosition <= 50) {
        this.textVisible = true;
      } else {
        this.textVisible = false; 
      }
    }
    ,

    triggerAnimation() {
      this.backgroundChanged = true; 
      setTimeout(() => {

        const carInterval = setInterval(() => {
          if (this.carPosition < 50) {
            this.carPosition += 1; 
          } else {
            clearInterval(carInterval);
            this.revealText(); 
          }
        }, 20);
      }, 500); 
    },
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
  transform: translateX(-50%);
  height: auto;
  top: -20%;
  /* 초기 위치 */
  transition: top 0.1s linear;
  /* 부드러운 위치 변경 */
}

@keyframes moveCar {
  0% {
    top: -20%;
    /* 시작 위치: 화면 위 */
  }

  100% {
    top: 67%;
    /* 종료 위치: 화면 정중앙 */
  }
}

/* 문구와 링크 스타일 */
.content {
  position: absolute;
  top: 30%;
  transform: translateY(20px);
  /* 초기 위치 */
  text-align: center;
  opacity: 0;
  /* 초기 상태 숨김 */
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
  /* 부드러운 등장 및 사라짐 */
}

.content.fade-in {
  opacity: 1;
  /* 텍스트가 서서히 나타남 */
  transform: translateY(0);
  /* 원래 위치 */
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.link-section {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@media screen and (max-width: 480px) {
  .onboardingWrapper {
    background-image: url('@/assets/icons/new360onboard.svg');
    margin-top: 5vh;
    height: 200vh;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-repeat: no-repeat;
    /* 반복 제거 */
    padding: 0 1rem;
    /* 좌우 패딩 추가 */
  }

  .blueCar {
    position: absolute;
    top: -20%;
    /* 화면 위에서 시작 */
    left: 50%;
    /* 가로 정중앙 */
    transform: translateX(-50%) scale(2);
    /* 수평 정중앙으로 이동 */
    height: 100px;
    /* 크기를 줄여 작은 화면에 맞춤 */
    animation: moveCar 1.5s linear 1;
    /* 위에서 아래로 1.5초 동안 이동 */
    animation-fill-mode: forwards;
    /* 애니메이션 종료 후 마지막 상태 유지 */
  }

  @keyframes moveCar {
    0% {
      top: -20%;
      /* 시작 위치: 화면 위 */
    }

    100% {
      top: 78%;
      /* 종료 위치: 화면 중앙 */
    }
  }

  .content {
    position: absolute;
    top: 37%;
    /* 텍스트를 중앙에 배치 */
    transform: translateY(-50%);
    text-align: center;
    opacity: 0;
    animation: fadeIn 1s forwards;
    padding: 0 1rem;
    /* 좌우 여백 추가 */
  }

  .content h1 {
    font-family: NanumSquareNeoHeavy;
    font-size: 2.5rem;
    /* 텍스트 크기를 줄임 */
    margin-bottom: 2rem;
    color: white;
    white-space: pre-line;
    /* 줄바꿈을 자동으로 허용 */
    line-height: 1.4;
    /* 줄 간격 조정 */
  }

  .content h3 {
    font-family: NanumSquareNeoExtraBold;
    font-size: 1rem;
    /* 텍스트 크기를 줄임 */
    margin-bottom: 0rem;
    color: white;
  }

  .link-section {
    flex-direction: column;
    margin-top: 0rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }

  .link-section img {
    height: auto;
    width: 9rem;
  }

  .plzDown {
    transform: scale(0.5);
  }
}
</style>