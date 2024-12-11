<template>
    <div class="footer-wrapper">

        <!-- 하단 푸터 섹션 -->
        <div class="footerPage">
            <!-- 심볼 섹션 -->
            <div class="symbol-section">
                <img src="../assets/icons/finalbluelogo.svg" alt="">

            </div>

            <!-- 정보 섹션 -->
            <div class="about-section">
                <!-- 회사 정보 -->
                <div class="company-section">
                    <h3>About</h3>
                    <div class="company-sub">
                        <h6>상호명 : 주식회사 쉽차장</h6>
                        <h6>주소 : 광주광역시 동구 동계천로 150, IPLEX 103호</h6>
                        <h6>대표 : 김형우 | 사업자 등록 번호: 414-87-03129</h6>
                        <h6>통신판매업번호 : 2024-광주동구-0492</h6>
                        <h6>전화번호 : 010-7515-5087</h6>
                        <h6>이메일 : connect@shipchajang.com</h6>
                    </div>
                </div>

                <!-- SNS 섹션 -->
                <div class="company-section">
                    <h3>SNS</h3>
                    <div class="company-sub">
                        <a href="https://www.instagram.com/novalink.official/" target="_blank" aria-label="Instagram">
                            <i class="fa-brands fa-instagram fa-2xl" style="color: black;"></i>
                        </a>
                    </div>
                </div>

                <!-- 법적 정보 -->
                <div class="company-section">
                    <h3>Legal</h3>
                    <div class="company-sub">
                        <router-link to="/terms">이용 약관</router-link>
                        <router-link to="/privacy">개인정보처리방침</router-link>
                        <router-link to="/locationPage">위치정보 이용약관</router-link>
                        <router-link to="/rule">운영정책</router-link>
                    </div>
                </div>
                <h6 class="copyright">Copyright ⓒ 2024 Shipchajang Co, Ltd. All Rights Reserved</h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'subFooterPage',
};
</script>

<style scoped>
/* 기본 레이아웃 */
.footer-wrapper {
    padding-top: 2rem;
    background-image: url('@/assets/icons/cars.svg');
    background-size: auto;
    background-position: bottom;
    /* 배경 이미지를 가운데 아래로 배치 */
    background-repeat: no-repeat;
    color: black;
}

/* 상단 콘텐츠 섹션 */
.content-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 10rem;
    text-align: center;
    position: relative;
    top: 2rem;
}

.text-section h1 {
    margin: 1rem 0;
    font-size: 2.5rem;
    font-weight: 900;
}

.text-section h1:first-child {
    margin-top: 3rem;
    /* 첫 번째 h1에만 적용 */
}

/* 버튼 스타일 */
.router-link {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5B67EC;
    color: white !important;
    padding: 0.8rem 2rem;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    border-radius: 20rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    margin-top: 3rem;
    margin-bottom: 5rem;
    width: 15rem;
    /* 버튼 크기를 자동으로 조정 */
    height: 2.5rem;
    /* 높이도 콘텐츠에 따라 조정 */
}

.router-link:hover {
    background-color: #434FCF;
    transform: translateY(-2px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
}

.router-link:active {
    background-color: #3C46B8;
    transform: translateY(1px);
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
}


/* 하단 푸터 섹션 */
.footerPage {
    padding: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 15rem;
    /* border-top : 1px solid #e4e5e9; */
}

/* 심볼 섹션 */
.symbol-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
}

.symbol-section {
    width: 80%;
    height: auto;
    max-width: 100%;
}

.footerPage p {
    font-size: 30px;
    font-weight: 900;
    font-family: 'NanumSquareNeoHeavy';
    text-align: center;
}

/* 정보 섹션 */
.about-section {
    flex: 2;
}

.company-section {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    align-items: flex-start;
    margin-bottom: 1rem;
}

.company-section:last-child {
    margin-bottom: 0;
}

.company-section h3 {
    margin-top: 0.5rem;
    margin-right: 5rem;
    min-width: 100px;
    font-size: 18px;
}

.company-sub {
    flex: 1;
    padding: 10px;
}

.company-section h6 {
    font-size: 16px;
    font-weight: 400;
    margin: 0 0 1rem;
}

.company-section h6:last-child {
    margin-bottom: 0;
}

/* SNS 아이콘 */
.company-section i {
    justify-content: center;
}

/* 링크 스타일 */
a,
router-link {
    text-decoration: none;
    font-weight: 900;
    color: inherit;
}

a:visited,
router-link:visited {
    color: inherit;
}

.company-sub a {
    margin-right: 5rem;
}

.company-sub a:last-child {
    margin-right: 0;
}

/* 저작권 정보 */
.copyright {
    margin-top: 2rem;
    font-size: 14px;
    text-align: end;
    font-weight: 100;
}

