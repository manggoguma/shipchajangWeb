module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
"globals": {
        "$": "readonly", // jQuery의 $를 글로벌로 선언
        "jQuery": "readonly" // jQuery 객체를 글로벌로 선언
    },
    "rules": {
        // 추가 규칙을 여기에 작성 가능
    }
};
