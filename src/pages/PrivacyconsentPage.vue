<template>
    <div>
      <div class="terms">
        <h1>개인정보 위탁 처리 동의</h1>
        <select v-model="selectedDate">
          <option value="2024-00-00">2024년 11월 06일 갱신</option>
        </select>
        <div class="terms-content" v-html="termsByVersion[selectedDate].content"></div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "TermsOfService",
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
                <p>㈜쉽차장은 서비스를 구매하고자 할 경우 원활한 거래 이행을 위하여 아래와 같이 개인정보를 위탁하고 있습니다.</p>
                <ol>
                  <li>[필수] 수탁업체: ㈜나이스페이먼츠<br>위탁업무 내용: 전자결제 대행</li>
                  <li>[필수] 수탁업체: ㈜드림시큐리티<br>위탁업무 내용: 본인인증</li>
                </ol>
              </div>
            `,
          },
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .terms {
    margin: 20px;
    padding: 20px;
  }
  
  .terms-content {
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.6;
  }
  </style>
  