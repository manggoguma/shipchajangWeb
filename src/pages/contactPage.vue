<template>
    <div class="contact-container">

      <div class="contact-content">
        <div class="contact-intro">
          <h2>쉽차장과 함께 비즈니스를 시작해보세요.</h2>
          <p>양식에 맞춰 제출해주시면 빠른 시일 내에 연락드리겠습니다.</p>
        </div>
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div v-if="error" class="form-error">{{ error }}</div>
          <div
            v-for="(field, key) in formData"
            :key="key"
            class="form-group"
          >
            <label :for="key">{{ key }}</label>
            <template v-if="key === '기타사항'">
              <textarea
                :id="key"
                :name="key"
                v-model="field.value"
                :placeholder="field.placeholder"
                rows="3"
                class="additional-info"
              ></textarea>
            </template>
            <template v-else>
              <input
                type="text"
                :id="key"
                :name="key"
                v-model="field.value"
                :placeholder="field.placeholder"
                :required="['이름', '연락처', '주차장주소'].includes(key)"
                @input="handleInputChange(key, field.value)"
              />
            </template>
          </div>
          <button type="submit">제출하기</button>
        </form>
      </div>

    </div>
  </template>
  
  <script>
  
 export default {
    name: "contactPage",
    components: {
    },
    data() {
      return {
        formData: {
          이름: { value: "", placeholder: "(필수) 이름을 입력해주세요" },
          연락처: { value: "", placeholder: "(필수) 숫자만 입력 (예: 01012345678)" },
          주차장주소: { value: "", placeholder: "(필수) 주차장 주소를 입력해주세요" },
          주차허용면: { value: "", placeholder: "(선택) 허용 면 수를 입력해주세요 (예: 20면)" },
          주차허용시간: { value: "", placeholder: "(선택) 허용 시간을 입력해주세요 (예: 09:00 ~ 17:00)" },
          기타사항: { value: "" },
        },
        error: "",
      };
    },
    methods: {
      handleInputChange(key, value) {
        // 연락처 유효성 검사
        if (key === "연락처" && value && !/^\d*$/.test(value)) {
          this.error = "연락처는 숫자만 입력 가능합니다.";
          return;
        }
        this.error = "";
      },
      handleSubmit() {
        // 필수 필드 확인
        const { 이름, 연락처, 주차장주소 } = this.formData;
        if (!이름.value || !연락처.value || !주차장주소.value) {
          this.error = "이름, 연락처, 주차장주소는 필수 입력 사항입니다.";
          return;
        }
  
        // 폼 데이터를 서버로 전송
        const fullFormData = Object.fromEntries(
          Object.entries(this.formData).map(([key, field]) => [key, field.value])
        );
  
        fetch("http://localhost:3000/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fullFormData),
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
  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
  
  .contact-content {
    max-width: 600px;
    width: 100%;
  }
  
  .contact-intro {
    text-align: center;
    margin-bottom: 2rem;
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
  