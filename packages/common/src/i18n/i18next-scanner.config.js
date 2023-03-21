const fs = require('fs');
const chalk = require('chalk');

module.exports = {
  options: {
    sort: true,
    debug: true,
    removeUnusedKeys: true,
    func: {
      list: ['i18next.t', 'i18n.t', 't', 'trans', 'makeTrans'],
      extensions: ['.js', '.jsx'],
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.js', '.jsx'],
    },
    lngs: ['en'],
    ns: ['app'],
    defaultLng: 'en',
    defaultNs: 'app',
    defaultValue: (lng, ns, key) => {
      if (lng === 'en') {
        return key;
      }
      return '';
    },
    resource: {
      loadPath: 'src/locales/mobile/{{lng}}/{{ns}}.json',
      savePath: 'src/locales/mobile/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: '::',
    keySeparator: '=>',
  },
  transform: function customTransform(file, enc, done) {
    const {parser} = this;
    const content = fs.readFileSync(file.path, enc);
    let count = 0;

    parser.parseFuncFromString(
      content,
      {list: ['i18next._', 'i18next.__']},
      (key, options) => {
        parser.set(
          key,
          Object.assign({}, options, {
            nsSeparator: false,
            keySeparator: false,
          }),
        );
        count += 1;
      },
    );

    if (count > 0) {
      console.log(
        `i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(
          JSON.stringify(file.relative),
        )}`,
      );
    }

    done();
  },
};