.cars-image-wrapper {
    display: none;
    /* 기본적으로 숨김 */
}

.cars-image-wrapper img {
    display: none;
    /* 기본적으로 숨김 */
}

/* 미디어쿼리 */
@media screen and (max-width: 1024px) {

    .content-section {
        padding: 2rem 5rem;
    }

    .text-section h1 {
        font-size: 2rem;
    }

    .router-link {
        font-size: 20px;
        width: 12rem;
        height: 2.2rem;
    }

    .footer-wrapper {
        padding-top: 2rem;
        background-image: url('@/assets/icons/cars.svg');
        background-size: auto;
        background-position: bottom;
        /* 배경 이미지를 가운데 아래로 배치 */
        background-repeat: no-repeat;
        color: black;
    }

    .footerPage {
        padding: 2rem 5rem;
        flex-direction: column;
        gap: 2rem;
    }

    .symbol-section {
        display: flex;
        /* Flexbox 활성화 */
        justify-content: flex-start;
        /* 가로 방향 시작 정렬 */
        align-items: flex-start;
        /* 세로 방향 시작 정렬 */
    }

    .symbol-section>img {
        align-self: flex-start;
        justify-self: flex-start;
        text-align: left;
        width: 11rem;
    }

    .symbol-section {
        width: 60%;
    }

    .company-section {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
}

.cars-image-wrapper {
    display: flex;
    /* Flexbox 레이아웃 활성화 */
    justify-content: center;
    /* 가로 정렬 */
}

.cars-image-wrapper img {
    width: 150%;
    /* 이미지 크기 조정 */
    height: auto;
    /* 비율 유지 */
}

@media screen and (max-width: 768px) {
    .content-section {
        padding: 2rem;
    }

    .text-section h1 {
        font-size: 1.8rem;
    }

    .router-link {
        font-size: 18px;
        width: 10rem;
        height: 2rem;
    }

    .footer-wrapper {
        padding-top: 2rem;
        background-image: url('@/assets/icons/cars.svg');
        background-size: auto;
        background-position: bottom;
        /* 배경 이미지를 가운데 아래로 배치 */
        background-repeat: no-repeat;
        color: black;
    }

    .footerPage {
        padding: 1rem 2rem;
        gap: 1.5rem;
    }

    .symbol-section {
        align-items: center;
    }

    .symbol-section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
    }

    .symbol-section>img {

        width: 10rem;

    }

    .company-section {
        gap: 1rem;
    }

    .company-section h3 {
        font-size: 16px;
    }

    .company-section h6 {
        font-size: 14px;
    }
}

@media screen and (max-width: 480px) {
    .footer-wrapper {
        padding: 0.7rem;
        padding-top: 2rem;
        background-image: url('@/assets/icons/cars.svg');
        background-size: auto;
        background-position: bottom;
        /* 배경 이미지를 가운데 아래로 배치 */
        background-repeat: no-repeat;
        color: black;
    }

    .content-section {
        padding: 1rem;
    }

    .text-section h1 {
        font-size: 1.5rem;
    }

    .router-link {
        font-size: 16px;
        width: 8rem;
        height: 1.8rem;
    }

    .footerPage {
        padding: 1rem;
        gap: 1rem;
    }

    .footer-wrapper {
        background-size: 150%;

        background-position: bottom;

        background-repeat: no-repeat;

        background-attachment: scroll;

    }

    .symbol-section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
    }

    .symbol-section>img {
        width: 35%;
        margin-bottom: 2rem;
    }

    .company-section {
        gap: 0.5rem;
    }

    .company-sub a {
        font-size: 0.6rem;
        margin-right: 1rem;
    }

    .company-section h3 {
        font-size: 14px;
        margin-bottom: 0;
    }

    .company-section h6 {
        font-size: 12px;
    }

    .copyright {
        font-size: 0.5rem;
        text-align: center;
    }
}

@media screen and (max-height: 1024px) and (max-width: 1366px) and (orientation: landscape) {
    .footerPage {
        padding: 2rem 5rem;
        gap: 3rem;
    }

    .symbol-section {

        flex: 1;
    }

    .symbol-section>img {
        align-self: flex-start;
        width: 60%;
        height: auto;

    }

    .about-section {
        flex: 3;
    }

    .company-sub a {
        margin-right: 2rem;
    }
}

@media screen and (max-height:820px) and (min-width: 1180px) and (orientation: landscape) {
    .footerPage {

        padding: 2rem 3rem;
        gap: 2rem;

    }

    .symbol-section {

        flex: 1;
    }

    .symbol-section>img {
        width: 80%;
        /* 소형 화면에서 더 작게 */
        height: auto;

    }

    .about-section {
        flex: 3;
    }

    .company-sub a {
        margin-right: 2rem;
    }
}
</style>