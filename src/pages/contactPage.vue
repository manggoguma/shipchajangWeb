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
            <div v-for="(type, index) in inquiryTypes" :key="index">
              <label>
                <input type="radio" :value="type.value" v-model="selectedInquiryType" name="inquiryType" />
                <span>{{ type.label }}</span> <!-- label만 출력 -->
              </label>
            </div>

          </div>
        </div>

        <!-- 문의사항 입력 필드 -->
        <div v-for="(placeholder, key) in placeholders" :key="key" class="form-group">
          <label :for="key">{{ key }}</label>
          <template v-if="key === '문의내용'">
            <textarea :id="key" :name="key" v-model="formData[key]" :placeholder="placeholder" rows="5"
              class="additional-info"></textarea>
            <!-- 개인정보 동의 체크박스 -->
            <div class="consent-checkbox">
              <label>
                <input type="checkbox" v-model="consentAgreed" id="consentCheckbox" />
              </label>
              <router-link to="/privacy">
                <span class="consentText">(필수) 개인정보 수집 및 이용에 동의합니다</span>
              </router-link>
            </div>
            <span class="consent-description">* 입력하신 정보는 문의 답변 및 서비스 제공을 위해 사용됩니다</span>
          </template>
          <template v-else>
            <input type="text" :id="key" :name="key" v-model="formData[key]" :placeholder="placeholder" :required="Object.keys(formData).some(
              (requiredKey) =>
                requiredKey.includes('(필수)') && requiredKey === key
            )" @input="handleInputChange(key)" />
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
        "주차장 주소(필수)": "",
        "문의내용": "",
      },
      placeholders: {
        "이름(필수)": "홍길동",
        "연락처(필수)": "010-1234-1234",
        "이메일(필수)": "shipchajang@naver.com",
        "주차장 주소(필수)": "광주광역시 동구 동계천로 150, IPLEX 103호",
        "문의내용": "주차 가능 대수, 공유 시간등을 적어주시면, 상담이 더 빨라져요!",
      },
      inquiryTypes: [
        { label: "신규 제휴 문의", value: "NEW" },
        { label: "기존 제휴 업체 문의", value: "EXISTING" },
        { label: "기타", value: "ETC" },
      ],
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
  computed: {
    errorFromStore() {
      return this.$store.state.error;
    },
  },
  methods: {
    updateView() {
      this.isMobileView = window.innerWidth <= 480; // 모바일 뷰 여부 업데이트
    },
    handleInputChange(key) {
      let value = this.formData[key];

      if (key === "연락처(필수)") {
        // 숫자만 남기기
        value = value.replace(/\D/g, "");

        // 3-4-4 포맷 적용
        if (value.length > 3 && value.length <= 7) {
          value = `${value.slice(0, 3)}-${value.slice(3)}`;
        } else if (value.length > 7) {
          value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
        }

        // 업데이트된 값 저장
        this.formData[key] = value;
      }

      // 이메일 유효성 검사
      if (
        key === "이메일(필수)" &&
        value &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ) {
        this.error = "이메일 형식이 올바르지 않습니다.";
      } else {
        this.error = "";
      }
    }
    ,

    async handleSubmit() {
      const requiredFields = Object.keys(this.formData).filter((key) =>
        key.includes("(필수)")
      );
      // 필수 입력 값 확인
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

      // 제출 데이터 준비
      const submissionData = {
        type: this.selectedInquiryType,
        inquirerName: this.formData["이름(필수)"],
        inquirerContact: this.formData["연락처(필수)"],
        inquirerEmail: this.formData["이메일(필수)"],
        parkingAddress: this.formData["주차장 주소(필수)"],
        content: this.formData["문의내용"] || null,
      };
      console.log("전송 데이터:", submissionData);

      try {
        // Vuex 액션 호출
        await this.$store.dispatch("inquiry", submissionData);

        // 서버 응답 확인 후 사용자 알림
        if (!this.errorFromStore) {
          alert("성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
        }
      } catch (error) {
        console.error("문의 제출 중 오류 발생:", error);
        alert("문의 제출 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    },
  },
};
</script>

<style scoped>
/* 공통 스타일 */
textarea,
input {
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1.5px solid black;
  background-color: transparent;
  border-radius: 0.5rem;
  margin-top: 1rem;
  box-sizing: border-box;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

textarea.additional-info {
  resize: none;
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
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}

.radio-group {
  margin-bottom: 0.5rem;
  /* 필드 간 동일 간격 설정 */
  margin-top: 1rem;
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
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #0056b3;
}

button:active {
  background-color: #003d80;
  transform: scale(0.95);
}

/* 문의 유형 스타일 */
.radio-group {
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  /* 가로로 넘치면 다음 줄로 이동 */
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.radio-group input[type="radio"] {
  width: 1rem;
  height: 1rem;
  margin: 0;
}

.radio-group span {
  font-size: 1rem;
  color: #333;
  line-height: 1.2;
}

.additional-info {
  height: 10rem;
  width: 100%;
}

.consent-checkbox {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

}

.consent-checkbox label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  /* 내부 여백 */
}

.consent-checkbox label input[type="checkbox"] {
  width: 1rem;
  /* 체크박스 크기 */
  height: 1rem;
  margin: 0;
  /* 기본 여백 제거 */
}

.consent-description {
  font-size: 0.8rem;
  margin-top: 1rem;
  color: #555;
}

.submit {
  background-color: #5B67EC;
  color: white;
  border: none;
  border-radius: 5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 2rem;
}

.submit:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* 반응형 스타일 - 태블릿 */
@media (max-width: 1024px) {
  .contact-container {
    padding: 3rem 2rem;
  }
  .contact-intro h1 {
    font-size: 1.5rem;
   
  }
  .contact-form {
    max-width: 80%;
  }

  .radio-group {
    gap: 1.5rem;
  }
}

/* 반응형 스타일 - 모바일 */
@media (max-width: 768px) {
  .contact-container {
    padding: 2rem 1rem;
  }

  .contact-intro h1 {
    font-size: 1rem;
    line-height: 1.5;
    white-space: pre-line;
  }

  .contact-form {
    max-width: 100%;
    gap: 0.5rem;
  }

  .submit {
    font-size: 1rem;
    padding: 1rem 0.5rem;
  }
}

/* 반응형 스타일 - 모바일 작은 화면 */
@media (max-width: 480px) {
  .contact-content {
    width: 100%;
    padding: 0;
  }

  .contact-form {
    width: calc(100% - 1rem); /* 전체 너비에서 좌우 여백을 합산한 공간 확보 */
    margin: 0 auto; /* 중앙 정렬 */
    padding: 0.7rem; /* 내부 여백 추가 */
    box-sizing: border-box; /* 패딩 포함한 크기 계산 */
  }


  textarea,
  input {
    font-size: 0.9rem;
    width: 100%;
  }

  .additional-info {
    padding: 0.5rem;
  }

  .consent-checkbox {
    width: 100%;
  }

  .consent-description {
    font-size: 0.6rem;
  }

  .radio-group {
    flex-direction: column;
    /* 세로 정렬 */
    gap: 1rem;
    /* 간격 조정 */
    align-items: flex-start;
    /* 왼쪽 정렬 */
  }

  .radio-group label {
    gap: 0.5rem;
    /* 버튼과 텍스트 간격 유지 */
    width: auto;
    /* 크기 자동 */
  }

  .radio-group span {
    font-size: 0.9rem;
  }

  .consentText {
    font-size: 0.8rem;
  }

  .consent-description {
    font-size: 0.6rem;
    margin-top: 1rem;
    color: #555;
  }

  .submit {
    font-size: 1rem;
    padding: 0.8rem 0.5rem;
  }
}
@media screen and (max-height: 1024px) and (min-width: 1366px) and (orientation: landscape) {
  .contact-container {
    padding: 4rem 11rem;
}
}
@media screen and (max-height:820px) and (min-width: 1180px) and (orientation: landscape) {
  .contact-container {
    padding: 5rem 7rem;
}
}
</style>
