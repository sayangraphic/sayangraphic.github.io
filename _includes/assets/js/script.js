$(function() {
    $("img.lazy").unveil(1000, function() {
        $(this).load(function() {
            this.style.opacity = 1;
        });
    });
});