<template>
    <div>
      <div class="terms">
        <h1>마케팅 수신 동의 약관</h1>
        <select v-model="selectedDate" @change="handleDateChange">
          <option value="2024-00-00">2024년 11월 06일 갱신</option>
        </select>
        <div class="terms-content">
          <template v-if="termsByVersion[selectedDate]">
            <div v-html="termsByVersion[selectedDate].content"></div>
          </template>
          <template v-else>
            <p>해당 날짜에 대한 약관이 없습니다.</p>
          </template>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: "LocationPage",
    components: {
      TheHeader,
    },
    data() {
      return {
        selectedDate: "2024-00-00",
        termsByVersion: {
          "2024-00-00": {
            content: `
              <div>
                <p>㈜쉽차장은 서비스 안내, 이벤트 행사 관련 정보 안내 목적으로 앱 푸쉬 알림, SMS를 통한 상품 및 이벤트 정보 송신을 위해 이용합니다.</p>
                <ul>
                  <li>수집 이용 항목: 회원 가입 시 수집한 항목, 서비스 이용 시 수집한 항목, 서비스 이용기록</li>
                  <li>수집 이용목적: 마케팅 및 프로모션 활용(광고성/이벤트 정보 제공)</li>
                  <li>보유 및 이용 기간: 회원 탈퇴 또는 동의 철회 시까지(단, 관련 법령 및 개인정보 처리방침에서 정하는 바에 따라 연장될 수 있음)</li>
                </ul>
                <p>위 마케팅 활용 및 광고 수신에 동의하지 않으실 수 있으며, 동의하지 않아도 회원가입 및 서비스 이용이 가능합니다. 
                  그러나 동의를 거부한 경우 상품 및 이벤트 정보를 받을 수 없습니다. 그 밖의 사항은 개인정보 처리방침에 따릅니다.</p>
              </div>
            `,
          },
        },
      };
    },
    methods: {
      handleDateChange() {
        // 필요 시 추가 동작을 처리할 수 있음
        console.log(`선택된 날짜: ${this.selectedDate}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .terms {
    padding: 20px;
  }
  
  .terms-content {
    margin-top: 20px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
  }
  
  select {
    margin-top: 10px;
    padding: 5px;
    font-size: 1rem;
  }
  
  h1 {
    margin-bottom: 10px;
  }
  </style>
  