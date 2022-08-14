module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jasmine": true,
        "mocha": true
    },

    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jasmine/recommended",
        "plugin:wdio/recommended"
    ],

    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
    },

    "plugins": [
        "@typescript-eslint",
        "jasmine",
        "chai-friendly",
        "wdio"
    ],

    "rules": {
      "semi": ["error", "always"],
      '@typescript-eslint/no-var-requires': 0
    }
}
