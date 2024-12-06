<template>
    <a class="GoBottom" v-show="showGoBottom" @click="scrollToBottom">
      <i class="fa-solid fa-arrow-down"></i>
    </a>
  </template>
  
  
  <script>
  export default {
    name: "GoBottom",
    data() {
      return {
        showGoBottom: false, // 초기값은 false로 설정
      };
    },
    methods: {
      handleScroll() {
        const scrollPosition = window.innerHeight + window.scrollY; // 현재 화면 하단 위치
        const scrollHeight = document.body.scrollHeight; // 전체 문서 높이
        this.showGoBottom = scrollPosition < scrollHeight - 200; // 문서 끝에서 200px 이상 남았을 때 버튼 표시
      },
      scrollToBottom() {
        // 페이지 맨 아래로 스크롤
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      // scroll 이벤트 리스너 제거
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>
  
  
  <style scoped>
.GoBottom {
  position: fixed;
  bottom: 1.5rem;
  right: 2rem;
  background: black;
  color: #fff;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s, transform 0.3s;
  z-index: 1000;
}

.GoBottom:hover {
  background: #333;

}
  /* 애니메이션 */
  .GoBottom.fade-out {
    opacity: 0;
    transform: translateY(50px);
  }
    /* 모바일 화면(768px 이하)에서 크기 조정 */
@media (max-width: 768px) {
    .GoBottom {
        bottom: 3rem;
        right: 1.5rem; 
        padding: 0.8rem; /* 버튼 크기 축소 */
    }
}
  /* 작은 모바일 화면(480px 이하)에서 더 작게 조정 */
@media (max-width: 480px) {
    .GoBottom {
        bottom: 1rem;
        right: 0.8rem;
        
    }
}
  </style>
  
  