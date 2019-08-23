document.body.onload = function() {
    setTimeout(function() {
        let preloader = document.getElementById('page-preloader');
        let redOval = document.getElementById('redOval');
        let loader = document.getElementsByClassName('loader')[0];
        if( !preloader.classList.contains('done')) {
            preloader.classList.add('done');
            loader.classList.add('loaderDone')
        }
        if( !redOval.classList.contains('klor-animation')) {
            redOval.classList.add('klor-animation');
        }
    },600);
}