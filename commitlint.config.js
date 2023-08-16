module.exports = {
  plugins: [
    {
      rules: {
        'header-message': (parsed) => {
          const { header } = parsed;
          const pattern = /^([A-Z]+-\d+|bugfix):.{4,}$/;

          if (!pattern.test(header)) {
            return [
              false,
              'Commit message should follow format: PROJECT-123: message or bugfix: message. Message should be at least 3 characters long.',
            ];
          }

          return [true, ''];
        },
      },
    },
  ],
  rules: {
    'header-message': [2, 'always'],
  },
};
