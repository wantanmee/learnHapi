module.exports = {
    "extends": "airbnb",
    // "installedESLint": true,
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
    },
    "env": {
        "node": true,
        "es6": true,
    },
    "parser": "babel-eslint",
    "rules": {
        "strict": [2, "safe"],
        "indent": [2, 4, { "SwitchCase": 1 }]
    }
};