module.exports = {
    module: {
        name: 'pipDates',
        styles: 'dates',
        export: 'pip.dates',
        standalone: 'pip.dates'
    },

    build: {
        js: false,
        ts: false,
        tsd: true,
        bundle: true,
        html: true,
        sass: true,
        lib: true,
        images: true,
        dist: false
    },

    typescript: {
        noImplicitAny: false,
        declaration: true
    },

    file: {
        lib: [
            '../pip-webui-lib/dist/**/*',            
            // '../pip-webui-test/dist/**/*',
            '../pip-webui-services/dist/**/*',
            '../pip-webui-themes/dist/**/*'
        ]
    },

    samples: {
        port: 8042
    },

    api: {
        port: 8081
    }
};
