window.onload = function(){
    $.get("../global/nav.html", function(data){
        $("#nav").html(data);
    })
    $.get("../global/footer.html", function(data){
        $("#footer").html(data);
    })
}