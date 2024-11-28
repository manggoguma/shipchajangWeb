<template>
  <div class="navbar">
    <div class="navContent">
      <router-link to="/">
        <img src="../assets/icons/shipchajangLogo.svg" class="logo">
      </router-link>

      <button class="hamburger" @click="toggleMenu">
        <i class="fa-solid fa-bars"></i>
      </button>

      <ul class="navList">
        <router-link to="/contactPage" style="color: #D4D7F5;">문의하기</router-link>
        <a href="https://www.instagram.com/novalink.official/" target="_blank">
          <i class="fa-brands fa-instagram fa-2xl" style="color: #D4D7F5;"></i>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false, // 햄버거 메뉴 열림 상태
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // 메뉴 상태 토글
    },
  },
};
</script>

<style>
.navbar {
  display: flex;
  background-color: white;
  padding: 0.5rem 5rem;
  justify-content: flex-end;
}

.navContent {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
}

.navList {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navList a {
  color: inherit; /* 텍스트 색상 상속 */
  text-decoration: none; /* 밑줄 제거 */
}
/* 햄버거 버튼 */
.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
/* 미디어 쿼리: 태블릿 (1024px 이하) */
@media screen and (max-width: 1024px) {
  .navbar {
    padding: 0.5rem 3rem; /* 패딩 줄임 */
  }

  .logo {
    width: 120px; /* 로고 크기 조정 */
  }

  .navList {
    gap: 1rem; /* 항목 간 간격 축소 */
  }
}

/* 미디어 쿼리: 모바일 (768px 이하) */
@media screen and (max-width: 768px) {
  .navbar {
    padding: 0.5rem 2rem;
  }

  .logo {
    width: 120px; /* 로고 크기 조정 */
  }

  .navList {
    display: none; /* 기본적으로 숨김 */
    flex-direction: column; /* 수직 정렬 */
    position: absolute;
    top: 100%; /* 네비게이션 아래에 위치 */
    right: 0;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    gap: 1rem;
    max-height: 0; /* 숨길 때의 높이 */
    overflow: hidden; /* 초과 콘텐츠 숨김 */
  }

  .navList.active {
    display: flex; /* 햄버거 메뉴 열릴 때 표시 */
    max-height: 300px; /* 적당한 높이 설정 */
  }

  .hamburger {
    display: block; /* 햄버거 버튼 표시 */
  }
}

/* 미디어 쿼리: 소형 모바일 (480px 이하) */
@media screen and (max-width: 480px) {
  .logo {
    width: 100px; /* 로고 크기 줄임 */
  }

  .navList {
    right: 10px;
    left: 10px;
  }

  .navList a {
    font-size: 0.9rem; /* 글자 크기 축소 */
  }

  .hamburger {
    font-size: 1.2rem;
  }
}
</style>