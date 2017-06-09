module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            all: {
               files: [
                   {
                       expand: true,
                       src: 'bower_components/skeleton/css/*',
                       dest: 'src/css/',
                       filter: 'isFile',
                       flatten: true
                   },
                   {
                       expand: true,
                       src: 'bower_components/jquery/dist/jquery.min.js',
                       dest: 'src/script/',
                       filter: 'isFile',
                       flatten: true
                   },
                   {
                       expand: true,
                       src: 'bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
                       dest: 'src/script/',
                       filter: 'isFile',
                       flatten: true
                   },
                   {
                       expand: true,
                       src: 'bower_components/scrollmagic/scrollmagic/minified/plugins/*',
                       dest: 'src/script/',
                       filter: 'isFile',
                       flatten: true
                   },
                   {
                       expand: true,
                       src: 'bower_components/gsap/src/minified/TweenMax.min.js',
                       dest: 'src/script/',
                       filter: 'isFile',
                       flatten: true
                   },
                   {
                       expand: true,
                       src: 'bower_components/swiper/dist/js/swiper.jquery.min.js',
                       dest: 'src/script/',
                       filter: 'isFile',
                       flatten: true
                   },
                   {
                       expand: true,
                       src: 'bower_components/swiper/dist/css/swiper.min.css',
                       dest: 'src/css/',
                       filter: 'isFile',
                       flatten: true
                   },
                   {
                       expand: true,
                       cwd: 'src/images/',
                       src: '**',
                       dest: 'dist/images',
                   },
                   {
                       expand: true,
                       src: 'src/fonts/*',
                       dest: 'dist/fonts',
                       filter: 'isFile',
                       flatten: true
                   }
               ]
            }
        },
        less: {
            default: {
                options: {
                    paths: ['src/css']
                },
                files: {
                    'src/css/main.css': 'src/css/main.less'
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'src/css',
                    ext: '.min.css'
                }]
            },
            concat: {
                    files: {
                        'dist/css/style.css': ['src/css/*.min.css' ]
                    }
            }
        },
        uglify : {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/script/main.min.js': [
                    'src/script/jquery.min.js',
                    'src/script/TweenMax.min.js',
                    'src/script/ScrollMagic.min.js',
                    'src/script/animation.gsap.min.js',
                    'src/script/debug.addIndicators.min.js',
                    'src/script/swiper.jquery.min.js',
                    'src/script/main.js'
                ]}
            }
        },
        pug : {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    'dist/index.html': ['src/views/index.pug']
                }
            }
        },
        watch: {
            style: {
                files: ['**/*.less'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            },
            view: {
                files: ['**/*.pug'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            },
            script : {
                files: ['src/script/main.js'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            }
        },
        clean : ['dist/*', 'src/css/*.css']
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('purge', ['clean']);
    grunt.registerTask('watch', ['default', 'watch']);
    grunt.registerTask('default', ['clean', 'less', 'copy', 'cssmin', 'uglify', 'pug']);
};