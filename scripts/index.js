requirejs.config({
    baseUrl: 'scripts',
    paths: {
        jquery: 'https://unpkg.com/jquery@3.6.0/dist/jquery',
        bootstrap: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min'
    },
    shim:{
        bootstrap:{
            deps:[
                'link!https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'
            ]
        }
    }
});