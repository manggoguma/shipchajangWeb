<template>
  <div class="container">
    <div class="display-area">
      <div class="display-image">
        <img :src="currentContent.image" alt="전환 이미지" />
      </div>
      <div class="display-text">
        <h3>{{ currentContent.title }}</h3>
        <h1>{{ currentContent.text }}</h1>
        <h1>{{ currentContent.nextText }}</h1>
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
          text: "지도에서 찾을 필요 없이, ",
          nextText: "추천 주차장으로 바로 주차장 찾기",
          image: require("@/assets/icons/feature1.svg"),
        },
        {
          title: "맞춤 주차",
          text: "내가 원하는 주차장,  ",
          nextText: "내가 원하는 주차 자리를 선택해요",
          image: require("@/assets/icons/feature2.svg"),

        },
        {
          title: "안심 보장",
          text: "쉽차장 차단기가",
          nextText: "예약 공간을 지켜 주고 있어요",
          image: require("@/assets/icons/feature3.svg"),
        },
        {
          title: "결제하기",
          text: "내가 주차하고 싶은 만큼 사용하고 ",
          nextText: "종료하기를 눌러 결제해요",
          image: require("@/assets/icons/feature4.svg"),
        },
        {
          title: "한시적 주차장",
          text: "나라에서 허용한 ",
          nextText: "길가 주차 정보도 쉽차장에서는 쉽게!",
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
      this.currentContent = this.contents[this.currentIndex];
    },
  },
};
</script>

<style>
.container {
  padding: 0 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
}

.display-area {
  position: sticky;
  top: 15%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 7rem;
  width: 80%;
  height: 80%;
  padding: 3rem;
  transition: opacity 1s ease-in-out;
  margin-bottom: 5rem;
}

.display-image {
  width: 42%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

}

.display-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 이미지 비율을 유지하며 영역을 채움 */
}

.display-text {
  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: start;
  text-align: start;

  opacity: 1;
  transition: opacity 1s ease-in-out;

  flex: 1;
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
  font-size: 1.7rem;
  margin-bottom: 0.1rem;
  font-family: NanumSquareNeoExtraBold;
}

.scroll-trigger {
  display: flex;
  flex-direction: column;
  gap: 100px;
  /* 섹션 간 간격 */
}

.trigger-section {
  height: 100vh;
  /* 화면 전체 크기의 섹션 */
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
    padding: 0 12rem;
    margin-top: 3rem;
  }

  .display-area {
    display: flex;
    flex-direction: column-reverse;
    gap: 3rem;
    width: 100%;
    padding: 1rem;
  }

  .display-image {
    width: 100%;
    height: auto;
  }

  .display-image img {
    width: 100%;
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
  }

  .display-text h1 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
  }

  .display-text h3 {
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: center;
  }

}


/* 미디어 쿼리: 모바일 (768px 이하) */
@media screen and (max-width: 768px) {
  .container {
    padding: 0 12rem;
    margin-top: 5rem;
  }

  .display-area {
    flex-direction: column-reverse;
    gap: 2.5rem;
    width: 100%;
    padding: 1rem;
  }

  .display-image {
    width: 100%;
    height: auto;
  }

  .display-image img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .display-text h1 {
    font-size: 1.3rem;
  }

  .display-text h3 {
    font-size: 0.9rem;
    padding: 0.4rem;
  }

  .scroll-trigger {
    gap: 60px;
  }
}

/* 미디어 쿼리: 소형 모바일 (480px 이하) */
@media screen and (max-width: 480px) {
  .container {
    padding: 0 3rem;
  }

  .display-area {
    margin-top: 5rem;
    flex-direction: column-reverse;
    gap: 3rem;
    padding: 1rem;
top : 2.5%;

  }

  .display-image img {
    width: 100%;
    height: auto;

  }

  .display-text {
    margin-top: 2rem;
    width: 100%;
    /* 고정 너비 */
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


  }

  .display-text h1 {
    font-size: 1rem;
    line-height: 1;
    margin-bottom: 0;
    /* margin 제거 */
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
    padding: 0 3rem;
  }

  .display-area {
    gap: 1.5rem;
    padding: 1rem;
  }

  .display-text {
    margin-top: 1rem;
  }

  .display-text h1 {
    font-size: 0.8rem;
    line-height: 1;
  }

  .display-text h3 {
    font-size: 0.7rem;
    padding: 0.5rem;


  }
}


/* 아이패드 미니 (1024px) */
@media screen and (min-width: 1024px) and (max-width: 1024px) and (orientation: landscape) {
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
    width: 42%;

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
    gap: 3rem;

  }

  .display-text {
    margin: 0;
  }

  .display-text h1 {
    font-size: 1.5rem;
    line-height: 1;
  }

  .display-text h3 {
    font-size: 1rem;
    padding: 0.5rem;


  }
}

/* 아이패드 에어 (1180px) */
@media screen and (min-width: 1180px) and (max-width: 1180px) and (orientation: landscape) {
  .container {
    padding: 7rem;

    display: flex;
    justify-content: center;
    /* 수평 중앙 정렬 */

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
    /* 수평 중앙 정렬 */

    padding: 5rem;
    top: 8%;
    gap: 4rem;

  }

  .display-text {
 
    margin: 0;
  }

  .display-text h1 {
    font-size: 1.5rem;
    line-height: 1;
  }

  .display-text h3 {
    font-size: 1rem;
    padding: 0.5rem;

  }
}

/* 아이패드 에어 (1180px) */
@media screen and (min-height: 821px) and (max-height: 1024px) and (max-width: 1366px) and (orientation: landscape) {
  .container {
    padding: 7rem;

    display: flex;
    justify-content: center;
    /* 수평 중앙 정렬 */

  }

  .display-image img {

    width: 100%;
    padding: 0;
    margin: 0;

  }

  .display-image {

    width: 42%;


  }

  .display-area {

    display: flex;
    justify-content: center;
    /* 수평 중앙 정렬 */

    padding: 5rem;
    top: 8%;
    gap: 5rem;

  }

  .display-text {
    margin: 0;
  }

  .display-text h1 {
    font-size: 1.7rem;
    line-height: 1;
  }

  .display-text h3 {
    font-size: 1.3rem;
    padding: 0.8rem;

  }
}
</style>
