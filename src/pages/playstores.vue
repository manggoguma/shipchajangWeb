<template>
  <div class="container">
    <div class="playstoreSection">
      <img
        src="https://www.shipchajang.com/static/media/card_mobile.c9bb3166cd477783c88f.png"
        alt="주차장 이미지"
        style=
      />
      <div class="content-section">
        <div class="text-section">
          <h1>지도에서 벗어나자!</h1>
          <h3>지도를 벗어나 카드로 만나는 가장 쉬운 주차장 찾기</h3>
          <h3>당신이 어디 있든, 쉽게 찾는 주차장</h3>
        </div>
        <div class="link-section">
          <a href="https://www.shipchajang.com/"><img src="https://via.placeholder.com/100" alt="링크1" /></a>
          <a href="#"><img src="https://via.placeholder.com/100" alt="링크2" /></a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'playStores',
};
</script>

<style>
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
  align-items: center;
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
  flex-direction: column;
  margin-left: 20px;
}

.text-section {
  margin-bottom: 20px;
}
.text-section h1 {
  font-size: 50px;
  margin-bottom: 5rem;
}

.link-section {
  display: flex;
  gap: 20px;
  width: 100%; 
  margin-top: 4rem;
  z-index: 10;
 
}
.link-section a {
  flex: 1;
  text-align: center; 
}

.link-section a img {
  width: 100%;
  height: auto;
  transition: all 0.3s ease-in-out; /* 부드러운 전환 */
}

.playstoreSection:hover .link-section a img {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), /* 밝은 네온 */
              0 0 40px rgba(0, 255, 255, 0.6), /* 퍼지는 네온 */
              0 0 60px rgba(0, 255, 255, 0.4); /* 부드러운 네온 */
}

</style>
