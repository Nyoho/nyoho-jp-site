export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    '/node_modules/(?!@orgajs/reorg-rehype|oast-to-hast|unist-builder|hast-util-from-parse5|hastscript|property-information|hast-util-parse-selector|space-separated-tokens|comma-separated-tokens|vfile-location|web-namespaces|rehype-stringify|hast-util-to-html|html-void-elements|zwitch|stringify-entities|character-entities-legacy|character-entities-html4|ccount|hast-util-whitespace|unified|bail|devlop|is-plain-obj|trough|vfile|unist-util-stringify-position|@orgajs/reorg-parse|orga|text-kit)',
  ],
};

