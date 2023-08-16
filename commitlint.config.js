module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-pattern': [2, 'always', /^(bugfix-\w+|[A-Z]+-\d+):.*$/],
  },
  messages: {
    'header-pattern': 'Commit message must follow pattern: "bugfix-..." or "PROJECT-123:...".',
  },
};
