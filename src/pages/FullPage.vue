<template>
  <div id="app">
    <div id="scroll-wrapper">
      <div class="section sec1">
        <div class="content">
          <div class="typing-container">
            <span id="text1">오늘도 주차장 찾느라 힘드셨죠?</span>
          </div>
          <img src="../assets/icons/findParking.svg" alt="Find Parking" />
        </div>
      </div>

      <div class="section sec2">
        <div class="content">
          <div class="typing-container">
            <span id="text2">주차의 자유를 찾으러 오신 걸, 환영합니다</span>
          </div>
          <img src="../assets/icons/findParking.svg" alt="Find Parking" />
        </div>
      </div>

      <div class="section sec3">
        <div class="content">
          <div class="typing-container">
            <span id="text3">나를 위한 맞춤 주차장부터 쉽차장만 알려주는 주차구역까지!</span>
          </div>
          <img src="../assets/icons/findParking.svg" alt="Find Parking" />
        </div>
      </div>

      <div class="section sec4">
        <div class="content">
          <div class="typing-container">
            <span id="text4">내 손안의 주차장, 쉽차장</span>
          </div>
          <img src="../assets/icons/findParking.svg" alt="Find Parking" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "VerticalScroll",
  data() {
    return {
      currentIndex: 0, // 현재 섹션의 인덱스
      sectionCount: 4, // 섹션의 총 개수
    };
  },
  mounted() {
    $(window).on("wheel", this.handleScroll);
  },
  beforeDestroy() {
    $(window).off("wheel", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      const delta = event.originalEvent.deltaY;
      if (delta > 0) {
        // 스크롤 다운 (다음 섹션으로 이동)
        this.nextSection();
      } else {
        // 스크롤 업 (이전 섹션으로 이동)
        this.prevSection();
      }
    },
    nextSection() {
      if (this.currentIndex < this.sectionCount - 1) {
        this.currentIndex++;
        this.scrollToSection(this.currentIndex);
      }
    },
    prevSection() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.scrollToSection(this.currentIndex);
      }
    },
    scrollToSection(index) {
      const scrollWrapper = $("#scroll-wrapper");
      const scrollAmount = index * 100;
      scrollWrapper.css({
        transform: `translateY(-${scrollAmount}vh)`, // 수직으로 이동
        transition: "transform 0.1s ease-in-out", // 부드러운 전환
      });
    },
  },
};

</script>

<style scoped>
#scroll-wrapper {
  display: flex;
  flex-direction: column; /* 수직 방향으로 섹션 배치 */
  height: 400vh; /* 총 섹션 수에 따라 높이를 설정 */
  width: 100vw; /* 화면 폭은 동일 */
  overflow: hidden; /* 스크롤 바 숨기기 */
}

.section {
  width: 100vw; /* 화면 크기만큼 섹션 폭 설정 */
  height: 100vh; /* 화면 높이만큼 섹션 높이 설정 */
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  background-color: #f2f3f7;
}

/* .section:nth-child(1) {
  background-color: #e0f7fa;
}
.section:nth-child(2) {
  background-color: #e0f7fa;
}
.section:nth-child(3) {
  background-color: #e0f7fa;
}
.section:nth-child(4) {
  background-color: #e0f7fa;
} */
</style>
