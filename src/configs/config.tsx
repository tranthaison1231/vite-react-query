export const formConfig = {
  validateMessages: {
    required: 'Please enter ${label}!',
    whitespace: ' ${label} cannot be empty!',
    string: {
      min: '${label} must be miximun ${min} characters.',
      max: '${label} must be maximum ${max} characters.',
    },
    types: {
      number: '${label} must be number.',
    },
    pattern: {
      mismatch: '${label} is not valid!',
    },
  },
  requiredMark: true,
};

export const appConfig = {
  title: 'Rent Admin',
  logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/184_Jira_logo_logos-512.png',
};
