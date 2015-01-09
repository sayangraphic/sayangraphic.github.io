$(function() {
    $("img.lazy").unveil(5000, function() {
        $(this).load(function() {
            this.style.opacity = 1;
        });
    });
});