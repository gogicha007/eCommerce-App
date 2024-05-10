export default {
    "env": {
        "root": true,
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/quotes": "off",
        "indent": [
            "error",
            4
        ],
        "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
        "semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/no-var-requires": "error"
    }
};