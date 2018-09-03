define(['button'], function(button) {
    var btn = document.getElementById('theButton');
    console.log('loaded myscript');

    btn.addEventListener('click', function() {
        console.log('Button clicked.');
        button();
    })
})