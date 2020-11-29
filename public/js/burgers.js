$(function(){
    $(".submit").on("click", () =>{
        console.log('button clicked!!')
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
                location.reload();
            }
        )
    })
})