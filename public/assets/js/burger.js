$(function() {
    $("#create-update-form").on("submit", function (event) {
        event.preventDefault();

        $("#devour_me").on("click", function (event) {
            var id = $(this).data("id");
            var devour = $(this).data("devour");

            var newDevour = {
                devoured: devour
            };
        

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevour
        }).then(
            function () {

                console.log("New Devour");
                location.reload();

            }
        )
})
        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger created");
                location.reload();
            }
        )
    });
});