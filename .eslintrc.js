module.exports = {
  "root": true,
  "ignorePatterns": [
    "projects/**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
      ],
      "rules": {
        "no-multiple-empty-lines": [
          "error",
          {
            "max": 1
          }
        ],
        "no-console": "warn",
        "no-debugger": "warn",
        "import/prefer-default-export": "off",
        "linebreak-style": 0,
        "no-shadow": "off",
        "max-len": "off",
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        "class-methods-use-this": "off",
        "object-curly-spacing": ["error", "always"],
        semi: [2, "always"],
        "no-underscore-dangle": "off",
        "arrow-parens": "off",
        "require-await": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        camelcase: "off",
        "no-await-in-loop": ["warn"],
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "warn",
        "@typescript-eslint/explicit-function-return-type": ["warn"],
        "space-before-function-paren": ["error", {
          anonymous: "never",
          named: "never",
          asyncArrow: "always"
        }],
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ]
      }
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        "plugin:@angular-eslint/template/recommended"
      ],
      "rules": {}
    }
  ]
}
