module.exports = {
    // Development settings
    
 
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: 'desktop.bundles/less',
            src: ['*.less'],
            dest: 'desktop.bundles/css',
            ext: '.css'
        }]
    },
    // Production settings
    prod: {
        options: {
            outputStyle: 'compressed',            
            sourceMap: false
        },
        files: [{
            expand: true,
            cwd: 'desktop.bundles/less',
            src: ['*.less'],
            dest: 'desktop.bundles/css',
            ext: '.css'
        }]
    }
    
};