module.exports = function (grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    typescript: {
      serversrc: {
        src: ['src/server/**/*.ts'],
        dest: 'js/server',
        options: {
          module: 'commonjs',
          target: 'es5',
          sourceMap: true,
          declaration: false,
          experimentalDecorators: true
        }
      },
      test: {
        src: ['test/**/*.ts'],
        dest: 'js/test',
        options: {
          module: 'commonjs', //or
          target: 'es5', //or es3
          sourceMap: true,
          declaration: false,
          experimentalDecorators: true
        }
      },
    },
    tsd: {
      refresh: {
        options: {
          command: 'reinstall',
          latest: true,
          config: 'tsd.json'
        }
      }
    },

    clean: [
      'js/server',
      'js/web-client',
      'js/test'
    ],

    nodemon: {
      dev: {
        script: 'js/server/hello.js'
      }
    },

  });

  grunt.loadNpmTasks('grunt-typescript');
  //grunt.loadNpmTasks('grunt-node-mocha');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-tsd');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['tsd', 'typescript:serversrc']);
  //grunt.registerTask('test', ['typescript:test', 'node_mocha:test']);
  //grunt.registerTask('coverage', ['typescript:test', 'node_mocha:coverage', 'http-server:coverage']);
  grunt.registerTask('run', ['nodemon']);
  // Must have installed node-inspector globally 'sudo npm install -g node-inspector'
  grunt.registerTask('debug', ['shell:debug']);

  grunt.registerTask('default', ['build']);
}