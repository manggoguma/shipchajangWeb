<template>
  <div class="container">
    <div class="vm-title">
      <!-- 일반 해상도 -->
      <h1 v-if="!isSmallScreen">합법적이고 편리한 주차의 새로운 표준</h1>
      <!-- 소형 모바일 해상도 -->
      <h1 v-else>합법적이고 편리한<br>주차의 새로운 표준</h1>
    </div>
    <div class="vm-text">
      <div v-if="!isSmallScreen" class="vision-text">
        쉽차장은 모든 사람들이 불법 주차 과태료 걱정 없이,
      </div>
      <div v-else class="vision-text">
        쉽차장은 모든 사람들이 <br>불법 주차 과태료 걱정 없이,
      </div>
      <div v-if="!isSmallScreen" class="vision-text">
        어디서든 편리하게 주차 공간을 찾고 예약할 수 있는 서비스를 제공합니다.
      </div>
      <div v-else class="vision-text">
        어디서든 편리하게 주차 공간을 찾고 <br> 예약할 수 있는 서비스를 제공합니다.
      </div>
      <div v-if="!isSmallScreen" class="vision-text margin-top">
        우리는 주차를 단순한 행위가 아닌, 스트레스 없는 자연스러운 일상의 일부로 만들어가며,
      </div>
      <div v-else class="vision-text margin-top">
        우리는 주차를 단순한 행위가 아닌, <br> 스트레스 없는 자연스러운 일상의<br> 일부로 만들어가며,
      </div>
      <div v-if="!isSmallScreen" class="vision-text">
        합법적이고 효율적인 주차 문화를 정착시키고자 합니다.
      </div>
      <div v-else class="vision-text">
        합법적이고 효율적인 <br> 주차 문화를 정착시키고자 합니다.
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AboutUs",
  data() {
    return {
      isSmallScreen: false, // 화면 크기에 따라 상태 관리
    };
  },
  mounted() {
    this.checkScreenSize();
    this.startAnimation();
    window.addEventListener("resize", this.checkScreenSize);
    // 스크롤 이벤트 등록
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // 스크롤 및 리사이즈 이벤트 제거
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    handleScroll() {
      const elements = document.querySelectorAll(".vision-text");
      const windowHeight = window.innerHeight;

      elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;

        // 요소가 뷰포트에 들어오면 active 클래스 추가
        if (position < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 1024;
    },
    startAnimation() {
    const elements = document.querySelectorAll(".vision-text");
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.5}s`; // 텍스트마다 딜레이 추가
      el.classList.add("active"); // 애니메이션 활성화
    });
  },
  },
};
</script>


<style scoped>
/* Container Styles */
.container {
  padding: 20rem;
  height: 100vh;
  background: url('@/assets/icons/about.svg') center / auto no-repeat fixed;
  color: black;
}

.vm-title {
  font-family: 'NanumSquareNeoHeavy', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 4rem;
}

.vm-text {
  text-align: center;
}

.vision-text {
  opacity: 0;
  transform: translateY(0.5rem) scale(0.9);
  animation: fadeInUp 1.5s ease-out forwards;
  margin-bottom: 2rem;
  font-family: NanumSquareNeoExtraBold;
  color: #464646;
  font-size: 2rem;
}

.vision-text:nth-child(1) {
  animation-delay: 0.5s;
  /* 첫 번째 텍스트 딜레이 */
}

.vision-text:nth-child(2) {
  animation-delay: 1s;
  /* 두 번째 텍스트 딜레이 */
}

.vision-text:nth-child(3) {
  animation-delay: 1.5s;
  /* 세 번째 텍스트 딜레이 */
}

.vision-text:nth-child(4) {
  animation-delay: 2s;
  /* 네 번째 텍스트 딜레이 */
}
.vision-text.active {
  animation: fadeInUp 1.5s ease-out forwards; /* 애니메이션 활성화 */
}

/* 애니메이션 정의 */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
    /* 아래로 이동한 상태에서 축소 */
  }

  50% {
    opacity: 0.5;
    transform: translateY(15px) scale(1.02);
    /* 약간 커지는 효과 */
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    /* 제자리에서 원래 크기 */
  }
}

.margin-top {
  margin-top: 7rem;
  /* 원하는 마진 값 설정 */
}

/* 태블릿 (1024px 이하) */
@media screen and (max-width: 1024px) {
  .container {
    padding: 10rem;
   height: 96vh;
   margin-top : 4vh;
  }

  .vm-title {
    font-size: 1.7rem;
    margin-bottom: 3rem;
  }

  .vm-text {
    text-align: center;
  }

  .vision-text {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .margin-top {
    margin-top: 5rem;
  }
}

/* 모바일 (768px 이하) */
@media screen and (max-width: 768px) {
  .container {
    padding: 5rem 2rem;
    background-size: cover !important; /* 배경 이미지를 화면에 꽉 차게 */
    background-position: center top;
    background: url('@/assets/icons/모바일 about 480px.svg') center / auto no-repeat fixed;
  }
  .vm-title {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .vision-text {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  .margin-top {
    margin-top: 4rem;
  }
}

/* 소형 모바일 (480px 이하) */
@media screen and (max-width: 480px) {
  .container {
    height: 60vh;
    background-size: cover !important; /* 배경 이미지를 화면에 꽉 차게 */
    background-position: center top;
    background: url('@/assets/icons/모바일 about 480px.svg') center / auto no-repeat fixed;
  }

  .vm-title {
    font-size: 0.8rem;
    text-align: center;
    /* 텍스트 중앙 정렬 */
  }

  .vision-text {
    font-size: 1rem;

  }

  .margin-top {
    margin-top: 2.5rem;
  }
}

</style>
