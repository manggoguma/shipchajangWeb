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
          image: require("@/assets/icons/Frame 143726305.svg"),
        },
        {
          title: "맞춤 주차",
          text: "내가 원하는 주차장,  ",
          nextText: "내가 원하는 주차 자리를 선택해요",
          image: require("@/assets/icons/Group 143726866.svg"),

        },
        {
          title: "안심 보장",
          text: "쉽차장 차단기가",
          nextText: "예약 공간을 지켜 주고 있어요",
          image: require("@/assets/icons/Frame 143726305 (1).svg"),
        },
        {
          title: "결제하기",
          text: "내가 주차하고 싶은 만큼 사용하고 ",
          nextText: "종료하기를 눌러 결제해요",
          image: require("@/assets/icons/Frame 143726305 (2).svg"),
        },
        {
          title: "한시적 주차장",
          text: "나라에서 허용한 ",
          nextText: "길가 주차 정보도 쉽차장에서는 쉽게!",
          image: require("@/assets/icons/Frame 143726305 (3).svg"),
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
  top: 10%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 4rem;
  width: 80%;
  height: 80%;
  /* border: 2px solid red; */
  padding: 3rem;
  transition: opacity 1s ease-in-out;
}

.display-image {
  width: 50%;
  /* 부모 요소에 맞춰 적절한 너비 설정 */
  height: 100%;
  /* 부모 요소의 높이를 가득 채움 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 이미지를 가운데 정렬 */
  /* border: 2px solid green; */
  overflow: hidden;
  /* 이미지가 영역을 넘어서지 않도록 설정 */
}

.display-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 이미지 비율을 유지하며 영역을 채움 */
}

.display-text {
  display: flex;
  /* Flexbox 사용 */
  flex-direction: column;
  /* 세로 방향 정렬 */
  justify-content: center;
  align-items: start;
  /* 가로 방향 정렬 (중앙 정렬) */
  text-align: start;
  /* 텍스트 가운데 정렬 */
  opacity: 1;
  transition: opacity 1s ease-in-out;

  flex: 1;
}

.display-text h3 {
  color: white;
  border-color: white;
  background-color: #5B67EC;
  border-radius: 1rem;
  padding: 0.5rem;
  margin-bottom: 3rem;
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
@media screen and (max-width: 1024px) {
  .container {
    padding: 0 5rem;
  }

  .display-area {
    gap: 0;
    width: 100%;
    padding: 2rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .display-image {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .display-image img {
    width: 80vw;
    height: auto;
    object-fit: contain;
    max-height: 60vh;
  }

  .display-text {
    flex: 1;
    text-align: left;
    padding-left: 2rem;
  }

  .display-text h1 {
    font-size: 1.3rem;
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

/* 미디어 쿼리: 모바일 (768px 이하) */
@media screen and (max-width: 768px) {
  .container {
    padding: 0 2rem;
    margin-top: 3rem;
  }

  .display-area {
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    padding: 1.5rem;
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
    padding: 0 1rem;
    margin-top: 2rem;
  }

  .display-area {
    flex-direction: column-reverse;
    gap: 1rem;
    padding: 1rem;
  }

  .display-image img {
    width: 100%;
    height: auto;
  }

  .display-text {
    padding-left: 0.5rem;
    margin-bottom: 1rem;
  }

  .display-text h1 {
    font-size: 1.1rem;
  }

  .display-text h3 {
    font-size: 0.8rem;
    padding: 0.3rem;
    margin-bottom: 1rem;
  }

  .scroll-trigger {
    gap: 80px;
  }

  .trigger-section {
    height: 80vh;
    /* 섹션 높이를 화면 크기에 맞춰 조정 */
  }
}
</style>
