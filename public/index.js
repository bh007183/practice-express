$(".enter").on("click", function(event){
    event.preventDefault()
    $(".container").empty()
    const data = {
    title: $(".input-title").val(),
    where: $(".input-where").val(),
    when: $(".input-when").val()
    }

    $.ajax({
        url: "/api/data",
        method: "POST",
        data: data,
        success: function(){
            $(".container").append(
            `<div class="card">
            <div class="title">${data.title}</div>
            <div class="where">${data.where}</div>
            <div class="when">${data.when}</div>
        </div>`
    )}
    }).then(function(){
        $(".input-title").val(""),
        $(".input-where").val(""),
        $(".input-when").val("")
    })

    $.ajax({
        url: "/api/data",
        method: "GET"
        
    }).then(function(data){
        const dataParsed = JSON.parse(data)
        for(let i = 0; i < dataParsed.length; i++){
            $(".container").append(
                `<div class="card">
                <div class="title">${dataParsed[i].title}</div>
                <div class="where">${dataParsed[i].where}</div>
                <div class="when">${dataParsed[i].when}</div>
            </div>`
        )
    }  
   
    })  
})


const disco = setInterval(function(){
const colorArray = ["yellow", "pink", "purple", "red", "limegreen", "blue", "orange", "brown"]
let color = colorArray[Math.floor(Math.random() * colorArray.length)]
$(".card").css("background-color", `${color}`)
},30)

