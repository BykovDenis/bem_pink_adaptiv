module.exports =  {
    // Development settings
 
    
  
  
    autoprefixer: {
      options: {
        browsers: ['last 30 versions']
      },
      files: {
        'desktop.bundles/css/style.css': 'desktop.bundles/css/style.css'
      }
    },
    watch: {
      sass: {
        files: ['desktop.bundles/less/**/*.{less}','desktop.bundles/less/_partials/**/*.{less}'],
        tasks: ['less:dist', 'autoprefixer']
      },
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    }

    

};