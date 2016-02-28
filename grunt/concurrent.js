module.exports = {

    // Опции
    options: {
        limit: 3
    },

    // Задачи разработки
    devFirst: [
        'clean',
        'jshint'
    ],
    devSecond: [
        'less:dev',
        'uglify'
    ],

    // Производственные задачи
    prodFirst: [
        'clean',
        'jshint'
    ],
    prodSecond: [
        'less:prod',
        'uglify'
    ],

    // Задачи изображений
    imgFirst: [
        'imagemin'
    ]
};