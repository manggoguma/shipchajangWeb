<template>
  <div class="container">
    <div class="display-area">
      <div class="display-image">
        <img :src="currentContent.image" alt="전환 이미지" />
      </div>
      <div>
        <div class="display-text">
          <h3>{{ currentContent.title }}</h3>
          <h1>{{ currentContent.text }}</h1>
          <h4>{{ currentContent.nextText }}</h4>
        </div>
      </div>
    </div>

    <!-- 스크롤을 트리거하는 빈 섹션 -->
    <div class="scroll-trigger">
      <section v-for="(content, index) in contents" :key="index" class="trigger-section"></section>
    </div>
  </div>
</template>


<script>
export default {
  name: "ScrollTransition",
  data() {
    return {
      contents: [
        {
          title: "추천 주차장",
          text: "추천 주차장으로 시간단축",
          nextText: "지도에서 찾을 필요 없이 추천 주차장으로 바로 찾아보세요",
          image: require("@/assets/icons/feature1.svg"),
        },
        {
          title: "맞춤 주차",
          text: "내가 원하는 자리, 자유롭게 선택",
          nextText: "내 조건에 맞는 공간을 직접 선택해 보세요",
          image: require("@/assets/icons/feature2.svg"),

        },
        {
          title: "안심 보장",
          text: "믿을 수 있는 예약 주차 서비스",
          nextText: "쉽차장 차단기가 예약 공간을 지켜드려요",
          image: require("@/assets/icons/feature3.svg"),
        },
        {
          title: "결제하기",
          text: "사용한 만큼만 편하게 결제",
          nextText: "주차 종료시 버튼만 누르면 간단히 정산됩니다",
          image: require("@/assets/icons/feature4.svg"),
        },
        {
          title: "한시적 주차장",
          text: "길가 주차도 쉽고 편리하게",
          nextText: "나라에서 허용한 한시적 길가 주차 정보도 쉽차장에서 간편하게 확인해보세요",
          image: require("@/assets/icons/feature5.svg"),
        },
      ], 
      currentContent: {}, // 현재 보여질 콘텐츠
      currentIndex: 0, // 현재 콘텐츠 인덱스
    };
  },
  mounted() {
    this.currentContent = this.contents[0]; // 초기 콘텐츠 설정
    this.setupScrollObserver();
  },
  methods: {
    setupScrollObserver() {
      const sections = document.querySelectorAll(".trigger-section");
      const options = {
        root: null,
        threshold: 0.1,
      };

      const observer = new IntersectionObserver(this.handleIntersect, options);
      sections.forEach((section) => observer.observe(section));
    },
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(document.querySelectorAll(".trigger-section")).indexOf(
            entry.target
          );

          if (index !== this.currentIndex) {
            this.currentIndex = index;
            this.updateContent();
          }
        }
      });
    },

    updateContent() {
      const textElement = document.querySelector('.display-text');

      // 현재 텍스트를 화면 밖으로 내보냄
      textElement.classList.remove('fade-in');
      textElement.classList.add('fade-out');

      setTimeout(() => {
        // 콘텐츠 업데이트
        this.currentContent = this.contents[this.currentIndex];

        // 새로운 텍스트를 화면 안으로 불러옴
        textElement.classList.remove('fade-out');
        textElement.classList.add('fade-in');
      }, 400); // 애니메이션 지속 시간에 맞게 딜레이 설정
    }
    ,
  }
  ,

};
</script>

<style>
.container {
  padding: 0 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;

}

.display-area {
  position: sticky;
  top: 20%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  gap: 7rem;
  width: 100%;
  padding: 3rem;
  transition: opacity 1s ease-in-out;
  margin-bottom: 5rem;
}

.display-image {

  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: translateY(20px);
  /* 초기 위치 */
  opacity: 1;
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

}

.display-image.fade-out {
  opacity: 0;
  transform: translateY(0);
}

.display-image.fade-in {
  opacity: 1;
  transform: translateY(-20px);
}

.display-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

.display-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: start;
  opacity: 1;
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  flex: 1;
  margin-top: 16rem;
  transform: translateY(0);
  width: 30vw;

}

.display-text.fade-out {
  opacity: 0;
  transform: translateY(100%);
  /* 화면 아래로 완전히 사라짐 */
}

.display-text.fade-in {
  opacity: 1;
  transform: translateY(0);
  /* 화면 안으로 돌아옴 */
}


.display-text h3 {
  color: white;
  border-color: white;
  background-color: #5B67EC;
  border-radius: 1.5rem;
  padding: 1rem;
  margin-top: 0rem;
}

.display-text h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: NanumSquareNeoHeavy;
  color: #2D2B3E;
}

.display-text h4 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #6C757D;
}

.scroll-trigger {
  display: flex;
  flex-direction: column;
  gap: 7rem;
}

.trigger-section {
  height: 100vh;
}

/* 미디어 쿼리: 태블릿 (1024px 이하) */
@media screen and (min-width: 821px) and (max-width: 1024px) {
  .container {
    padding: 0 6rem;

  }

  .display-area {
    gap: 4rem;
    width: 100%;
    padding: 2rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    top: 20%;


  }

  .display-image {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;


  }

  .display-image img {
    height: auto;
    object-fit: contain;
    max-height: 52vh;
  }

  .display-text {
    width: 50vw;

  }

  .display-text h1 {
    font-size: 1.7rem;
    line-height: 1.5;
  }

  .display-text h3 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .scroll-trigger {
    gap: 80px;
  }
}

