<template>
    <div>
      <div class="terms">
        <h1>위치정보 이용약관</h1>
        <select v-model="selectedDate">
          <option value="2024-00-00">2024년 11월 06일 갱신</option>
        </select>
        <div class="terms-content" v-html="termsByVersion[selectedDate].content"></div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name:'locationPage',
    components: {
    },
    data() {
      return {
        selectedDate: "2024-00-00",
        termsByVersion: {
          "2024-00-00": {
            content: `
              <div>
                <h2>제 1조 (목적)</h2>
                <p>본 약관은 주식회사 쉽차장(이하 "회사")이 제공하는 위치기반 서비스(이하, 위치정보 서비스)에 대해 회사와 서비스를 이용하는 이용자간의 권리, 의무 및 책임사항, 기타 필요한 사항 규정을 목적으로 합니다.</p>
                <h2>제 2조 (이용약관의 효칙 및 변경)</h2>
                <ol>
                  <li>본 약관은 이용자가 본 약관에 동의하고 회사가 정한 절차에 따라 위치정보 서비스의 이용자로 등록됨으로써 효력이 발생합니다.</li>
                  <li>이용자가 본 약관의 "동의하기" 버튼을 클릭하였을 경우 본 약관의 내용을 모두 읽고 이를 충분히 이해하였으며, 그 적용에 동의한 것으로 봅니다.</li>
                  <li>회사는 위치정보 서비스의 변경사항을 반영하기 위한 목적 등으로 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 수정할 수 있습니다.</li>
                  <li>약관이 변경되는 경우 회사는 변경사항을 그 적용일자 최소 15일 전에 회사의 홈페이지 또는 서비스 공지사항 등을 통해 공지합니다.
                      <br/>다만, 개정되는 내용이 이용자 권리의 중대한 변경을 발생시키는 경우 적용일 최소 30일 전에 이메일 발송 또는 등록한 휴대폰번호로 문자메시지를 발송하는 방법 등으로 개별적으로 고지합니다.</li>
                  <li>회사가 전항에 따라 공지 또는 통지를 하면서 공지 또는 통지일로부터 개정약관 시행일 7일 후까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도
                      이용자의 의사표시가 없는 경우에는 변경된 약관을 승인한 것으로 봅니다. 이용자가 개정약관에 동의하지 않을 경우 본 약관에 대한 동의를 철회할 수 있습니다.</li>
                </ol>
                <h2>제 3조 (약관 외 준칙)</h2>
                <p>이 약관에 명시되지 않은 사항에 대해서는 위치 정보의 보호 및 이용 등에 관한 법률, 개인정보보호법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관계법령 및 회사가 정한 지침 등의 규정에 따릅니다.</p>
                <h2>제 4조 (서비스의 내용)</h2>
                <p>회사는 위치정보사업자로부터 위치정보를 전달받아 아래와 같은 위치기반 서비스를 제공합니다.</p>
                <ol>
                  <li>주변 주차장 정보제공: 해당 위치정보를 기반으로 사용자에게 주차장 정보를 제공합니다.</li>
                  <li>기타: 향후 서비스의 품질 향상을 위하여 회사가 판단한 신규 기능에 위치정보를 활용합니다.</li>
                </ol>
                <h2>제 5조 (서비스 이용요금)</h2>
                <p>회사가 제공하는 위치정보 서비스는 무료입니다. 단, 무선 서비스 이용 시 발생하는 데이터 통신료는 별도이며, 이용자가 가입한 각 이동통신사의 정착에 따릅니다.</p>
                <h2>제 6조 (서비스의 변경 · 제한 · 중지)</h2>
                <ol>
                  <li>회사는 정책변경 또는 관련법령 변경 등과 같은 제반 사정을 이유로 위치기반서비스를 유지할 수 없는 경우 위치기반서비스의 전부 또는 일부를 변경·제한·중지할 수 있습니다.</li>
                  <li>회사는 아래 각호의 경우에는 이용자의 서비스 이용을 제한하거나 중지시킬 수 있습니다.
                    <ol class="nested">
                      <li>가. 이용자가 회사 서비스의 운영을 고의 또는 중과실로 방해하는 경우</li>
                      <li>나. 서비스용 설비 점검, 보수 또는 공사로 인하여 부득이한 경우</li>
                      <li>다. 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우</li>
                      <li>라. 국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 서비스 이용에 지장이 있는 때</li>
                      <li>마. 기타 중대한 사유로 인하여 서비스 제공을 지속하는 것이 부적당하다고 인정하는 경우</li>
                    </ol>
                  </li>
                  <li>회사가 1항 및 2항의 규정에 의하여 서비스 이용을 제한하거나 중지한 때에는 그 사유 및 제한기간 등을 회사 홈페이지 등으로 통해 사전 공지하거나 이용자에게 통지합니다.</li>
                </ol>
                <h2>부칙</h2>
                <p>본 약관은 2024년 08월 20일부터 시행됩니다.</p>
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
  