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
  overflow: hidden;
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
  object-fit: contain;
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

/* 태블릿 (1024px 이하) */
@media screen and (max-width: 1024px) {
  #general-section {
    padding: 5rem;
    font-size: 20px;
  }
  .cardPage {
    flex-direction: row; /* 가로 정렬 유지 */
    gap: 20px; /* 카드 간 간격 */
    justify-content: center; /* 부모 안에서 카드 중앙 정렬 */
    align-items: stretch; /* 카드 높이를 동일하게 정렬 */
    padding: 5rem;
    height: auto;
  }

  .infoCardFirst,
  .infoCardSecond > div {
    width: 350px; /* 기본 카드 너비 유지 */
    height: auto; /* 높이를 자동으로 조정 */
    padding: 2rem; /* 기본 패딩 유지 */
    display: flex;
    flex-direction: column; /* 콘텐츠 세로 정렬 */
    justify-content: space-between; /* 콘텐츠 간 간격 유지 */
    align-items: center; /* 콘텐츠 중앙 정렬 */
    box-sizing: border-box;
  }

  .numSection h2 {
    font-size: 55px; /* 기본 폰트 크기 유지 */
    margin: 1rem;
  }

  .numSection p {
    font-size: 20px;
  }

  .infoCardFirst img,
  .infoCardSecond>div>.img-second,
  .infoCardSecond>div>.img-third {
    width: 100%;
    height: auto;
    object-fit: contain; /* 이미지 비율 유지 */
    opacity: 0.85;
  }
}


/* 모바일 (768px 이하) */
@media screen and (max-width: 768px) {
  #general-section {
  display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    min-height: 100vh; /* 화면 높이만큼 설정 */
    padding: 3rem 2rem;
    margin-top:10rem ;
    margin-block: 10rem;
  }

  .cardPage {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center; /* 카드들이 부모 안에서 수직 중앙 정렬 */
    align-items: center; /* 카드들이 부모 안에서 수평 중앙 정렬 */
    width: 100%; /* 부모 너비에 맞춤 */
    padding: 0; /* 불필요한 패딩 제거 */
  }

  .infoCardFirst,
  .infoCardSecond > div {
    width: 20rem; /* 고정 너비 */
    height: 20rem; /* 고정 높이 */
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 콘텐츠를 중앙에 배치 */
    align-items: center; /* 콘텐츠를 중앙에 배치 */
    box-sizing: border-box; /* 패딩 포함 계산 */
  }

  .numSection h2 {
    font-size: 35px;
    margin: 0.3rem;
  }

  .numSection p {
    font-size: 16px;
  }

  .infoCardFirst img,
  .infoCardSecond>div>.img-second,
  .infoCardSecond>div>.img-third {
    width: 100%;
    height: auto;
    object-fit: contain;
    /* 이미지 비율 유지 */
    opacity: 0.85;
  }
}

/* 소형 모바일 (480px 이하) */
@media screen and (max-width: 480px) {
  #general-section {
 display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    min-height: 100vh; /* 화면 높이만큼 설정 */
    padding: 2rem 1rem;
  }

  .cardPage {
 display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center; /* 카드들이 부모 안에서 수직 중앙 정렬 */
    align-items: center; /* 카드들이 부모 안에서 수평 중앙 정렬 */
    width: 100%; /* 부모 너비에 맞춤 */
    padding: 0; /* 불필요한 패딩 제거 */
  }

.infoCardFirst,
  .infoCardSecond > div {
    width: 15rem; /* 고정 너비 */
    height: 15rem; /* 고정 높이 */
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 콘텐츠를 중앙에 배치 */
    align-items: center; /* 콘텐츠를 중앙에 배치 */
    box-sizing: border-box; /* 패딩 포함 계산 */
  }

  .numSection h2 {
    font-size: 30px;
    margin: 0.2rem;
  }

  .numSection p {
    font-size: 14px;
  }

  .infoCardFirst img {
    bottom: -7rem;
    width: 100%;
    object-fit: contain;
    /* 이미지 비율 유지 */
    opacity: 0.8;
  }

  .infoCardSecond>div>.img-second {
    width: 100%;
    height: auto;
    object-fit: contain;
    /* 이미지 비율 유지 */
    opacity: 0.8;
  }

  .infoCardSecond>div>.img-third {
    left: 4rem;
    width: 100%;
    height: 95%;
    object-fit: contain;
    /* 이미지 비율 유지 */
    opacity: 0.8;
  }

  .card-footer {
    font-size: 12px;
  }
}
</style>
