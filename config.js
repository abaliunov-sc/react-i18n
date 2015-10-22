var src = './src';
var dest = './build';
var test = './test';

/**
 * @auhor Alexander Frolov
 *
 * The project configuration
 */
module.exports = {
  //common paths options
  paths: {
    //destination JS documents folder
    doc: dest + '/doc',
    //source folder
    src: src,
    //destination folder
    dest: dest,
    //test folder
    test: test
  },
  browserSync: {
    server: {
      //express handling as static resources
      baseDir: [src + '/www', dest]
    }
  },
  proxy: {
    url: 'http://test.jcatalog.com/demo-app/demo',
    login: 'jcadmin',
    password: 'jcadmin',
    language: 'en'
  },
  browserify: {
    //you can select stage option according
    //to ref http://babeljs.io/docs/usage/experimental/
    babelify: {stage: 0},
    // Enable source maps
    debug: true,
    //base dir for sources folder
    basedir: src + '/app',
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [
      {
        //destination folder
        dest: dest,
        //list of entry files related basedir
        entries: ['IeIntlPolyfill.js', 'app.js'],


        //output file name
        outputName: 'app.bundle.js',
        /*
         * exported variables as global variable
         */
        standalone: 'app.render'
      }
    ]
  }
};
