$(function () {

//eat burger
    $(".devourMe").on("click", function(event) {
        event.preventDefault();
        
        var id = $(this).data("id");
        var devour = {
            devoured: 1
        }


        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devour
        }).then(
            function () {

                console.log("New Devour");
                location.reload();

            }
        )
    })
//adding new burger 
    $(".UpdateForm").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
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