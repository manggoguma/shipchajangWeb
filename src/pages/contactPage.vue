<template>
  <div class="contact-container">
    <div class="contact-content">
      <div class="contact-intro">
        <h1 v-if="isMobileView">내 건물 주차 관리, <br /> 이제 쉽차장에 맡기고 수익으로 바꿔보세요!</h1>
        <h1 v-else>내 건물 주차 관리, 이제 쉽차장에 맡기고 수익으로 바꿔보세요!</h1>
      </div>

      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label>문의 유형(필수):</label>
          <div class="radio-group">
            <div v-for="(label, index) in inquiryTypes" :key="index">
              <label>
                <input type="radio" :value="label" v-model="selectedInquiryType" name="inquiryType" />
                <span>{{ label }}</span>
              </label>
            </div>
          </div>
        </div>

        <!-- 문의사항 입력 필드 -->
        <div v-for="(placeholder, key) in placeholders" :key="key" class="form-group">
          <label :for="key">{{ key }}</label>
          <template v-if="key === '문의내용'">
            <textarea
              :id="key"
              :name="key"
              v-model="formData[key]"
              :placeholder="placeholder"
              rows="5"
              class="additional-info"
            ></textarea>
            <!-- 개인정보 동의 체크박스 -->
            <div class="consent-checkbox">
              <label>
                <input type="checkbox" v-model="consentAgreed" id="consentCheckbox" />
              </label>
              <router-link to="/privacy">
                <span class="consentText">(필수) 개인정보 수집 및 이용에 동의합니다</span>
              </router-link>
            </div>
            <span class="consent-description">*입력하신 정보는 문의 답변 및 서비스 제공을 위해 사용됩니다</span>
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
        <button type="submit" class="submit">제출하기</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactPage",
  data() {
    return {
      isMobileView: window.innerWidth <= 480, // 초기 화면 크기 감지
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
      inquiryTypes: ["신규 제휴 문의", "기존 제휴 업체 문의 ", "기타"],
      selectedInquiryType: "",
      consentAgreed: false,
      error: "",
    };
  },
  mounted() {
    window.addEventListener("resize", this.updateView); // 화면 크기 변경 감지
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateView); // 이벤트 리스너 제거
  },
  methods: {
    updateView() {
      this.isMobileView = window.innerWidth <= 480; // 모바일 뷰 여부 업데이트
    },
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

      if (!this.selectedInquiryType) {
        this.error = "문의 유형을 선택해야 합니다.";
        return;
      }
      if (!this.consentAgreed) {
        this.error = "개인정보 수집 및 이용에 동의해야 합니다.";
        return;
      }

      const submissionData = {
        ...this.formData,
        inquiryType: this.selectedInquiryType,
      };

      fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
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
input:focus,
textarea:focus {
  outline: none; /* 기본 outline 제거 */
  border-color: #007bff; /* 커스텀 포커스 색상 */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* 선택 시 외곽선 강조 효과 */
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
  margin-bottom: 3rem;
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
  margin-bottom: 0.5rem;
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

.radio-group {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  align-items: center;

  flex-wrap: nowrap;
  /* 줄 바꿈 방지 */
  width: 100%;
  /* 부모 컨테이너 너비에 맞춤 */
}

.radio-group div {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* 버튼과 텍스트 간 간격 */
  white-space: nowrap;
  /* 텍스트 줄 바꿈 방지 */

}

.radio-group input {
  margin: 0;
  /* 기본 여백 제거 */
}

.additional-info {
  resize: none;
  /* 사용자가 크기 조정 불가능 */
  height: 10rem;
  /* 원하는 높이로 설정 */
  width: 100%;
  /* 부모 너비에 맞춤 */
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1.5px solid black;
  background-color: transparent;
  border-radius: 0.5rem;
  margin-top: 1rem;

}

.consent-checkbox {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center; /* 세로 정렬 */
  width: 100%;
  border: #0056b3 4px;
}

.consent-checkbox label {
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 1rem;
  gap: 0.5rem;
}

.consent-checkbox input {
  margin: 0;
  /* 기본 여백 제거 */
}
.consentBtn{
  background-color: #5B67EC;
  color: white;
  margin-right: 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  font-size: 0.9rem;
  
}
.consent-description {
  font-size: 0.8rem;
  margin-top: 1rem;
  color: #555;
  /* 설명 텍스트 색상 */
}

.submit {
  background-color: #5B67EC;
  color: white;
  border: none;
  border-radius: 5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  /* 마우스 포인터 변경 */
  transition: background-color 0.3s, transform 0.2s;
  margin-top: 2rem;
}

/* 마우스 오버 효과 */
.submit:hover {
  background-color: #0056b3;
  /* 더 어두운 배경색 */
  transform: scale(1.05);
  /* 살짝 확대 */
}

/* 버튼 클릭 시 효과 */
.submit:active {
  background-color: #003d80;
  /* 더 어두운 배경색 */
  transform: scale(0.95);
  /* 살짝 축소 */
}

/* 태블릿 */
@media (max-width: 768px) {
  .contact-container {
    padding: 2rem 1rem;
  }
  .contact-intro h1 {
    font-size: 1rem;
    line-height: 1.5; /* 줄 간격 추가 */
    white-space: pre-line; /* 줄바꿈 허용 */
  }

  .contact-form {
    max-width: 100%;
    gap: 0.5rem;
  }

  .submit {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }

  .radio-group {
    gap: 1rem;
    flex-wrap: wrap;
  }
}

/* 모바일 */
@media (max-width: 480px) {
  .contact-intro h1{
    font-size: 1rem;
  }

  .radio-group div {
    width: 100%;
  }

  .radio-group label {
    display: flex;
    align-items: center;
    /* 체크박스와 텍스트 정렬 */
    gap: 0.5rem;
    /* 버튼과 텍스트 간 간격 */
  }
  .form-group textarea {
    width: 85%; 
   
  }

  .form-group input {
    width: 85%; /* 다른 입력 필드도 너비 조정 가능 */
  }
  .consentText{
    font-size: 0.8rem;
  }
  .consent-description{
    font-size: 0.6rem;
  }
}


/* 노트북 */
@media (max-width: 1024px) {
  .contact-container {
    padding: 3rem 2rem;
  }

  .contact-form {
    max-width: 80%;
  }

  .radio-group {
    gap: 1.5rem;
  }
}
</style>
