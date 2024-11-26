<template>
  <div class="container">
    <div class="vm-title">
      <h1>합법적이고 편리한 주차의 새로운 표준</h1>
    </div>
    <div class="vm-text">
      <div class="vision-text">
        쉽차장은 모든 사람들이 불법 주차 과태료 걱정 없이,
      </div>
      <div class="vision-text">
        어디서든 편리하게 주차 공간을 찾고 예약할 수 있는 서비스를 제공합니다.
      </div>

      <div class="vision-text  margin-top">
        우리는 주차를 단순한 행위가 아닌, 스트레스 없는 자연스러운 일상의
      </div>
      <div class="vision-text">
        일부로 만들어가며, 합법적이고 효율적인 주차 문화를 정착시키고자 합니다.
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AboutUs",
  mounted() {
    // 스크롤 이벤트 등록
    window.addEventListener("scroll", this.handleScroll);
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
  },
  beforeDestroy() {
    // 메모리 누수를 방지하기 위해 이벤트 제거
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
/* Container Styles */
.container {
  padding: 20rem;
  height: 100vh;
  background: url('@/assets/icons/aboutUSbg.svg') center / auto no-repeat fixed;
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
  margin-top: 7rem; /* 원하는 마진 값 설정 */
}
</style>
