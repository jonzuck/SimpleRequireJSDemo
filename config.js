requirejs.config({
        baseURL: './',
        paths: {
            button: 'buttonModule',
            text: 'textModule',
            app: 'app'
        }
    })
    // Start the main app logic.
requirejs(['button', 'text', 'app'],
    function(button, text, app) {});