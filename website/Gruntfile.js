module.exports = function (grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            dist: [
                'Gruntfile.js',
                'javascripts/**/*.js'
            ],
            options: {
                globals: {
                    debug: true,
                    forin: true,
                    eqnul: true,
                    noarg: true,
                    noempty: true,
                    eqeqeq: true,
                    boss: true,
                    loopfunc: true,
                    evil: true,
                    laxbreak: true,
                    bitwise: true,
                    undef: true,
                    curly: true,
                    nonew: true,
                    browser: true,
                    devel: true,
                    jquery: true
                }
            }
        },

        handlebars: {
            options: {
                namespace: 'CBR.Templates',
                processName: function (filePath) {
                    return filePath.replace(/^javascripts\/templates\//, '').replace(/\.hbs$/, '');
                }
            },
            all: {
                files: {
                    "public/templates.js": ["javascripts/templates/**/*.hbs"]
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    // Libs
                    "libs/modernizr-custom.js",
                    "libs/p.js",
                    "libs/jquery-2.1.1.min.js",
                    "libs/bootstrap/javascripts/bootstrap.min.js",
                    "libs/fastclick.js",
                    //"libs/handlebars.runtime-v1.3.0.js",
                    "libs/lodash.min.js",
                    "libs/jquery.visible.min.js",
                    //"libs/js-breakpoints/breakpoints.js",
                    //"libs/moment.min.js",
                    "libs/jquery.fineuploader-5.0.3/jquery.fineuploader-5.0.3.js",
                    "libs/jquery.dotdotdot.min.js",

                    // Global
                    "javascripts/global.js",

                    // Services
                    "javascripts/services/validator.js",

                    // Models
                    "javascripts/models/jsonSerializable.js",
                    "javascripts/models/country.js",
                    "javascripts/models/account.js",
                    "javascripts/models/project.js",

                    // Controllers
                    "javascripts/controllers/base.js",
                    "javascripts/controllers/citizenHiveOpenProjectsBase.js",
                    "javascripts/controllers/index.js",
                    "javascripts/controllers/createProject.js",
                    "javascripts/controllers/previewNewProject.js",
                    "javascripts/controllers/join.js",
                    "javascripts/controllers/viewProject.js",

                    // Templates
                    "javascripts/templates/handlebarsHelpers.js",
                    "public/templates.js"
                ],
                dest: 'public/<%= pkg.name %>.js'
            }
        },

        sass: {
            build: {
                files: {
                    'public/<%= pkg.name %>.css': 'sass/main.scss'
                }
            }
        },

        /* Task fails
        cssc: {
            build: {
                options: {
                    consolidateViaDeclarations: true,
                    consolidateViaSelectors: true,
                    consolidateMediaQueries: true
                },
                files: {
                    'public/<%= pkg.name %>.css': 'public/<%= pkg.name %>.css'
                }
            }
        }, */

        cssmin: {
            build: {
                src: [
                    // Libs
                    'libs/bootstrap/stylesheets/bootstrap.css',
                    'libs/jquery.fineuploader-5.0.3/fineuploader-5.0.3.min.css',

                    // Rest
                    'public/<%= pkg.name %>.css'
                ],
                dest: 'public/<%= pkg.name %>-v1.css'
            }
        },

        copy: {
            glyphicons: {
                files: [
                    {
                        expand: true,
                        cwd: "libs/bootstrap/fonts/bootstrap/",
                        src: ['*'],
                        dest: 'public/fonts/bootstrap'
                    }
                ]
            }
        },

        watch: {
            js: {
                files: ['<%= concat.dist.src %>'],
                tasks: ['buildjs']
            },

            css: {
                files: ['sass/**/*.scss'],
                tasks: ['buildcss']
            }
        }
    });

    grunt.registerTask('default', ['buildjs', 'buildcss', 'copy']);
    grunt.registerTask('buildjs', ['jshint', 'handlebars', 'concat']);
    grunt.registerTask('buildcss', ['sass', 'cssmin']);
};
