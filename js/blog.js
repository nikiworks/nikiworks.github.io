$(function() {

    $.getJSON("./data/data.json", function(data){
        for(var i in data){

          $(".contents").append(
          	"<li><a href='./data.html?src=" 
          	+ data[i].id + 
          	"' ><img src='http://placehold.jp/24/cccccc/ffffff/250x250.png?text="
          	+ data[i].tag + 
          	"'>"
          	+ data[i].title + 
          	"</a></li>");

        }
    });

});