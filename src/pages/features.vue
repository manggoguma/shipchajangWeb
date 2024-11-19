<template>
  <div class="container">
    <div class="display-area">
     <div class="display-image" style="border:2px solid green">
      <img :src="currentContent.image" alt="전환 이미지"  />
      </div>
      <div class="display-text">
        <h1>{{ currentContent.title }}</h1>
        <p>{{ currentContent.text }}</p>
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
          title: "첫 번째 제목",
          text: "첫 번째 텍스트입니다.",
        image: require("@/assets/icons/Frame 143726304.svg"),
        },
        {
          title: "두 번째 제목",
          text: "두 번째 텍스트입니다.",
          image: "https://via.placeholder.com/300/00FF00/FFFFFF?text=Image+2",
        },
        {
          title: "세 번째 제목",
          text: "세 번째 텍스트입니다.",
          image: "https://via.placeholder.com/300/0000FF/FFFFFF?text=Image+3",
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




<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.display-area {
  position: sticky;
  top: 10%; 
  display: flex; 
  flex-direction: row; 
  align-items: stretch; 
  gap: 2rem; 
  width: 100%;
  height: 100%;
  border: 2px solid red; 
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
  opacity: 1;
  transition: opacity 1s ease-in-out;
  flex: 1;
  border: 2px solid blue;
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
