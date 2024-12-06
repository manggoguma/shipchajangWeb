// import createPersistedState from 'vuex-persistedstate';
// import { error } from 'jquery';
// import { defineAsyncComponent } from 'vue';
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state: {
        dashBoard: {
            "totalParkingCount": {},
            "totalUserCount": {}
        },
        inquiryResponse: null,
        error:null,
    },
    mutations: {
        setDashBoard(state, dashBoard) {
            state.dashBoard = dashBoard;
        },
        setError(state, error) {
            state.error = error;
        },
        setInquiryResponse(state, response) {
            state.inquiryResponse = response;
        },
    },
    actions: {
        async getDashBoard({ commit }) {
            try {
                const response = await axios.get('https://dev-api.simpleparking.co.kr/api/v1/homepage/dashboard');
                console.log('API 응답:', response.data);
                commit('setDashBoard', response.data);
                commit('setError', null);
            } catch (error) {
                const errorMessage = error.response ? error.response.data.message : error.message;
                console.error('오류:', errorMessage);
                commit('setError', errorMessage); // 에러 상태 업데이트
            }
        },
        async inquiry({ commit }, inquiryData) {
            try {
                const response = await axios.post(
                    'https://dev-api.simpleparking.co.kr/api/v1/homepage/inquiry',
                    inquiryData // 전달받은 데이터
                );
                console.log('API 응답:', response.data);
                commit('setInquiryResponse', response.data);
                commit('setError', null);
            } catch (error) {
                const errorMessage = error.response ? error.response.data.message : error.message;
                console.error('오류:', errorMessage);
                commit('setError', errorMessage); // 에러 상태 업데이트
            }
        },
    }

})

export default store;