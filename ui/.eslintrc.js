module.exports = {
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'no-trailing-spaces': 1,
    'semi': 1,
    'quotes': [1, 'single'],
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/attribute-hyphenation': ['warn', 'always', {ignore: ['viewBox']}],
    'prefer-template': 0,
    // FIXME: enable for the next code reformat
    'vue/require-default-prop': 0,
    // FIXME: enable for the next code reformat
    'vue/custom-event-name-casing': 0,
    // not sure about this, issue because api is in snake case
    // didn't use any data transformation as we should...
    'vue/prop-name-casing': 0,
    'no-console': ['warn', {allow: ['warn', 'error', 'debug']}],
    'arrow-parens': 1,
    'curly': 'error',
    'max-len': ['error', {'code': 100, 'ignoreUrls': true}],
    'no-else-return': 'error',
    'brace-style': 'error',
    // FIXME: try to watch what happened
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'always'
      }
    }],
    },
    // parser: 'vue-eslint-parser',
    // 'parserOptions': {
    //   'parser': 'babel-eslint',
    // }
};
