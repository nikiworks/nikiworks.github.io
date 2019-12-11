$(function() {

    $.getJSON("./data/data.json", function(dataname){
        for(var i in dataname){
          var path ="./data/md/"+ dataname[i].id +".md";
          $.get(path, function(data, status, xhr) {
              if (status == "success") {
                
                

                console.log(data);

                var arr = data.split(/\r\n|\r|\n/);
                $("#output").append(
                  "<div><a href='./data.html?src="
                  + i +
                  "' ><img src='' alt='"
                  + arr[1] + 
                  "'>" 
                  + arr[0] + 
                  "" 
                  + dataname[i].tag
                  +"</a></div>");


              }
          });






        }
    });

});


