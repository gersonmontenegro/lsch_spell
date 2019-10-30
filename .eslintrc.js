{
  "parser": "babel-eslint",
  "plugins": [
      "react",
      "react-native",
      "react-hooks"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "ecmaVersion": 6,
          "jsx": true,
          "modules": true
      }
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "airbnb"
  ],
  "rules": {
      "indent": [
          "error",
          4,
          {
              "SwitchCase": 1
          }
      ],
      "import/no-named-as-default": "off",
  },
}