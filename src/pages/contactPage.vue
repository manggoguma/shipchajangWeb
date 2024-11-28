<template>
  <div class="contact-container">
    <div class="contact-content">
      <div class="contact-intro">
        <h1>내 건물 주차 관리, 이제 쉽차장에 맡기고 수익으로 바꿔보세요!</h1>
      </div>

      <form @submit.prevent="handleSubmit" class="contact-form">
        
        <div
          v-for="(placeholder, key) in placeholders"
          :key="key"
          class="form-group"
        >
          <label :for="key">{{ key }}</label>
          <template v-if="key === '기타사항'">
            <textarea
              :id="key"
              :name="key"
              v-model="formData[key]"
              :placeholder="placeholder"
              rows="3"
              class="additional-info"
            ></textarea>
          </template>
          <template v-else>
            <input
              type="text"
              :id="key"
              :name="key"
              v-model="formData[key]"
              :placeholder="placeholder"
              :required="Object.keys(formData).some(
                (requiredKey) =>
                  requiredKey.includes('(필수)') && requiredKey === key
              )"
              @input="handleInputChange(key)"
            />
          </template>
        </div>
        <div v-if="error" class="form-error">{{ error }}</div>
        <button type="submit">제출하기</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactPage",
  data() {
    return {
      formData: {
        "이름(필수)": "",
        "연락처(필수)": "",
        "이메일(필수)": "",
        "주차장주소(필수)": "",
        "문의내용": "",
      },
      placeholders: {
        "이름(필수)": "홍길동",
        "연락처(필수)": "01012341234",
        "이메일(필수)": "shipchajang@naver.com",
        "주차장주소(필수)": "광주광역시 동구 동계천로 150, IPLEX 103호",
        "문의내용": "주차 가능 대수, 공유 시간등을 적어주시면, 상담이 더 빨라져요!",
      },
      error: "",
    };
  },
  methods: {
    handleInputChange(key) {
      const value = this.formData[key];
      if (key === "연락처(필수)" && value && !/^\d*$/.test(value)) {
        this.error = "연락처는 숫자만 입력 가능합니다.";
      } else {
        this.error = "";
      }
    },
    handleSubmit() {
      const requiredFields = Object.keys(this.formData).filter((key) =>
        key.includes("(필수)")
      );

      for (const field of requiredFields) {
        if (!this.formData[field]) {
          this.error = `${field}은(는) 필수 입력 사항입니다.`;
          return;
        }
      }

      fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
          } else {
            this.error = data.message;
          }
        })
        .catch((error) => {
          this.error = "서버와의 통신 중 오류가 발생했습니다. 다시 시도해주세요.";
          console.error("Error:", error);
        });

      this.error = "";
    },
  },
};
</script>
<style scoped>
/* 스타일 추가 */
textarea,
input {
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1.5px solid black;
  background-color: transparent;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

textarea.additional-info {
  resize: none;
}
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}
.contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 20rem;
  }
  
  .contact-content {
    width: 100%;
  }
  
  .contact-intro {
    text-align: center;
    margin-bottom: 2rem;
    border-bottom: 4px solid black;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  .form-error {
    color: red;
    margin-bottom: 1rem;
  }
  
  button {
    background-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
</style>
