module.exports = {
    extends: ['git-commit-emoji', 'cz'],
    rules: {
        'body-leading-blank': [1, 'always'],
        // 'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        // 'footer-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 72],
    },
};
