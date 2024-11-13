/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-08-08 15:29:37
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-08-08 19:16:40
 * @Description : git commit 规范配置
 */
const czConfig = require('./.cz-config.cjs')
const types = czConfig.types.map(item => item.value)
module.exports = {
  // extends: ['gitmoji'],
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 类型定义
    'type-enum': [
      2, // 2 表示必须
      'always',
      types,
      // [
      // 'fix',
      // 'refactor',
      // 'perf',
      // 'merge',
      // 'test',
      // 'format',
      // 'docs',
      // 'revert',
      // 'build',
      // 'ci',
      // 'chore',
      // 'release',
      // '✨feat',
      // '🐛fix',
      // '♻️refactor',
      // '⚡️perf',
      // '🔀merge',
      // '✅test',
      // '🎨format',
      // '📝docs',
      // '⏪️revert',
      // '🔨build',
      // '👷ci',
      // '🔧chore',
      // '🔖release',
      // ],
    ],
    // subject 大小写不做校验
    'subject-case': [0],
  },
}
