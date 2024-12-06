<template>
    <a class="goTop" v-show="showGoTop" @click="scrollToTop">
        <i class="fa-solid fa-arrow-up"></i>
    </a>
  </template>
  
  <script>
  export default {
    name: "GoTop",
    data() {
      return {
        showGoTop: false, // 초기값은 false로 설정
      };
    },
    methods: {
      handleScroll() {
        // scrollY가 400 이상일 때 버튼 표시
        this.showGoTop = window.scrollY > 400;
      },
      scrollToTop() {
        // 페이지 맨 위로 스크롤
        window.scrollTo({ top: 0, behavior: "smooth" });
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
  
  <style>
  .goTop {
    position: fixed !important;
    bottom: 5rem;
    right: 2rem;
    background: black;
    color: #fff;
    padding: 1rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  .goTop:hover {
  background: #333;

}
  /* 모바일 화면(768px 이하)에서 크기 조정 */
@media (max-width: 768px) {
    .goTop {
        bottom: 3rem;
        right: 1.5rem; 
        padding: 0.8rem; /* 버튼 크기 축소 */
    }
}

/* 작은 모바일 화면(480px 이하)에서 더 작게 조정 */
@media (max-width: 480px) {
    .goTop {
        bottom: 4rem;
        right: 0.8rem;
        
    }
}
  </style>
  