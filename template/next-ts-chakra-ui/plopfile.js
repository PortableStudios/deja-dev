module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plop.setGenerator('component', {
    description: 'a React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
      },
      {
        type: 'input',
        name: 'folder',
        message: 'component folder (e.g. ui, layout, pages)',
      },
      {
        type: 'confirm',
        name: 'story',
        message: 'generate a story?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'test',
        message: 'generate a test?',
        default: true,
      },
    ],
    actions: (data) => {
      const actions = [];
      // Generate component file
      actions.push({
        type: 'add',
        path: 'src/components/{{folder}}/{{name}}/{{name}}.tsx',
        templateFile: 'templates/Component/Component.tsx.hbs',
      });
      // Generate index file
      actions.push({
        type: 'add',
        path: 'src/components/{{folder}}/{{name}}/index.ts',
        templateFile: 'templates/Component/index.ts.hbs',
      });
      // Generate story file
      if (data.story) {
        actions.push({
          type: 'add',
          path: 'src/components/{{folder}}/{{name}}/{{name}}.stories.tsx',
          templateFile: 'templates/Component/Component.stories.tsx.hbs',
        });
      }
      // Generate test file
      if (data.test) {
        actions.push({
          type: 'add',
          path: 'src/components/{{folder}}/{{name}}/{{name}}.test.tsx',
          templateFile: 'templates/Component/Component.test.tsx.hbs',
        });
      }
      return actions;
    },
  });
};
