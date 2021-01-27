document.addEventListener("DOMContentLoaded", function(){   
    var MainImg = document.getElementById("MainImg")
    var thumbnail = document.getElementsByClassName("product-thumbnail")
    var thumbnailImg = document.getElementsByClassName("product-thumbnail-img")
    
    MainImg.addEventListener("mousemove" , function(event){
        ZoomImg(event);
    })

    MainImg.addEventListener("mouseleave" , ZoomOut)

    thumbnail[0].addEventListener("click" , function(){
        MainImg.src = thumbnailImg[0].src
    })
    thumbnail[1].addEventListener("click" , function(){
        MainImg.src = thumbnailImg[1].src
    })
    thumbnail[2].addEventListener("click" , function(){
        MainImg.src = thumbnailImg[2].src
    })

function ZoomImg(event){
    clientX = event.clientX - MainImg.offsetLeft
    clientY = event.clientY - MainImg.offsetTop
    Width =  MainImg.offsetWidth
    Height =  MainImg.offsetHeight
    clientX = clientX / Width * 30
    clientY = clientY / Height * 80
    MainImg.style.transform = "translate(-"+clientX+"%,-"+clientY+"%) scale(2)"
}
function ZoomOut(){
    MainImg.style.transform = "translate(0%,0%) scale(1)"
}
/*------*/
});

