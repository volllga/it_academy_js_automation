module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jasmine": true
    },

    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jasmine/recommended"
    ],

    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
    },

    "plugins": [
        "@typescript-eslint",
        "jasmine",
    ],

    "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
}
