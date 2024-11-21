<template>
  <div class="container">
    <div class="display-area">
     <div class="display-image" style="border:2px solid green">
      <img :src="currentContent.image" alt="전환 이미지"  />
      </div>
      <div class="display-text">
        <h1>{{ currentContent.title }}</h1>
        <h3>{{ currentContent.text }}</h3>
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
          title: "",
          text: "지도에서 찾을 필요 없이 추천 주차장으로 바로 주차장 찾기",
        image: require("@/assets/icons/Frame 143726304.svg"),
        },
        {
          title: "",
          text: "내가 원하는 주차장에 내가 원하는 주차 자리까지 선택하고 ",
          image: require("@/assets/icons/Frame 143726305.svg"),
          
        },
        {
          title: "",
          text: "쉽차장 차단기가 예약 공간을 지켜 주고 있어요",
          image: require("@/assets/icons/Frame 143726305 (1).svg"),
        },
                {
          title: "",
          text: "내가 주차하고 싶은 만큼 사용하고 종료하기 눌러 결제하기",
          image: require("@/assets/icons/Frame 143726305 (2).svg"),
        },
                {
          title: "",
          text: "나라에서 허용한 길가 주차 정보 쉽차장에서 찾아보기",
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
        root: null, // 뷰포트를 기준으로
        threshold: 0.1, // 섹션의 %가 화면에 보이면 트리거
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
  border: 5px solid white;
  
}

.display-area {
  position: sticky;
  top: 10%; 
  display: flex; 
  flex-direction: row; 
  align-items: stretch; 
  gap: 2rem; 
  width: 80%;
  height: 80%;
  border: 2px solid red; 
  padding: 5rem;
  transition: opacity 1s ease-in-out;
}

.display-image {
  width: 50%; /* 부모 요소에 맞춰 적절한 너비 설정 */
  height: 100%; /* 부모 요소의 높이를 가득 채움 */
  display: flex;
  justify-content: center;
  align-items: center; /* 이미지를 가운데 정렬 */
  border: 2px solid green;
  overflow: hidden; /* 이미지가 영역을 넘어서지 않도록 설정 */
}
.display-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 영역을 채움 */
}
.display-text {
  display: flex; /* Flexbox 사용 */
  flex-direction: column; /* 세로 방향 정렬 */
  justify-content: center; /* 자식 요소를 부모 디브 맨 아래로 정렬 */
  align-items: center; /* 가로 방향 정렬 (중앙 정렬) */
  opacity: 1;
  transition: opacity 1s ease-in-out;
  flex: 1;
  border: 2px solid blue;
  text-align: center; /* 텍스트 가운데 정렬 */
}

.scroll-trigger {
  display: flex;
  flex-direction: column;
  gap: 100px; /* 섹션 간 간격 */
}

.trigger-section {
  height: 100vh; /* 화면 전체 크기의 섹션 */
}




</style>
