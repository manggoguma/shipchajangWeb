<template>
  <div class="navbar">
    <div class="navContent">
      <router-link to="/">
        <img src="../assets/icons/shipchajangLogo.svg" class="logo">
      </router-link>
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

</style>