<template>
  <div class="navbar">
    <div class="navContent">
      <!-- 로고 -->
      <router-link to="/">
        <img src="../assets/icons/shipchajangLogo.svg" class="logo" />
      </router-link>

      <!-- 데스크톱 메뉴 -->
      <ul class="navList desktop-nav">
        <li>
          <router-link to="/contactPage" class="menu-item">문의하기</router-link>
        </li>
        <li>
          <a href="https://www.instagram.com/novalink.official/" target="_blank" class="menu-item">
            <i class="fa-brands fa-instagram fa-2xl"></i>
          </a>
        </li>
      </ul>

      <!-- 햄버거 버튼 -->
      <button class="hamburger" @click="toggleMenu">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>

    <!-- 모바일 메뉴 -->
    <ul class="navList mobile-nav" :class="{ active: isMenuOpen }">
      <li>
        <router-link to="/contactPage" class="menu-item" @click="closeMenu">문의하기</router-link>
      </li>
    </ul>
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
    closeMenu() {
      this.isMenuOpen = false; // 메뉴 닫기
    },
  },
};
</script>

<style scoped>
/* 네비게이션 바 */
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 0.5rem 0;
  height: 8vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
  z-index: 9999; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.navContent {
  display: flex;
  width: 90%;
  max-width: 110rem; /* 최대 너비 제한 */
  align-items: center;
  justify-content: space-between;
}

.navList {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navList a {
  color: inherit;
  /* 텍스트 색상 상속 */
  text-decoration: none;
  /* 밑줄 제거 */
}

/* 로고 */
.logo {
  width: 9rem;
  height: auto;
  object-fit: contain;
  transition: transform 0.2s ease-in-out;
}

.logo:hover {
  transform: scale(1.1);
}

/* 데스크톱 네비게이션 */
.navList.desktop-nav {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navList.desktop-nav .menu-item {
  color: inherit;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
}

.navList.desktop-nav .menu-item:hover {
  color: #5B67EC;
}

/* 모바일 네비게이션 */
.navList.mobile-nav {
  display: none;
  /* 기본적으로 숨김 */
  list-style: none;
  margin: 0;
  padding: 0.5rem;
  flex-direction: column;
  position: absolute;
  top: 100%;
  /* 네비게이션 바로 아래 */
  right: 0;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1001;
}

.navList.mobile-nav.active {
  display: flex;
  /* 햄버거 메뉴 열릴 때 표시 */
}

.navList.mobile-nav .menu-item {
  padding: 1rem 2rem;
  text-align: center;
  color: #333;
  text-decoration: none;
}

.navList.mobile-nav .menu-item:hover {
  color: #5B67EC;
  transition: color 0.2s ease;
}

/* 햄버거 버튼 */
.hamburger {
  display: none;
  /* 기본적으로 숨김 */
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1002;
  transition: transform 0.2s ease;
}

.hamburger:hover {
  transform: rotate(90deg);
  /* 클릭 시 버튼 회전 효과 */
}

/* 미디어 쿼리: 태블릿 */
@media screen and (max-width: 1024px) {
  .navbar {
    padding: 1.5rem 5rem;
    height: 8vh;
  }

  .logo {
    width: 7rem;
  }

  .navList.desktop-nav {
    display: none;
  }

  .hamburger {
    display: block;
    /* 햄버거 버튼 표시 */
    font-size: 2.5rem;
  }

}

/* 미디어 쿼리: 모바일 */
@media screen and (max-width: 768px) {
  .navbar {

    padding: 1.5rem 5rem;

    height: 6vh;
  }

  .logo {
    width: 9rem;
  }

  .hamburger {
    display: block;
    /* 햄버거 버튼 표시 */
  }

  .navList.desktop-nav {
    display: none;
    /* 데스크톱 네비게이션 숨김 */
  }

  .mobile-nav .menu-item {
    font-size: 14px;
    padding: 0.8rem 1.5rem;
  }

  .hamburger {
    font-size: 1.2rem;
  }
}

/* 소형 모바일 */
@media screen and (max-width: 480px) {
  .logo {
    width: 4rem;
  }

  .mobile-nav .menu-item {
    font-size: 13px;
    padding: 0.8rem 0.5rem;

  }

  .hamburger {
    font-size: 1rem;
  }

  .navbar {
    height: 5vh;
    padding: 0.5rem;
  }

}
/* 
@media screen and (max-width: 1024px) and (max-height: 768px) {
  .navContent {

    padding: 1rem;
  }

  .navbar {
    padding: 2.5rem 3rem;
    height: 5vh;

  }

  .logo {
    width: 8rem;
  }

  .hamburger {

    font-size: 2rem;
  }
} */
</style>
