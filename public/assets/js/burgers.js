// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-hunger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).children(".id")
            .val();
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
        }).then(
            function () {
               
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // $(".create-form").on("submit", function (event) {
    //     // Make sure to preventDefault on a submit event.
    //     event.preventDefault();

    //     var newBurger = {
    //         name: $("#ca").val().trim(),
    //         hungry: $("[name=hungry]:checked").val().trim()
    //     };
});
