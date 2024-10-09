let theme = function() {
    let btn = document.querySelector('.btn-toggle');

    btn.addEventListener('click', function() {
        document.body.classList.toggle("dark");
    });

};


window.addEventListener('load', function() {
    theme();
});