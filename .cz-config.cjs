/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-08-07 16:41:34
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-08-08 19:19:42
 * @Description : git cz 配置文件
 */
module.exports = {
  types: [
    { value: 'feat', name: '    feat: 新增功能' },
    { value: 'fix', name: '     fix: 修复问题' },
    { value: 'refactor', name: 'refactor: 重构(既不是增加feature，也不是修复bug)' },
    {
      value: 'perf',
      name: '    perf: 性能优化(类似重构，不改变接口，比如：减少内存占用、增加缓存)',
    },
    { value: 'merge', name: '   merge: 合并分支' },
    { value: 'test', name: '    test: 增加或者修改测试' },
    {
      value: 'format',
      name: '  format: 格式化代码(不影响代码运行的变动，仅仅修改代码格式)',
    },
    { value: 'docs', name: '    docs: 文档变更(文档变更、代码注释等)' },
    { value: 'revert', name: '  revert: 版本回滚' },
    { value: 'build', name: '   build: 构建相关的改动' },
    { value: 'ci', name: '      ci: ci/cd相关的配置改动' },
    { value: 'chore', name: '   chore: 其他改动非 src 或测试的改动' },
    { value: 'release', name: ' release: 发布版本' },
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    // scope: '请输入文档修改范围(可选):',
    // used if allowCustomScopes is true
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选，待优化去除，跳过即可):',
    // breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
  },
  allowCustomScopes: true,
  // allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['scope', 'body', 'footer'],
  // limit subject length, commitlint默认是72
  subjectLimit: 72,
}
