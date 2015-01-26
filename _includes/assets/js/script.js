$(function() {
    $(".contact select#subject").on('change', function() {
        $("input#_subject").val("تماس: " + $(this).find("option:selected").text() + '');
    });
    $(".contact form").on('submit', function(event) {
        event.preventDefault();

        $.ajax({
            url: "//formspree.io/info@sayangraphic.com",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                subject: $('#subject').val(),
                message: $('#message').val(),
                _subject: $('#_subject').val(),
                _gotcha: $('#_gotcha').val()
            },
            success: function() {
                // Success message
                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-success')
                    .append("پیامتون با موفقیت ارسال شد.");
                $('#success > .alert-success')
                    .append('</div>');

                //clear all fields
                $('.contact form').trigger("reset");
            },
            error: function() {
                // Fail message
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-danger').append("متاسفانه پیامتون ارسال نشد. بعد دوباره امتحان کنید.");
                $('#success > .alert-danger').append('</div>');
                //clear all fields
                //$('.contact form').trigger("reset");
            },
            dataType: "json"
        });
    });
    $("img.lazy").unveil(1000, function() {
        $(this).load(function() {
            this.style.opacity = 1;
        });
    });
});