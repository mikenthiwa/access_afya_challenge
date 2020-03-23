module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "quotes": [
        "error",
        "single"
        ],
        "new-cap": 0,
        "no-console": 1,
        "no-debugger": 1,
        "no-param-reassign": 0,
        "no-var": 1,
        "semi": [
        1,
        "always"
        ],
        "no-trailing-spaces": 0,
        "eol-last": 2,
        "no-unused-vars": 0,
        "no-underscore-dangle": 0,
        "no-alert": 1,
        "react/jsx-indent": [
        "error",
        2
        ],
        "indent": [
        "error",
        2
        ],
        "no-lone-blocks": 0,
        "jsx-quotes": 1,
    }
};
