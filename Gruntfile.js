module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 's',
            width: '30%',
            suffix: '',
            quality: 50
          },{
            name: 'm',
            width: '45%',
            suffix: '',
            quality: 50
          },{
            name: 'l',
            width: '60%',
            suffix: '',
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'img/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
