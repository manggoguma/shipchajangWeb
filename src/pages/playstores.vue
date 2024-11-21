<template>
  <div class="container">
    <div class="playstoreSection">
      <div class="img-wrapper" style="border:2px solid red">
        <img :src="require('@/assets/icons/Group 143726112.svg')" alt="주차장 이미지" />
      </div>
      <div class="content-section" style="border:2px solid blue">
        <div class="text-section">
          <h1>지도에서 벗어나자!</h1>
          <h3>지도를 벗어나 카드로 만나는 가장 쉬운 주차장 찾기</h3>
          <h3>당신이 어디 있든, 쉽게 찾는 주차장</h3>
        </div>
        <div class="link-section">
          <a href="https://www.shipchajang.com/"> <img :src="require('@/assets/icons/Frame 2800 (1).svg')"
              style="border-radius : 12px"></a>
          <a href="#"> <img :src="require('@/assets/icons/Frame 2799.svg')" style="border-radius : 12px" /></a>
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
  border: 5px solid black;
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
.img-wrapper{
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
  /* 내용 수직 중앙 정렬 */
  align-items: center;
  /* 내용 가로 중앙 정렬 */
  margin-left: 0;
  /* 간격 제거 */
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
  transition: all 0.5s ease-in-out;
  /* 부드러운 전환 */
}

.playstoreSection:hover .link-section a img {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.8),
    /* 밝은 네온 */
    0 0 40px rgba(0, 255, 255, 0.6),
    /* 퍼지는 네온 */
    0 0 60px rgba(0, 255, 255, 0.4);
  /* 부드러운 네온 */
}
</style>
