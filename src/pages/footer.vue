<template>

  <div class="footer-wrapper">
    <div class="footerPage">
      <div class="symbol-section">
        <img :src="require('@/assets/icons/Group 143726318.svg')" class="symbol-image">
        <p>추천받고, 예약하고, 주차하고</p>

      </div>

      <div class="about-section">

        <div class="company-section">
          <h3>About</h3>

          <div class="company-sub">
            <h6>상호명 : 주식회사 쉽차장</h6>
            <h6>주소 : 광주광역시 동구 동계천로 150, IPLEX 103호</h6>
            <h6>대표 : 김형우 | 사업자 등록 번호: 414-87-03129 </h6>
            <h6>통신판매업번호 : 2024-광주동구-0492</h6>
            <h6>전화번호 : 010-7515-5087</h6>
            <h6>이메일 : contact@shipchajang.com</h6>
          </div>

        </div>

        <div class="company-section">
          <h3>SNS</h3>

          <div class="company-sub">
            <a href="https://www.instagram.com/novalink.official/" target="_blank">
              <i class="fa-brands fa-instagram fa-2xl" style="color: white;"></i>
            </a>
          </div>

        </div>

        <div class="company-section">
          <h3>Legal</h3>

          <div class="company-sub">
            <router-link to="/terms">이용 약관</router-link>
            <router-link to="/privacy">개인정보처리방침</router-link>
            <router-link to="/rule">위치정보 이용약관</router-link>
            <h6 style="margin-top: 2rem;">Copyright ⓒ 2024 Shipchajang Co, Ltd. All Rights Reserved</h6>
          </div>

        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerPage'
}
</script>

<style>
.footer-wrapper {
  background-color: #5B67EC;
  color: white;
}

.footerPage {
  padding-top: 5rem;
  padding-left: 10rem;
  padding-right: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15rem;
}

.footerPage p {
  font-size: 30px;
  font-weight: 900;
  font-family: 'NanumSquareNeoHeavy';
}

.symbol-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.about-section {
  flex: 2;
  justify-content: end;
}

.symbol-image {
  display: block;
  max-width: 100%;
  height: auto;
  width: 250px;

}

.company-section h6 {
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  /* 모든 방향의 마진 제거 */
  padding: 0;
  /* 모든 방향의 패딩 제거 */
  margin-bottom: 1rem;
}

.company-section h6:last-child {
  margin-bottom: 0;
  /* 마지막 링크는 간격 제거 */
}

.company-section i {
  justify-content: center;

}

.company-section {
  display: flex;
  flex-direction: row;
  gap: 5rem;
  align-items: flex-start;
  text-align: start;
  margin-bottom: 1rem;
}

.company-section:last-child {
  margin-bottom: 0;
  /* 마지막 링크는 간격 제거 */
}

.company-section h3 {
  margin-right: 5rem;
  min-width: 100px;
  /* 고정 너비로 정렬 안정화 */
  margin-top: 0.5rem;
}

.company-sub {
  flex: 1;
  padding: 10px;


}

a {
  text-decoration: none;
  font-weight: 900;

}

a:visited {
  color: white;
}

.company-sub a {
  text-decoration: none;
  margin-right: 5rem;
  /* 오른쪽 간격 */
}

.company-sub a:last-child {
  margin-right: 0;
  /* 마지막 링크는 간격 제거 */
}
</style>