module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'desktop.bundles/js',
            src: '**/*.js',
            dest: 'dist/js',
            ext: '.min.js'
        }]
    }
};