/* 아이패드 에어 (820px 이하) */
@media screen and (max-width: 820px) {
  .container {
    padding: 0 4rem;
    margin-top: 3rem;
  }

  .display-area {
    display: flex;
    flex-direction: column-reverse;
    gap: 0.5rem;
    width: 100%;
    padding: 1rem;
    top: 15%;
  }

  .display-image {
    width: 100%;
    height: auto;
  }

  .display-image img {
    width: 65%;
    height: auto;
    object-fit: contain;
  }

  .display-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    margin: 0;
  }

  .display-text h1 {
    font-size: 2.5rem;
    line-height: 1.5rem;
    text-align: center;
  }

  .display-text h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .display-text h4 {
    font-size: 1.5rem;
    width: 85%;


  }

}




/* 미디어 쿼리: 소형 모바일 (480px 이하) */
@media screen and (max-width: 480px) {
  .container {
    padding: 0 2rem;
  }

  .display-area {

    flex-direction: column-reverse;
    gap: 0rem;
    padding: 1rem;
    top: 7.5%;
    /* border: #5B67EC 5px solid; */

  }

  .display-image img {
    width: 88%;
    height: auto;

  }

  .display-image {
    /* border: #2D2B3E 2px solid; */
  }

  .display-text {
    margin-top: 1rem;
    width: 100%;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 8rem;

  }

  .display-text h1 {
    font-size: 1.3rem;
    line-height: 1;
    margin-bottom: 0;
  }

  .display-text h4 {
    font-size: 0.9rem;
    line-height: 1.3;
    margin-bottom: 0;
    text-align: center;
    width: 100%;
  }

  .display-text h3 {
    font-size: 0.9rem;
    padding: 0.6rem;
    margin-bottom: 1rem;

  }

  .scroll-trigger {
    gap: 5rem;
  }

  .trigger-section {
    height: 80vh;
  }

  .display-text.fade-out {
    opacity: 0;
    transform: translateY(30%);
  }

  .display-text.fade-in {
    opacity: 1;
    transform: translateY(0);
    /* 화면 안으로 돌아옴 */
  }

}

@media screen and(min-width: 361px) and (max-width: 376px) {
  .container {
    padding: 0 4rem;
  }

  .display-area {
    gap: 1.5rem;
    padding: 1rem;

  }

  .display-text {
    margin-top: 1rem;
  }

  .display-text h1 {
    font-size: 0.9rem;
    line-height: 1;
  }

  .display-text h3 {
    font-size: 0.7rem;
    padding: 0.5rem;


  }
}

@media screen and (max-width: 320px) {
  .container {
    padding: 0 1rem;
  }

  .display-area {
    gap: 0rem;
    padding: 1rem;
  }

  .display-text {
    margin-top: 1rem;
  }

  .display-text h1 {
    font-size: 1.2rem;
    line-height: 1;
  }

  .display-text h3 {
    font-size: 0.7rem;
    padding: 0.5rem;
  }

  .display-text h4 {
    font-size: 0.8rem;
  }
}


/* 아이패드 미니 (1024px) */
@media screen and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
  .container {
    padding: 7rem;

  }

  .display-image img {
    width: 100%;
    padding: 0;
    margin: 0;
    max-height: 98vh;
  }

  .display-image {
    width: 45vw;
  }

  .display-area {
    display: flex;
    justify-content: center;
    /* 수평 중앙 정렬 */
    align-items: center;
    /* 수직 중앙 정렬 */
    height: 100vh;
    /* 부모 요소 높이에 맞춤 */
    top: 0;
    gap: 0rem;


  }

  .display-text {
    margin-top: 3rem;
    margin-left: 3rem;
    width: 47vw;

  }

  .display-text h1 {
    font-size: 2rem;
    line-height: 1;
  }

  .display-text h3 {
    font-size: 1.3rem;
    padding: 0.5rem;
  }

  .display-text h4 {
    font-size: 1.3rem;
  }
}

/* 아이패드 에어 (1180px) */
@media screen and (min-width: 1180px) and (max-width: 1180px) and (orientation: landscape) {
  .container {
    padding: 7rem;
    display: flex;
    justify-content: center;
  }

  .display-image img {
    width: 100%;
    padding: 0;
    margin: 0;

  }

  .display-image {
    width: 40%;
  }

  .display-area {
    display: flex;
    justify-content: center;
    padding: 4rem;
    top: 10%;
    gap: 4rem;

  }

  .display-text {
    margin-top: 15rem;
    width: 35vw;
  }

  .display-text h1 {
    font-size: 1.8rem;
    line-height: 1;
  }

  .display-text h3 {
    font-size: 1rem;
    padding: 0.5rem;
  }
}

/* 아이패드 에어 (1180px) */
@media screen and (max-width: 1366px) and (max-height: 1024px) and (orientation: landscape) {
  .container {
    padding: 7rem;
    display: flex;
    justify-content: center;
  }

  .display-image img {
    width: 100%;
    padding: 0;
    margin: 0;

  }

  .display-image {
    width: 40%;
  }

  .display-area {
    display: flex;
    justify-content: center;
    padding: 4rem;
    top: 5%;
    gap: 4rem;

  }

  .display-text {
    margin-top: 16rem;
    width: 40vw;
  }

  .display-text h1 {
    font-size: 2.5rem;
    line-height: 1;
  }

  .display-text h3 {
    font-size: 1.5rem;
    padding: 0.8rem;
  }

  .display-text h4 {
    font-size: 1.5rem;
  }
}
</style>
