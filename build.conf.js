module.exports = {
    module: {
        name: 'pipDates',
        styles: 'dates'
    },

    build: {
        js: true,
        ts: true,
        html: true,
        css: true,
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
