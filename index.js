const date = new Date()

module.exports = {
  name: 'jekyll',
  version: '0.1.0',
  metadata: {
    year: date.getFullYear(),
    month: ('0' + (date.getMonth() + 1)).substr(-2),
    day: ('0' + date.getDate()).substr(-2)
  },
  prompts: {
    title: {
      type: 'input',
      message: 'Site title',
      default: 'Awesome site'
    },
    email: {
      type: 'input',
      message: 'Site author email',
      default: 'example@zce.me'
    },
    description: {
      type: 'input',
      message: 'Site description',
      default: 'Awesome site'
    },
    version: {
      type: 'input',
      message: 'Project version'
    },
    license: {
      type: 'input',
      message: 'Project license'
    },
    repository: {
      type: 'input',
      message: 'Project repository'
    }
  },
  filters: {
    // TODO: custom filters
    // e.g. '**/*.scss': answers => answers.sass
  },
  helpers: {
    // TODO: custom helpers
    // e.g. uppercase: str => str.toUpperCase()
  },
  plugin: (files, app, next) => {
    // app.metadata() => answers
    // TODO: before filter
    next()
    // TODO: after template render
  },
  complete: context => {
    // TODO: generate complete callback
    console.log('  Good luck~ :-D')
  }
}
