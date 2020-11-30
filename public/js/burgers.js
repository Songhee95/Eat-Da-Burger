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

    $('.devour_btn').on('click', (event)=>{
        var dataId = $(event.target).data("id")
        console.log(dataId)
        console.log("devour button clicked")
    })
})