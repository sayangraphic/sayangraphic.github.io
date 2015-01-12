$(function() {
    $("img.lazy").unveil(2000, function() {
        $(this).load(function() {
            this.style.opacity = 1;
        });
    });
});