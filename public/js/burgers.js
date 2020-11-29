$(function(){
    $(".submit").on("click", (event) =>{
        console.log('button clicked!!')
        event.preventDefault();
        const userInput = $(".burgerInput").val();
        console.log(userInput);
        const transferData = {
            input : userInput
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: transferData
        }).then(
            function(){
                console.log("need to create new burger list");
                location.reload();
            }
        )
    })
})