<template>
  <div class="container">
    <div class="playstoreSection">
      <div class="img-wrapper" style="border:2px solid red">
        <img :src="require('@/assets/icons/Group 143726112.svg')" alt="주차장 이미지" />
      </div>
      <div class="content-section" style="border:2px solid blue">
        <div class="text-section">
          <h1>지금 쉽차장에 문의하세요 </h1>

        </div>
        <router-link to="/contactPage" class="router-link">
          문의하기
        </router-link>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: 'playStores',
};
</script>

<style scoped>
.container {
  padding: 0 20rem;

}

/* 배경 css 작업 */
.playstoreSection {
  color: white;
  background: #0E1433;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  padding: 5rem;
  overflow: hidden;

}

.playstoreSection::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  z-index: 1;
}

.playstoreSection::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 70%);
  animation: rotate 10s infinite linear;
  z-index: 0;
}

.playstoreSection img {
  flex: 1;
  max-width: 100%;
  /* 부모 요소를 초과하지 않도록 설정 */
  height: auto;
  /* 이미지 비율 유지 */
  object-fit: cover;
  /* 이미지가 영역을 꽉 채움 */
}

.img-wrapper {
  flex: 1;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.content-section {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  position: relative;
  /* 클릭을 방해하는 요소와 겹침 방지 */
}


.text-section {
  margin-bottom: 20px;
}

.text-section h1 {
  font-size: 50px;
  margin-bottom: 5rem;
}

.router-link {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  z-index: 2;
  /* 부모 요소보다 위에 배치 */
}

.router-link:hover {
  background-color: #0056b3;
  /* 호버 시 색상 변경 */
}
</style>
