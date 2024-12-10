<template>
  <div class="navbar">
    <div class="navContent">
      <!-- 로고 -->
      <router-link to="/">
        <img src="../assets/icons/shipchajanglogo.svg" class="logo" />
      </router-link>

      <!-- 네비게이션 메뉴 -->
      <ul class="navList desktop-nav">
        <li>
          <router-link to="/contactPage" class="menu-item">문의하기</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
/* 네비게이션 바 */
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
  width: 100vw; 
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
  text-decoration: none;
}

.logo {
  width: 6rem;
  height: auto;
  object-fit: contain;
  transition: transform 0.2s ease-in-out;
}

.logo:hover {
  transform: scale(1.1);
}

.navList.desktop-nav .menu-item {
  background-color: #5B67EC;
  color: white;
  border: none;
  border-radius: 5rem;
  padding: 1.2rem 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 2rem;
  width: 60%;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
}

.navList.desktop-nav .menu-item:hover {
  background-color: #4A56C1; 
  color: #FFF;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
  transform: scale(1.05); 
  transition: all 0.3s ease; 
}

/* 미디어 쿼리 */
@media screen and (max-width: 1024px) {
  .navbar {
    width: 100vw;
    padding: 1.5rem 1rem;
    height: 4vh;
  }

  .logo {
    width: 7rem;
  }
}

@media screen and (max-width: 768px) {
  .navbar {
    width: 100vw;
    padding: 1.5rem 0.5rem;
    height: 6vh;
  }

  .logo {
    width: 6rem;
  }

  .navList.desktop-nav .menu-item {
    font-size: 0.9rem;
    padding: 1rem 2rem;
  }
}

@media screen and (max-width: 480px) {
  .navbar {
    width: 100vw;
    height: 5vh; /* 고정 높이 설정 */
    padding: 0.5rem; /* 패딩 조정 */
    position: fixed; /* 고정 상태 유지 */
    top: 0; /* 화면 상단 고정 */
  }

  .logo {
    width: 3rem;
  }

  .navList.desktop-nav .menu-item {
    font-size: 0.8rem;
    padding: 0.8rem 1.5rem;
  }
}

</style>
