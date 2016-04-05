module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['player/static/js/app.js', 'player/static/js/controller.js', 'player/static/js/service.js', 'player/static/js/directive.js', 'player/static/js/router.js'],
        dest: 'player/static/js/index.cat.js'
      }
    },
    uglify: {
      options: { mangle: false },
      my_target: { files: { 'player/static/js/index.min.js': ['player/static/js/index.cat.js'] } }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify', 'concat']);
};
