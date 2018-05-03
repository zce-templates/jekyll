# :construction: @zce-templates/jekyll

[![Build Status][travis-image]][travis-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> :construction: A template for generating jekyll site by [zce-cli](https://github.com/zce/zce-cli)

## Usage

```shell
# Install the zce-cli globally
$ yarn global install zce-cli # or npm install -g zce-cli

# Init a site through this template
$ zce init jekyll my-site
$ cd my-site

# Installing the dependencies
$ bundle install

# Build the site on the preview server
$ bundle exec jekyll serve

# Now browse to http://localhost:4000
```

## Requirements

**Required jekyll environment**

Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/), install [Bundler](https://bundler.io/) with `gem install bundler`, and finally run `bundle install`. This will install all Ruby dependencies, such as Jekyll and plugins.

> Windows users: Read this guide to get Jekyll up and running without problems.

## License

[MIT](LICENSE) &copy; [汪磊](https://zce.me)



[travis-image]: https://img.shields.io/travis/zce-templates/jekyll.svg
[travis-url]: https://travis-ci.org/zce-templates/jekyll
[devdependency-image]: https://img.shields.io/david/dev/zce-templates/jekyll.svg
[devdependency-url]: https://david-dm.org/zce-templates/jekyll?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: http://standardjs.com
