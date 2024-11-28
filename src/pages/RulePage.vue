<template>
    <div>
      <div class="terms">
        <h1>쉽차장 제휴 주차장 이용규칙 및 취소/환불규정 동의</h1>
        <select v-model="selectedDate" @change="handleDateChange">
          <option value="2024-00-00">2024년 11월 06일 갱신</option>
        </select>
        <div class="terms-content" v-html="termsByVersion[selectedDate].content"></div>
      </div>
    </div>
  </template>
  
  <script>
 
  
  export default {
    name: 'TermsOfService',
    components: {
     
    },
    data() {
      return {
        selectedDate: '2024-00-00',
        termsByVersion: {
          '2024-00-00': {
            content: `
              <div>
                <h2>이용규칙</h2>
                <ol>
                  <li>고객님이 예약 시 설정하는 시간은 고객님이 생각하는 주차 종료 시간입니다. 
                      실제 주차와는 관계가 없습니다. 또한, 결제는 예약 시 등록한 결제 수단을 통해 주차 이용 시점부터 주차 종료 시점까지의 사용량만큼 결제됩니다.</li>
                  <li>고객님이 예약을 완료한 시점부터 제휴 주차장 예약 자리에 대한 사용이 시작되며 이 시점을 주차 시작 시점으로 봅니다. 
                      단, 쉽차장은 고객님의 주차 편의를 위해 시작 시점에 여유시간 10분을 제공해드립니다.</li>
                  <li>제휴 주차장의 운영시간과 요금정책은 제휴 주차장마다 다를 수 있습니다. 또한, 제공된 정보는 제휴 주차장의 사정에 따라 변경될 수 있습니다.</li>
                  <li>주차요금은 고객님의 주차 시작 시점부터 주차 종료 시점까지의 사용량만큼 결제됩니다. 
                      이때, 주차 종료 시점은 모바일 애플리케이션에서 해당하는 주차 내역의 ‘주차 종료하기’ 버튼을 누른 시점입니다.</li>
                  <li>‘주차 종료하기’ 버튼을 누를 때, 주차면에 설치한 IoT 하드웨어가 세워지므로 반드시 차량을 주차면에서 완전히 출차한 이후 눌러주시기를 바랍니다. 
                      완전히 출차하지 않은 후 버튼을 눌러 세워서 차량이 파손된 경우 쉽차장에서 책임지지 않습니다.</li>
                  <li>제휴 주차장의 관리 상태 및 서비스로 인해 발생된 분쟁은 쉽차장에서 책임지지 않습니다.</li>
                </ol>
                <h2>취소/환불규정</h2>
                <ol>
                  <li>예약된 주차면에 부정주차가 있는 경우, 100% 환불이 가능합니다.</li>
                  <li>제휴 주차장 사용에 대한 취소는 예약 직후 10분 이내에는 고객님이 직접 취소가 가능합니다. 단, 10분이 초과된 시점에는 취소가 불가하며, 주차 종료를 통해 사용을 종료해주셔야 합니다.</li>
                  <li>‘주차하기’를 통해 주차를 시작하거나 예약 후 10분이 초과된 경우에는 취소/환불이 불가능합니다.</li>
                  <li>고객님께서 결제 시 사용한 결제수단으로 환불이 진행되며, 포인트를 사용한 경우, 포인트로 환불되며 나머지 금액은 결제수단으로 환불됩니다.</li>
                </ol>
              </div>
            `,
          },
        },
      };
    },
    methods: {
      handleDateChange() {
        console.log(`Selected date: ${this.selectedDate}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .terms {
    padding: 10rem;
  }
  
  select {
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
  }
  
  .terms-content {
    border: 1px solid #ccc;
    padding: 3rem 4rem;
    background-color: #f9f9f9;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  /* 미디어 쿼리: 태블릿 (1024px 이하) */
@media screen and (max-width: 1024px) {
  .terms {
    padding: 5rem;
  }

  select {
    font-size: 0.9rem;
    padding: 0.4rem;
  }

  .terms-content {
    padding: 2rem 3rem;
    font-size: 0.85rem;
  }
}

/* 미디어 쿼리: 모바일 (768px 이하) */
@media screen and (max-width: 768px) {
  .terms {
    padding: 2rem;
  }

  select {
    font-size: 0.8rem;
    padding: 0.3rem;
  }

  .terms-content {
    padding: 1.5rem 2rem;
    font-size: 0.8rem;
    line-height: 1.4;
  }
}

/* 미디어 쿼리: 소형 모바일 (480px 이하) */
@media screen and (max-width: 480px) {
  .terms {
    padding: 1rem;
  }

  select {
    font-size: 0.75rem;
    padding: 0.2rem;
  }

  .terms-content {
    padding: 1rem 1.5rem;
    font-size: 0.75rem;
    line-height: 1.3;
  }
}

  </style>
  