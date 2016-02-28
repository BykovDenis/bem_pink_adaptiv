module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    scripts: {
        files: [
            'desktop.bundles/js/*.js'
        ],
        tasks: [
            'jshint',
            'uglify'
        ]
    },

    styles: {
        files: [
            'desktop.bundles/less/*.less'
        ],
        tasks: [
            'less:dev'
        ]
    },
    
    jade: {
        files: [
            'desktop.bundles/jade/*.jade'
        ],
        tasks: [
            'jade'
        ]
    },
    
};