module.exports = {
    types: [
        {
            value: '✨ feat',
            name: '✨ feat:     新功能',
        },
        {
            value: '🐛 fix',
            name: '🐛 fix:      修复bug',
        },
        {
            value: '📦️ build',
            name: '📦️ build:    打包',
        },
        {
            value: '⚡️ perf',
            name: '⚡️ perf:     性能优化',
        },
        {
            value: '🎉 release',
            name: '🎉 release:  发布正式版',
        },
        {
            value: '💄 style',
            name: '💄 style:    代码的样式美化',
        },
        {
            value: '♻️ refactor',
            name: '♻️  refactor: 重构',
        },
        {
            value: '✏️ docs',
            name: '✏️  docs:     文档变更',
        },
        {
            value: '✅ test',
            name: '✅ test:     测试',
        },
        {
            value: '⏪️ revert',
            name: '⏪️ revert:   回退',
        },
        {
            value: '🚀 chore',
            name: '🚀 chore:    构建/工程依赖/工具',
        },
        {
            value: '👷 ci',
            name: '👷 ci:       CI related changes',
        },
    ],
    scopes: [
        { name: '新功能' },
        { name: '修补bug' },
        { name: '文档（documentation）' },
        { name: '格式（不影响代码运行的变动）' },
        { name: '重构（即不是新增功能，也不是修改bug的代码变动）' },
        { name: '性能优化' },
        { name: '增加测试' },
        { name: '构建过程或辅助工具的变动' },
        { name: '正在进行的工作' },
    ],

    usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',

    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
  
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
        type: "Select the type of change that you're committing:",
        scope: '\nDenote the SCOPE of this change (optional):',
        // used if allowCustomScopes is true
        customScope: 'Denote the SCOPE of this change:',
        subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
        body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
        breaking: 'List any BREAKING CHANGES (optional):\n',
        footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
        confirmCommit:
            'Are you sure you want to proceed with the commit above?',
    },

    allowCustomScopes: true,
    // subjectSeparator: '',
    allowBreakingChanges: ['feat', 'fix'],
    // skip any questions you want
    skipQuestions: ['body', 'footer'],

    // limit subject length
    subjectLimit: 100,
    breaklineChar: '|', // It is supported for fields body and footer.
    footerPrefix: 'ISSUES CLOSED:',
    // askForBreakingChangeFirst : true, // default is false
};
