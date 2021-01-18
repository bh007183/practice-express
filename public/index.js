$(".enter").on("click", function(event){
    const data = {
    title: $(".input-title").val(),
    where: $(".input-where").val(),
    when: $(".input-when").val()
    }

    $.ajax({
        url: "/api/data",
        method: "POST",
        data: data
    })
    
})



$.ajax({
    url: "/api/data",
    method: "GET"
})