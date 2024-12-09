<template>
    <div class="onboardingWrapper">
      <img src="../assets/icons/blueCar.svg" alt="Blue Car" class="blueCar" />
      <div v-if="showContent" class="content">
        <h1 v-if="isSmallScreen">
          쾌적한 주차장,
          <br>편리한 쉽차장
        </h1>
    
        <h1 v-else>
          쾌적한 주차장, 편리한 쉽차장
        </h1>
        <h3>합법적이고 효율적인 주차 문화의 시작</h3>
        <img src="../assets/icons/plzDown.svg" alt="" class="plzDown" />
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
  </template>
  
  <script>
  export default {
    name: "onboardingPage",
    data() {
      return {
        showContent: false, // 문구와 링크 표시 여부
        isSmallScreen: false, // 화면 크기 상태
      };
    },
    mounted() {
      this.checkScreenSize(); // 화면 크기 확인
      window.addEventListener("resize", this.checkScreenSize); // 화면 크기 변경 감지
      setTimeout(() => {
        this.showContent = true;
      }, 1500); // 애니메이션 시간과 동일한 1.5초
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.checkScreenSize);
    },
    methods: {
      checkScreenSize() {
        this.isSmallScreen = window.innerWidth <= 480; // 480px 이하 확인
      },
    },
    watch: {
      isSmallScreen(newVal) {
        console.log(`화면 크기 상태 변경: ${newVal ? "소형 화면" : "대형 화면"}`);
      },
    },
  };
  </script>
   
  
  <style>
  .onboardingWrapper {
    background-image: url('@/assets/icons/d.svg');
    margin-top : 8vh;
    height: 92vh;
    background-size:cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-repeat: no-repeat; /* 반복 제거 */
  }
  .blueCar {
  position: absolute;
  top: -20%; /* 화면 위에서 시작 */
  left: 50%; /* 가로 정중앙 */
  transform: translateX(-50%) scale(1.2); /* 수평 정중앙으로 이동 */
  height: auto;
  animation: moveCar 1s linear; /* 위에서 아래로 1.5초 동안 이동 */
  animation-fill-mode: forwards; /* 애니메이션 종료 후 마지막 상태 유지 */
}

  
@keyframes moveCar {
  0% {
    top: -20%; /* 시작 위치: 화면 위 */
  }
  100% {
    top: 67%; /* 종료 위치: 화면 정중앙 */
  }
}
  
  /* 문구와 링크 스타일 */
  .content {
    position: absolute;
    top:30%; 
    transform: translateY(-50%); 
  text-align: center; 
  opacity: 0;
  animation: fadeIn 0.5s forwards;
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
    height: 95vh;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-repeat: no-repeat; /* 반복 제거 */
    padding: 0 1rem; /* 좌우 패딩 추가 */
  }

  .blueCar {
    position: absolute;
    top: -20%; /* 화면 위에서 시작 */
    left: 50%; /* 가로 정중앙 */
    transform: translateX(-50%) scale(2); /* 수평 정중앙으로 이동 */
    height: 100px; /* 크기를 줄여 작은 화면에 맞춤 */
    animation: moveCar 1.5s linear 1; /* 위에서 아래로 1.5초 동안 이동 */
    animation-fill-mode: forwards; /* 애니메이션 종료 후 마지막 상태 유지 */
  }

  @keyframes moveCar {
    0% {
      top: -20%; /* 시작 위치: 화면 위 */
    }
    100% {
      top: 78%; /* 종료 위치: 화면 중앙 */
    }
  }

  .content {
    position: absolute;
    top: 37%; /* 텍스트를 중앙에 배치 */
    transform: translateY(-50%); 
    text-align: center; 
    opacity: 0;
    animation: fadeIn 1s forwards;
    padding: 0 1rem; /* 좌우 여백 추가 */
  }

  .content h1 {
    font-family: NanumSquareNeoHeavy;
    font-size: 2.5rem; /* 텍스트 크기를 줄임 */
    margin-bottom: 2rem;
    color: white;
    white-space: pre-line; /* 줄바꿈을 자동으로 허용 */
    line-height: 1.4; /* 줄 간격 조정 */
  }

  .content h3 {
    font-family: NanumSquareNeoExtraBold;
    font-size: 1rem; /* 텍스트 크기를 줄임 */
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
  .plzDown{
    transform: scale(0.5);
  }
}

  </style>
  