<template>
    <!-- 일반 콘텐츠 -->
    <div id="general-section" style="border:2px solid red">
      <div class="cardPage">
        <div class="infoCardFirst">
          <p>누적 사용자 수</p>
          <div class="numSection">
            <h2>{{ displayedUserCount }}</h2>
            <p>명</p>
          </div>
        </div>
  
        <div class="infoCardSecond">
          <div>
            <p>등록된 주차장</p>
            <div class="numSection">
              <h2>{{ displayedParkingCount }}</h2>
              <p>명</p>
            </div>
          </div>
          <div>
            <p>등록된 주차면</p>
            <div class="numSection">
              <h2>{{ displayedSlotCount }}</h2>
              <p>명</p>
            </div>
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
      totalParkingCount: 200,
      totalSlotCount: 800,
      displayedUserCount: 0,
      displayedParkingCount: 0,
      displayedSlotCount: 0,
    };
  },
  mounted() {
    this.resetCounters();
    // IntersectionObserver 사용
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
      entries.forEach(entry => {
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
  },
};
</script>

  
  <style scoped>
  #general-section {
    background-color: #f2f3f7;
    text-align: center;
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
    height: 450px;
  }
  
  .infoCardFirst {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 36px 0px;
    width: 300px;
    padding: 0 1.5rem;
  }
  
  .infoCardFirst > p,
  .infoCardSecond > div > p {
    text-align: start;
    font-weight: 900;
  }
  
  .infoCardSecond {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .infoCardSecond > div {
    background-color: white;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 36px 0px;
    width: 300px;
    height: 50%;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .numSection {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
  }
  </style>
  