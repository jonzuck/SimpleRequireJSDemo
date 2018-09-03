define(['text'], function(text) {
    var buttonMethod = {};
    console.log('loaded buttonModule');

    buttonMethod.alert = function() {
        msg = text;
        alert('Hi');
        return msg;
    }
    return buttonMethod.alert;
})