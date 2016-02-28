 module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'desktop.bundles/',
            desktop.bundles: ['img/*.{png,jpg,gif}'],
            dest: 'dist/'
        }]
    }
};