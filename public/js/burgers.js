$(function(){
    $(".create-form").on("submit", () =>{
        console.log('button clicked!!')
        const userInput = $(".burgerInput").val();
        console.log(userInput);
        const transferData = {
            input : userInput
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: transferData
        })
        location.reload
    })

    $('.devour_btn').on('click', (event)=>{
        var dataId = $(event.target).data("id");
        var data = {
            dataId : dataId
        }
        $.ajax("/api/devour", {
            type: "POST",
            data: data
        })   
        location.reload();
    })

    $(".delete_btn").on('click', (event)=>{
        var dataId = $(event.target).data("id");
        var data = {
            dataId : dataId
        } 
        $.ajax("/api/delete", {
            type: "POST",
            data: data
        })
        location.reload();
    })
})