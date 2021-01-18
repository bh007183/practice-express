function read (){
    $.ajax({
        url: "/api/data",
        method: "GET"
        
    }).then(function(data){
        const dataParsed = JSON.parse(data)
        for(let i = 0; i < dataParsed.length; i++){
            $(".container").append(
                `<div class="card">
                <button class="button" id="button"><i class="fas fa-trash"></i></button>
                <div class="title">${dataParsed[i].title}</div>
                <div class="where">${dataParsed[i].where}</div>
                <div class="when">${dataParsed[i].when}</div>
            </div>`
        )
    }  
   
    })  }
read()
$(".button").on("click", function(){
    console.log("test")
    // $ajax({
    //     url: "/api/data/" + id,
    //     method:"DELETE"
    // })
})

// const button = document.getElementById("button")
// button.addEventListener("click", () => {
//     console.log("hello")
// })


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
            $(".container").prepend(
            `<div class="card">
            <i class="fas fa-trash"></i>
            <div class="title" >${data.title}</div>
            <div class="where">${data.where}</div>
            <div class="when">${data.when}</div>
        </div>`
    )}
    }).then(function(){
        $(".input-title").val(""),
        $(".input-where").val(""),
        $(".input-when").val("")
    })
    read()
    
})




const disco = setInterval(function(){
const colorArray = ["yellow", "pink", "purple", "red", "limegreen", "blue", "orange", "brown"]
let color = colorArray[Math.floor(Math.random() * colorArray.length)]
$(".card").css("background-color", `${color}`)
},30)

