<template>
  <div id="general-section">
    <div class="cardPage">
      <!-- 첫 번째 카드 -->
      <div class="infoCardFirst">
        <p>등록된 주차장</p>
        <div class="numSection">
          <h2>{{ formatNumber(displayedUserCount) }}</h2>
          <p>개</p>
        </div>
        <h6 class="card-footer">*2024년 11월 기준</h6>
        <img src="../assets/icons/numcard1.svg" alt="카드 이미지">
      </div>

      <!-- 두 번째 카드 -->
      <div class="infoCardSecond">
        <div>
          <p>주차의 자유를 찾은 사람</p>
          <div class="numSection">
            <h2>{{ formatNumber(displayedParkingCount) }}</h2>
            <p>개</p>
          </div>
          <img class="img-second" src="../assets/icons/numcard2.svg" alt="카드 이미지">
        </div>
        <div>
          <p>단축되는 주차 소요 시간</p>
          <div class="numSection">
            <p>평균</p>
            <h2>{{ formatNumber(displayedSlotCount) }}</h2>
            <p>분</p>
          </div>
          <h6 class="card-footer">* 쉽차장 자체 테스트 <br>(광주광역시 동명동에서 시행)</h6>
          <img class="img-third" src="../assets/icons/numcard3.svg" alt="카드 이미지">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumCard',
  data() {
    return {
      totalUserCount: 12387,
      totalParkingCount: 12349,
      totalSlotCount: 2800,
      displayedUserCount: 0,
      displayedParkingCount: 0,
      displayedSlotCount: 0,
    };
  },
  mounted() {
    this.resetCounters();
    const observer = new IntersectionObserver(this.handleIntersection, { threshold: 0.5 });
    observer.observe(document.getElementById('general-section'));
  },
  methods: {
    resetCounters() {
      this.displayedUserCount = 0;
      this.displayedParkingCount = 0;
      this.displayedSlotCount = 0;
    },
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateCounter();
        }
      });
    },
    animateCounter() {
      this.animateSingleCounter('displayedUserCount', this.totalUserCount);
      this.animateSingleCounter('displayedParkingCount', this.totalParkingCount);
      this.animateSingleCounter('displayedSlotCount', this.totalSlotCount);
    },
    animateSingleCounter(field, targetValue) {
      const increment = Math.ceil(targetValue / 100);
      const interval = 20;
      const intervalId = setInterval(() => {
        if (this[field] < targetValue) {
          this[field] = Math.min(this[field] + increment, targetValue);
        } else {
          clearInterval(intervalId);
        }
      }, interval);
    },
    formatNumber(value) {
      return value.toLocaleString(); // 숫자에 천 단위 콤마 추가
    },
  },
};
</script>

<style scoped>
/* 기본 설정 */
#general-section {
  background-color: #f2f3f7;
  padding: 10rem;
  font-size: 24px;
  height: 100vh;
}

.cardPage {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: stretch;
  padding: 10rem;
  height: 600px;
}

/* 공통 스타일 */
.numSection {
  display: flex;
  align-items: baseline;
  gap: 0.1rem;
}

.numSection h2 {
  font-family: NanumSquareNeoHeavy;
  font-size: 55px;
  line-height: 1;
  margin: 1rem;
}

.numSection p {
  font-size: 20px;
  margin: 0;
  line-height: 1;
}

.card-footer {
  color: #6C757D;
  font-size: 14px;
}

/* 첫 번째 카드 스타일 */
.infoCardFirst {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 36px 0px;
  width: 350px;
  padding: 2rem;
  overflow: visible;
  box-sizing: border-box;
}

.infoCardFirst>* {
  margin: 0;
}

.infoCardFirst img {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  opacity: 0.9;
}

/* 두 번째 카드 스타일 */
.infoCardSecond {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.infoCardSecond>div {
  position: relative;
  background-color: white;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 36px 0px;
  width: 400px;
  height: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.infoCardSecond>div>.img-second {
  position: absolute;
  bottom: -0.1rem;
  right: 0;
  width: 65%;
  opacity: 0.9;
}

.infoCardSecond>div>.img-third {
  position: absolute;
  top: 0;
  right: 1.5rem;
  width: 35%;
  opacity: 0.8;
}

.infoCardSecond>div>* {
  margin: 0;
}

.infoCardSecond>div p,
.infoCardSecond>div h6,
.infoCardSecond>div .numSection {
  position: relative;
  z-index: 1;
}
</style>
